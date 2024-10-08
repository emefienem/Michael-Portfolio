import React from "react";
import Loading from "@/components/Loading";
import ProjectsPageContent from "./ProjectsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael - Projects",
  description:
    "This page showcases Michael's projects. It includes a range of projects he has completed",
  creator: "Michael Emefienem",
};

const Projects = () => {
  return (
    <main className="text-primary projects bg-secondary min-h-screen">
      <Loading invertedColor />

      {/* so that the metadata is server rendered and the animation is client only */}
      <ProjectsPageContent />
    </main>
  );
};

export default Projects;
