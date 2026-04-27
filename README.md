# Weather1

## Keeping API keys private

This project uses an OpenWeatherMap API key through a server-side endpoint in `api/weather.js`. **Do not commit real API keys to source control.**

### Setup (local only)

1. Add a `.env.local` file in the project root:

```bash
WEATHER_API_KEY=YOUR_API_KEY_HERE
```

2. Start the local server:

```bash
node server.js
```

3. Open `http://localhost:3000` in your browser.

### Why you saw 404 on 127.0.0.1:5500

`Live Server` serves static files only. It does not execute backend code in `api/weather.js`, so `/api/weather` returns 404 there. Use `node server.js` (or Vercel dev/deploy) so the `/api/weather` route exists.

### How it works

- `index.html` calls `/api/weather?city=...`.
- `api/weather.js` reads `process.env.WEATHER_API_KEY` server-side and calls OpenWeatherMap.
- The browser never receives or stores your OpenWeather API key.

## Deploy On Vercel

1. Push your latest code to GitHub.
2. Import the repo in Vercel.
3. In Vercel Project Settings -> Environment Variables, add:

```bash
WEATHER_API_KEY=YOUR_API_KEY_HERE
```

4. Redeploy the project.

After deployment:
- Frontend is served from `index.html`.
- Backend route is available at `/api/weather`.

### For future projects

Follow the same pattern:
- Keep secrets in environment variables that are only read on the server.
- Commit a `*.example.js` (or `.env.example`) file with placeholders.
- Add a `.gitignore` entry for your local config files (e.g., `local/`, `config.js`, `.env`).

> 🔒 In a browser-only static app, API keys are always exposed. Use a server-side proxy like `api/weather.js` to keep them private.
