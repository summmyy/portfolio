import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


/* {
  title: "Photo Gallery",
  description:
    "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  getImageSrc: () => require("../images/photo3.jpg"),
  link: 'https://summmyy.github.io/'
},
{
  title: "Event planner",
  description:
    "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  getImageSrc: () => require("../images/photo4.jpg"),
  link: 'https://summmyy.github.io/'
},
 */
const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "A restaurant with a beautiful looking webiste and responvie table booking page, it also has a sign up and login page.",
    getImageSrc: () => require("../images/restaurant.jpg"),
    link: 'https://summmyy.github.io/littlelemon/'
  },
  {
    title: "React Calculator",
    description:
      "A simple calculator built using react and chakra UI, which allows me and my nerd friends to make calculations while looking at nice UI.",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: 'https://summmyy.github.io/React-Calculator/'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
