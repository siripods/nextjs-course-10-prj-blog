import { MongoClient } from "mongodb";

// call api: /api/contact
// use mongodb atlas, login siripod.surabotsophon@stream.co.th
async function handler(req, res) {
  console.log("-----api contact handler-----");
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    console.log("email: ", email);
    console.log("name: ", name);
    console.log("message: ", message);

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://siripods:mongo1siri@cluster0.tfpkqip.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
