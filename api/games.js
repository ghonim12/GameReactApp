import axios from 'axios';

export default async function handler(req, res) {
  const { category } = req.query;

  try {
    const response = await axios.get(`https://www.freetogame.com/api/games?category=${category}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
