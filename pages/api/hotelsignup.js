import clientPromise from "../lib/mongodb";
const {createHash} = require('node:crypto');

export default async function handler(req, res) {
  if (req.method == "POST"){
    const username = req.body['username']
    const password = req.body['password']
    const passwordagain = req.body['passwordagain']
    if (password != passwordagain){
        res.redirect("/signup?msg=The two passwords don't match");
        return;
    }
    const client = await clientPromise;
    const db = client.db("kann");
    const users = await db.collection("hotel").find({"Username": username}).toArray();
    if (users.length > 0){
        res.redirect("/signup?msg=A user already has this username");
        return;
    }
    const password_hash = createHash('sha256').update(password).digest('hex');
    const currentDate = new Date().toUTCString();
    const bodyObject = {
        Username: username,
        Password: password_hash,
        Created: currentDate
    }
    await db.collection("hotel").insertOne(bodyObject);
    res.redirect("/hotel/login")
  } else {
    res.redirect("/hotel/signup")
  }
}