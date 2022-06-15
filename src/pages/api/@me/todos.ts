import { dbConnect } from "lib/mongodb";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  if (!session?.user) return res.status(401).send({ message: "Forbidden." });

  if (req.method == "GET") {
    const db = await dbConnect();
    const data = await db
      .collection("todos")
      .find(
        { email: session.user.email },
        {
          projection: {
            _id: 0,
            __v: 0,
            email: 0,
          },
        }
      )
      .toArray();

    res.status(200).send(data);
  }
};

export default handler;
