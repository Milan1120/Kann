import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  
  let client; // Declare client variable outside the try block

  if (req.method === 'POST') {
    try {
      const orderInfo = req.body;

      // Validate and process the donation data
      // ...

      // Store donation data in MongoDB
      client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await client.connect();

      const db = client.db('kann');
      const collection = db.collection('donation');

      const donationData = {
        numberOfItems: orderInfo.numberOfItems,
        numberOfPeople: orderInfo.numberOfPeople,
        pickupLocation: orderInfo.pickupLocation,
        phoneNumber: orderInfo.phoneNumber,
        donatorName: orderInfo.donatorName,
        items: orderInfo.items,
        timestamp: new Date(),
      };

      await collection.insertOne(donationData);

      res.status(200).redirect("/hotel/success");

    } catch (error) {
      console.error('Error saving donation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
