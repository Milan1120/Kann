import Cookies from 'cookies';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const cookies = new Cookies(req, res);
      const username = cookies.get('username');

      if (username) {
        res.status(200).json({ username });
      } else {
        res.status(404).json({ error: 'Username not found in cookies' });
      }
    } catch (error) {
      console.error('Error fetching username:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
