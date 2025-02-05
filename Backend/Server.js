const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3001; // Different from your React port

// Enable CORS
app.use(cors());

// Your API endpoint
app.get('/api/finance-news', async (req, res) => {
  try {
    const response = await axios.get('https://www.newtimes.co.rw/finance');
    const $ = cheerio.load(response.data);
    
    const articles = [];

    // Example selector (you'll need to inspect the actual website HTML)
    $('.post-item').each((index, element) => {
      const title = $(element).find('.post-title').text().trim();
      const url = $(element).find('a').attr('href');
      const date = $(element).find('.post-date').text().trim();
      const image = $(element).find('img').attr('src');
      const excerpt = $(element).find('.post-excerpt').text().trim();

      articles.push({
        title,
        url: `https://www.newtimes.co.rw${url}`,
        date,
        image,
        description: excerpt,
        categories: ['Finance', 'News'] // Add actual categories from the site
      });
    });

    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});