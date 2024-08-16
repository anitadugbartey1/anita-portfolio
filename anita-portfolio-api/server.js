const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!'); // or render a landing page
  });

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const contactMessage = await prisma.contactMessage.create({
        data: { name, email, message },
      });
      res.json({ success: true, contactMessage });
    } catch (error) {
      console.error('Error saving contact message:', error);
      res.status(500).json({ error: 'An error occurred while saving the message.' });
    }
  });
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
