import Cookies from 'cookies';
import clientPromise from '../lib/mongodb';
import { createHash } from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const username = req.body['username'];
    const guess = req.body['password'];
    const client = await clientPromise;
    const db = client.db('kann');
    const users = await db.collection('community').find({ 'Username': username }).toArray();

    if (users.length === 0) {
      res.redirect('/login?msg=Incorrect username or password');
      return;
    }

    const user = users[0];
    const guess_hash = createHash('sha256').update(guess).digest('hex');

    if (guess_hash === user.Password) {
      const cookies = new Cookies(req, res);
      cookies.set('username', username);
      res.redirect('/community/dashboard');
    } else {
      res.redirect('/login?msg=Incorrect username or password');
    }
  } else {
    res.redirect('/community/login');
  }
}
