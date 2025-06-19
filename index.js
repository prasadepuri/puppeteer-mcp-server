const { createServer } = require('@modelcontextprotocol/server-puppeteer');

const port = process.env.PORT || 3000;

createServer().listen(port, () => {
  console.log(`MCP Puppeteer server running on port ${port}`);
});
