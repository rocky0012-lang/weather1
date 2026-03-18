# Weather1

## Keeping API keys private

This project uses an OpenWeatherMap API key. **Do not commit real API keys to source control.**

### Setup (local only)

1. Copy `config.example.js` to `local/config.js`:

```bash
cp config.example.js local/config.js
```

2. Open `local/config.js` and replace `YOUR_API_KEY_HERE` with your real API key.

### How it works

- `index.html` loads `local/config.js` first, which defines a global `apiKey` value.
- `local/` is ignored via `.gitignore`, so your real key will not get committed.

### For future projects

Follow the same pattern:
- Keep secrets in a local file that is ignored by git.
- Commit a `*.example.js` (or `.env.example`) file with placeholders.
- Add a `.gitignore` entry for your local config files (e.g., `local/`, `config.js`, `.env`).

> 🔒 If you need to keep API keys truly secret in a deployed app, you'll need a backend (server-side) proxy to keep the key off the client entirely.
