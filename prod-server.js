const path = require('path');
const express = require('express');
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const app = express(),
  BUILD_DIR = path.join(__dirname, 'build'),
  HTML_FILE = path.join(BUILD_DIR, 'index.html');

app.use(express.static(BUILD_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

console.log(process.env)

app.use(expressCspHeader({
  directives: {
    'default-src': [SELF],
    'script-src': [SELF, INLINE, 'cdn.amplitude.com'],
    'connect-src': [SELF, 'api.amplitude.com'],
    'block-all-mixed-content': true
  }
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}....`);
});
