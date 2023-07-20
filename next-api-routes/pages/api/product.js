import {MongoClient} from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const {title, price} = req.body

        const client = await MongoClient.connect('mongodb://127.0.0.1:27017/shop')
        const db = client.db()
        await db.collection("products").insertOne({title, price})
    } else {
        // const filePath = path.join(process.cwd(), "data", "products.json");
        // const fileData = fs.readFileSync(filePath);
        // const data = JSON.parse(fileData);

        // res.json({ products: data });
    }
}

export default handler;
