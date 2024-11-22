import { ServerClient } from "postmark";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "POST") {
    const { url, timestamp } = req.body;

    const client = new ServerClient("c0cc3f85-2cce-411e-8471-c139d3a468f7");

    try {
      const sendResult = await client.sendEmail({
        From: "michael.emefienem210591138@st.lasu.edu.ng",
        To: "emefienemmichael@gmail.com",
        Subject: "New Website Visitor",
        TextBody: `A user just visited your portfolio: ${url} at ${timestamp}`,
      });

      console.log("Email sent: ", sendResult);

      res.status(200).json({ message: "Notification sent!" });
    } catch (error: string | any) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method is not allowed" });
  }
}
