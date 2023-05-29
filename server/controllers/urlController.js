const Url = require("../models/Url");
const shortid = require("shortid");

const createShortUrl = async (req, res) => {
  try {
    
    let { originalUrl, shortUrl } = req.body;

    const urlPattern =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)$/;

    // Check if the original URL is valid with regex
    if (!urlPattern.test(originalUrl)) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    if (!shortUrl) {
      // Generate a random short URL if none provided
      shortUrl = shortid.generate();
    } else {
      // Check if the custom URL already exists
      const url = await Url.findOne({ shortUrl });
      if (url) {
        return res.status(400).send({ error: "Short URL already exists" });
      }
    }
    // Create a new URL instance
    const url = new Url({ originalUrl, shortUrl });

    await url.save();

    res.status(201).json({ shortUrl: url.shortUrl });
  } catch (error) {
    console.error("Error creating a shortened URL:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const redirectToUrl = async (req, res) => {
  try {
    // Extract the short URL from the request query
    const { shortUrl } = req.query;

    // Find the corresponding URL in the database
    const url = await Url.findOne({ shortUrl });

    // If the URL is found, redirect to the original URL and update the counter
    if (url) {
      url.clicks++;
      url.save();
      res.redirect(url.originalUrl);
    } else {
      // If the URL is not found
      res.status(404).json({ error: "URL not found" });
    }

  } catch (error) {
    console.error("Error redirecting to the original URL:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createShortUrl,
  redirectToUrl,
};
