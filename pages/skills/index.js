
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
    DiJsBadge,
    DiPython,
    DiHtml5,
    DiJava,
    DiPhp
 } from "react-icons/di";
import {useState} from "react";

import { motion } from "framer-motion";

const MotionBox = motion.custom(Flex);

export default function Skills() {
    const [proficiency, setprof] = useState(0);


    return (
    <Flex w="70vw" h="100vh" justify="center" color="white" alignItems="center">
        <Flex w="90%" h="50%" direction="column" alignItems="center" justify="start">
            <Heading size="3xl" w="80%" mb="10" color="blue.200">
                Skills
            </Heading>
            <Progress w="80%" colorScheme="blue" size="lg" value={proficiency} mb="4" />
            <SimpleGrid columns={3} spacing={5} w="80%" h={["50%","80%","100%"]}>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.2}}} onHoverStart={() => setprof(100)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiJsBadge} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.3}}} onHoverStart={() => setprof(80)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiPython} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:0.4}}} onHoverStart={() => setprof(90)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Heading fontSize="90px">C</Heading>
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} onHoverStart={() => setprof(90)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiHtml5} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6}}} onHoverStart={() => setprof(60)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiPhp} />
                </MotionBox>
                <MotionBox bg="blue.800" justify="center" alignItems="center" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.7}}} onHoverStart={() => setprof(60)} onHoverEnd={() => setprof(0)} whileHover={{scale: 1.1}}>
                    <Icon w="50%" h="50%" as={DiJava} />
                </MotionBox>
            </SimpleGrid>
        </Flex>
    <Flex mt="10" w="25vw" direction="column">
        <Text fontSize="20px"><Box as="span" color="blue.200" >Languages:</Box> C, Java, Python, JavaScript, Racket, Haskell, HTML/CSS, SQL</Text>
        <Text mt="5" fontSize="20px">Most of my personal projects consist of full stack web applications. So a large portion of my coding exposure is with JavaScript, HTML/CSS, and PHP. With that being said I do have experience with other languages as my education has required me to be adaptable to any language.</Text>
    </Flex>
    </Flex>
    );
}