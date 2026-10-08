/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { McpHealthReport } from '../types.ts';

interface McpStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const McpStatusModal: React.FC<McpStatusModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [report, setReport] = useState<McpHealthReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchHealth = () => {
    setLoading(true);
    setError(null);
    fetch('/api/health.js')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
        return res.json();
      })
      .then((data: McpHealthReport) => {
        setReport(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to connect to /api/health.js');
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isOpen) {
      fetchHealth();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-black/[0.08] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] flex items-center justify-center text-[#414753] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 text-[#0059b5] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">hub</span>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-[#1b1b1d]">
              Smithery MCP Status Inspector
            </h3>
            <p className="text-[12px] text-[#717785]">
              Real-time telemetry via <code className="bg-[#f0edef] px-1 py-0.5 rounded text-[#0059b5]">/api/health.js</code>
            </p>
          </div>
        </div>

        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-[32px] text-[#0071e3] animate-spin">
              refresh
            </span>
            <span className="text-[14px] text-[#414753]">Pinging Smithery MCP Gateway...</span>
          </div>
        ) : error ? (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-[13px] my-4">
            <p className="font-semibold">Unable to fetch status:</p>
            <p className="mt-1">{error}</p>
          </div>
        ) : report ? (
          <div className="space-y-4">
            {/* Health Badge */}
            <div className="p-4 rounded-2xl bg-[#f6f3f5] flex items-center justify-between border border-black/[0.04]">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-3 h-3 rounded-full ${
                    report.status === 'healthy' ? 'bg-[#006e28] animate-pulse' : 'bg-amber-500'
                  }`}
                ></span>
                <div>
                  <span className="text-[14px] font-semibold text-[#1b1b1d] capitalize">
                    MCP Gateway: {report.status}
                  </span>
                  <p className="text-[11px] text-[#717785]">{report.service}</p>
                </div>
              </div>
              <span className="text-[12px] font-mono text-[#0059b5] bg-white px-2.5 py-1 rounded-full shadow-sm">
                {report.mcp.latencyMs}ms
              </span>
            </div>

            {/* Target MCP info */}
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                <span className="text-[#717785]">MCP Endpoint</span>
                <a
                  href={report.mcp.endpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#0071e3] hover:underline truncate max-w-[240px]"
                >
                  {report.mcp.endpoint}
                </a>
              </div>
              <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                <span className="text-[#717785]">Host Reachable</span>
                <span className="font-semibold text-[#006e28]">
                  {report.mcp.reachable ? 'YES (Verified)' : 'Pending'}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                <span className="text-[#717785]">Protocol Standard</span>
                <span className="text-[#1b1b1d]">{report.mcp.protocol}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                <span className="text-[#717785]">Environment</span>
                <span className="text-[#1b1b1d] uppercase font-mono text-[12px]">
                  {report.system.environment} (v{report.system.version})
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-black/[0.04]">
                <span className="text-[#717785]">Server Uptime</span>
                <span className="text-[#1b1b1d] tabular-nums">
                  {Math.floor(report.system.uptimeSeconds)} seconds
                </span>
              </div>
            </div>

            {/* Connected Services */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717785] block mb-2">
                Active MCP Tool Capabilities
              </span>
              <div className="space-y-1.5">
                {report.mcp.connectedServices.map((svc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-xl bg-[#f6f3f5] text-[12px] text-[#1b1b1d]"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#006e28]">
                      check_circle
                    </span>
                    <span>{svc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-black/[0.04]">
          <button
            onClick={fetchHealth}
            className="px-4 py-2 rounded-full bg-[#f0edef] hover:bg-[#eae7ea] text-[#1b1b1d] text-[13px] font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            <span>Refresh Health</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0059b5] transition-all cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
