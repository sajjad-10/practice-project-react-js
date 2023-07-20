import { MongoClient } from "mongodb";

async function handler(req, res) {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017/shop");
    const db = client.db();

    if (req.method === "POST") {
        const { title, price } = req.body;

        await db.collection("products").insertOne({ title, price });
    } else {
        const data = await db.collection("products").find().toArray();
        res.json({ products: data });
    }
}

export default handler;
