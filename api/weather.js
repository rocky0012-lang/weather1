export default async function handler(req, res) {
  const city = String(req.query?.city || "").trim();
  const apiKey = process.env.WEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ message: "City is required" });
  }

  if (!apiKey) {
    return res.status(500).json({ message: "Server API key is not configured" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch weather data" });
  }
}
