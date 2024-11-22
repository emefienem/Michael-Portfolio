import nodemailer from "nodemailer";
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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "michael.emefienem@gmail.com",
        pass: "ymnq ctiq udnc kkcq",
      },
      logger: true,
      debug: true,
    });

    try {
      transporter.sendMail(
        {
          from: `"Portfolio Notification" <michael.emefienem@gmail.com>`,
          to: "emefienemmichael@gmail.com",
          subject: "New Website Visitor",
          text: `A user just visited your portfolio: ${url} at ${timestamp}`,
        },
        (error, info) => {
          if (error) {
            console.error("Error sending email", error);
            res.status(500).json({ message: "Failed to send notification" });
          } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({ message: "Notification sent!" });
          }
        }
      );

      res.status(200).json({ message: "Notification sent!" });
    } catch (error) {
      console.error("Error sending email", error);
      return res.status(500).json({ message: "Failed to send notification" });
    }
  } else {
    return res.status(405).json({ message: "Method is not allowed" });
  }
}
