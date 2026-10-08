/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * PulseNutri - MCP Health Status Endpoint
 * Endpoint: /api/health.js and /api/health
 * Monitored MCP: https://mcp.smithery.ai/lewislikun
 */

export const SMITHERY_MCP_URL = process.env.SMITHERY_MCP_URL || 'https://mcp.smithery.ai/lewislikun';

/**
 * Check the status of the Smithery MCP server
 */
export async function checkMcpStatus() {
  const startTime = Date.now();
  let mcpReachable = false;
  let statusCode = null;
  let responseTimeMs = 0;
  let error = null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(SMITHERY_MCP_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'User-Agent': 'PulseNutri-MCP-Monitor/1.0',
      },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    statusCode = res.status;
    responseTimeMs = Date.now() - startTime;
    // Any HTTP response (including 200, 401, 404, etc.) indicates the endpoint host is reachable
    mcpReachable = res.status >= 200 && res.status < 500;
  } catch (err) {
    responseTimeMs = Date.now() - startTime;
    error = err instanceof Error ? err.message : String(err);
    mcpReachable = false;
  }

  return {
    status: mcpReachable ? 'healthy' : 'degraded',
    service: 'PulseNutri Ecosystem & Smithery MCP Gateway',
    timestamp: new Date().toISOString(),
    mcp: {
      endpoint: SMITHERY_MCP_URL,
      reachable: mcpReachable,
      httpStatus: statusCode,
      latencyMs: responseTimeMs,
      error: error,
      protocol: 'Model Context Protocol (MCP v1.0)',
      connectedServices: [
        'ActiveSG Court Booking Bot Grid',
        'HPB Nutri-Grade Nutrient Engine',
        'OneMap Singapore GIS Geospatial',
        'Singpass Biometric Verification Token',
        'Smart Thermal Kiosk IoT Dispenser Network'
      ]
    },
    system: {
      uptimeSeconds: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.2.0'
    }
  };
}

/**
 * Express Request Handler
 */
export default async function healthHandler(req, res) {
  try {
    const report = await checkMcpStatus();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    const httpCode = report.status === 'healthy' ? 200 : 200; // Return 200 with degraded payload so clients can inspect report
    return res.status(httpCode).json(report);
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      error: err instanceof Error ? err.message : String(err),
      timestamp: new Date().toISOString()
    });
  }
}
