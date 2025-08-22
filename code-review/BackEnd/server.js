require('dotenv').config()
const app = require('./src/app')

console.log("Loaded PORT from .env:", process.env.PORT)   // 👈 debug

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
