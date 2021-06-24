import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight
} from "react-icons/ai";
import {
    Flex,
    Heading,
    IconButton,
    Icon,
    Text,
} from "@chakra-ui/react";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import Project from "../../Components/Project.js";

const MotionHeading = motion.custom(Heading);

export default function Projects() {
    const [index, setindex] = useState(0);
    const [exitanim, setexitanim] = useState({opacity: 0, x: -100});
    const [initanim, setinitanim] = useState({opacity:0, x: 100});
    const headings = ["CollabCloud", "Grade-calc", "LeagueBot"];
    const descriptions = []
    const data = [
        {
            heading: "CollabCloud",
            description: "A social networking platform targeted towards developers/entrepreneurs to find collaborators. \
             Users can post their projects by importing it from github or through our platform, join other \
             projects posted, or simply just browse through the forum to find something that is best suited for them.",
            imageURL: "/collabcloudss.PNG"
        },
        {
            heading: "Grade-calc",
            description: "A web application allowing users to add courses, and keep track of their overall grades throughout the semester. \
            Users can also keep track of their daily tasks with a drag and drop planner.",
            imageURL: "/grade-calcss.PNG"
        },
        {
            heading: "LeagueBot",
            description: "A discord bot with the purpose of communicating with Riot API to get info/stats on the game League of Legends. Users are able to check their player stats, \
            view recent matches, and get the latest patch notes from the commands supplied." ,
            imageURL: "/leaguebotss.PNG"
        },
    ];
    return (
    <Flex w="94vw" direction="column" h="80vh" justify="center" alignItems="center">
        <Flex w="84%" color="white" mb="8">
            <Heading size="3xl" color="blue.200">Projects</Heading>
        </Flex>
        <Flex w="100%" justify="space-between" alignItems="center">
            <Flex w="30px" h="30px" color={index == 0 ? "gray.600" : "white"} as="button" onClick={() => {if(index != 0) {setexitanim({opacity: 0, x: 100}); setindex(index - 1); setinitanim({opacity: 0, x: -100});}}}><Icon w="100%" h="100%" as={AiOutlineArrowLeft} /></Flex>
            {index == 0 && <Project title={data[index].heading} description={data[index].description} imageURL={data[index].imageURL} exit={exitanim} init={initanim} github="https://github.com/collabcloud/project-collabcloud" youtube="https://www.youtube.com/watch?v=bPAOhb8r5Co&feature=youtu.be&ab_channel=jc"/>}
            {index == 1 && <Project title={data[index].heading} description={data[index].description} imageURL={data[index].imageURL} exit={exitanim} init={initanim} github="https://github.com/imphungky/simple-calc" weblink="https://www.grade-calc.com/" />}
            {index == 2 && <Project title={data[index].heading} description={data[index].description} imageURL={data[index].imageURL} exit={exitanim} init={initanim} github="https://github.com/imphungky/leaguebot" />}
            <Flex w="30px" h="30px" color={index == 2 ? "gray.600" : "white"} as="button" onClick={() => {if(index != 2) {setexitanim({opacity:0, x:-100}); setindex(index + 1); setinitanim({opacity:0, x:100});}}}><Icon w="100%" h="100%" as={AiOutlineArrowRight}/></Flex>
        </Flex>
    </Flex>
    );
}