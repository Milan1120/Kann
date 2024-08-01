import { MongoClient, ObjectId } from "mongodb";

const client = await MongoClient.connect(process.env.MONGODB_URI);
const db = client.db("kann");
const hotelCollection = db.collection("hotel");

export default async function handler(req, res) {
  const usernames = [];

  const cursor = hotelCollection.find({});
  await cursor.forEach((hotel) => usernames.push(hotel.Username));

  res.json({ usernames });
}
