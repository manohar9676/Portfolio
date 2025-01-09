import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import PetSellerProject from "../../assets/projects/PetSellerProject.png";
import VidTubeWebsite from "../../assets/projects/VidTubeWebsite.png";
import StayconnectWebsite from "../../assets/projects/StayconnectWebsite.png";
import Calculator from "../../assets/projects/Calculator.png"

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
            <ProjectCard
            projectImage={StayconnectWebsite}
            projectName={"Stayconnect Website"}
            aboutProject={"Our Company Website"}
            techStack={"EXPRESS JS, NODE JS, VUE JS"}
            projectLiveLink="https://stayconnect.io/"
          />
          <ProjectCard
            projectImage={PetSellerProject}
            projectName={"Pet Seller Website"}
            aboutProject={"Blockchain based warranty using NFT"}
            techStack={"NODE JS, REACT Js"}
            projectLiveLink="https://pet-seller-project.vercel.app/"
            projectLink="https://github.com/manohar9676/PetSellerProject"
          />
        
          <ProjectCard
            projectImage={VidTubeWebsite}
            projectName={"VidTube"}
            aboutProject={
              "Created a website like Youtube clone by using Youtube api"
            }
            techStack={
              "REACT JS, NodeJs, Youtube API"
            }
            projectLiveLink="https://video-streaming-app1-seven.vercel.app/"
            projectLink="https://github.com/manohar9676/VideoStreamingApp1"
          />
          <ProjectCard
            projectImage={Calculator}
            projectName={"Calculator"}
            aboutProject={"A Calculator on live"}
            techStack={"HTML, CSS, JAVASCRIPT"}
            projectLiveLink="https://js-calculator-silk.vercel.app/"
            projectLink="https://github.com/manohar9676/JSCalculator"
          />
        
       
        </SimpleGrid>
      </Box>
    </Box>
  );
}
