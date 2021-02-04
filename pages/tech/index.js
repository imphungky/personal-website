
import {
    SimpleGrid,
    Box,
    Flex,
    Text,
    Icon,
    Heading,
    Progress
} from "@chakra-ui/react";
import {
    BiGitBranch
} from "react-icons/bi";
import { 
    DiReact,
    DiMongodb,
    DiHtml5,
    DiJava,
    DiPhp,
    DiPostgresql
 } from "react-icons/di";
import {
    SiRedux,
    SiSocketDotIo
} from "react-icons/si";
import {useState} from "react";

import { motion } from "framer-motion";

const MotionBox = motion.custom(Flex);

export default function Tech() {

    const [proficiency, setprof] = useState(0);

    return (
    <Flex w="70vw" h="100vh" justify="center" color="white" alignItems="center">
        <Flex w="90%" h="50%" direction="column" alignItems="center" justify="start">
            <Heading size="3xl" w="80%" mb="10" color="blue.200">
            Technology/Tools
            </Heading>
            <Progress w="80%" colorScheme="blue" size="lg" value={proficiency} mb="4" />
            <SimpleGrid columns={3} spacing={5} w="80%" h={["50%","80%","100%"]}>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.2}}} onHoverStart={() => setprof(100)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiReact} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.3}}} onHoverStart={() => setprof(90)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiMongodb} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.4}}} onHoverStart={() => setprof(90)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={SiRedux} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.5}}} onHoverStart={() => setprof(90)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiPostgresql} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.6}}} onHoverStart={() => setprof(80)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={BiGitBranch} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.7}}} onHoverStart={() => setprof(60)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={SiSocketDotIo} />
                </MotionBox>
            </SimpleGrid>
        </Flex>
        <Flex mt="10" w="25vw" direction="column">
            <Text fontSize="20px"><Box as="span" color="blue.200" >Technologies/Tools:</Box> React, Redux, jQuery, MongoDB, PostgreSQL, Express, Git, VS Code, Eclipse, Socket.io</Text>
            <Text mt="5" fontSize="20px">I use Git for all my projects for optimal organization and version control. I am familiar with both noSQL (mongoDB) and SQL (postgreSQL) based databases. For most of my web applications I have used React for the front end with Redux for state management.</Text>
        </Flex>
    </Flex>
    );
}