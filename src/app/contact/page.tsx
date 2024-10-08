import Loading from "@/components/Loading";
import React from "react";
import ContactPageContent from "./ContactPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael - Contact",
  description:
    "This page shows how to reach out to Michael and his social links",
  creator: "Michael Emefienem",
};

const Contact = () => {
  return (
    <main className="contact text-primary min-h-[calc(100dvh-50px)] lg:h-screen w-screen md:flex bg-secondary">
      <Loading invertedColor />

      {/* so that the metadata is server rendered and the animation is client only */}
      <ContactPageContent />
    </main>
  );
};

export default Contact;
