// index.js
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config(); // using dotenv

const { ytDlpDownloader, galleryDlDownloader } = require("./utils/downloader"); // import function

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (like index.html, CSS, JS) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Example route
app.post("/api/download", (req, res) => {
  const { url_text, downloader } = req.body;
  if (url_text !== "") {
    if (downloader === "yt") {
      ytDlpDownloader(url_text);
    } else if (downloader === "gallery") {
      galleryDlDownloader(url_text);
    }
    res.json({ message: url_text });
  } else {
    res.json({ message: "Empty url" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
