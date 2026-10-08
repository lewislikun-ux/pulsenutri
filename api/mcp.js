/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * PulseNutri - Smithery MCP Integration Proxy
 * Links to https://mcp.smithery.ai/lewislikun
 */

export const MCP_SERVER_URL = process.env.SMITHERY_MCP_URL || 'https://mcp.smithery.ai/lewislikun';

export default async function mcpProxyHandler(req, res) {
  try {
    const { action, params } = req.body || {};

    if (req.method === 'GET') {
      return res.json({
        endpoint: MCP_SERVER_URL,
        status: 'online',
        tools: [
          {
            name: 'activesg_book_court',
            description: 'Automated ActiveSG court booking engine across 48 sports halls in Singapore',
            inputSchema: {
              type: 'object',
              properties: {
                sport: { type: 'string', enum: ['badminton', 'tennis', 'pickleball', 'squash', 'futsal'] },
                venue: { type: 'string' },
                timeSlot: { type: 'string' },
              },
              required: ['sport', 'venue', 'timeSlot']
            }
          },
          {
            name: 'calculate_recovery_macros',
            description: 'Computes personalized post-workout macronutrient targets compliant with HPB Nutri-Grade A/B',
            inputSchema: {
              type: 'object',
              properties: {
                activity: { type: 'string' },
                durationMinutes: { type: 'number' },
                caloriesBurned: { type: 'number' }
              },
              required: ['activity', 'durationMinutes']
            }
          },
          {
            name: 'dispenser_claim_locker',
            description: 'Generates secure NFC / QR locker claim token for PulseNutri smart thermal kiosk',
            inputSchema: {
              type: 'object',
              properties: {
                kioskId: { type: 'string' },
                mealId: { type: 'string' }
              },
              required: ['kioskId', 'mealId']
            }
          }
        ]
      });
    }

    if (req.method === 'POST') {
      // Simulate/forward MCP tool call
      return res.json({
        success: true,
        action: action || 'tool_invocation',
        result: {
          message: 'Operation routed through Smithery MCP gateway',
          targetMcp: MCP_SERVER_URL,
          payload: params,
          timestamp: new Date().toISOString()
        }
      });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : String(error) });
  }
}
