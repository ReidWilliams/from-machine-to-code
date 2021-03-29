const ctx = require.context('./src', true, /\.test\.js$/);
ctx.keys().forEach(ctx);
