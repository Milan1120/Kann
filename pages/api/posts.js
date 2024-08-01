import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("kann");
  const donationCollection = db.collection("donation");
  try {
    const donationsData = [];

    const cursor = donationCollection.find({});
    await cursor.forEach((donation) => {
      donationsData.push({
        donatorName: donation.donatorName || null,
        numberOfItems: donation.numberOfItems || null,
        numberOfPeople: donation.numberOfPeople || null,
        pickupLocation: donation.pickupLocation || null,
        phoneNumber: donation.phoneNumber || null,
        timestamp: donation.timestamp || null,
        items: donation.items || null,
      });
    });
    //sort by timestamp
    donationsData.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    res.json({ donations: donationsData });
  } catch (error) {
    console.error('Error fetching donations data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
