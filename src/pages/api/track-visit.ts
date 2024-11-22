import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { url, timestamp } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });

    try {
      transporter.sendMail({
        from: `"Portfolio Notification" <${process.env.MY_EMAIL}>`,
        to: "emefienemmichael@gmail.com",
        subject: "New Website Visitor",
        text: `A User visited your portfolio: ${url} at ${timestamp}`,
      });

      res.status(200).json({ message: "Notification sent!" });
    } catch (error) {
      console.error("Error sending email", error);
      return res.status(500).json({ message: "Failed to send notification" });
    }
  } else {
    return res.status(405).json({ message: "Method is not allowed" });
  }
}
