import Image from "next/image";
import {
    AiFillGithub, 
    AiFillYoutube
} from "react-icons/ai";
import {
    BiLinkExternal
} from "react-icons/bi";
import {
    Flex,
    VStack,
    Link,
    Icon,
    Heading
} from "@chakra-ui/react";
import {motion, AnimatePresence, useAnimation} from "framer-motion";

const MotionBox = motion.custom(Flex);
const MotionLink = motion.custom(Link);
export default function Project({description, imageURL, exit, init, github, youtube, weblink, title}) {
    return(
    <AnimatePresence>
        <MotionBox color="white" w="80vw" justify="space-around" alignItems="center" bg="gray.900" p="5" initial={init} animate={{opacity: 1, x:0}} transition={{duration: 0.6}} exit={exit}>
            <Flex w="50%" direction="column">
                <Heading mb="8">{title}</Heading>
                {description}
            </Flex>
            <Flex w="40%"><Image width={600} height={300} src={imageURL}/></Flex>
            <VStack justify="center" minH="100%" spacing={6}>
                <MotionLink href={github} whileHover={{y:[0, -2, 0, -2, 0], transition: {loop: Infinity, duration:1.2}}}>
                <Icon h={8} w={8} as={AiFillGithub} />
                </MotionLink>
                {youtube && 
                <MotionLink href={youtube} whileHover={{y:[0, -2, 0, -2, 0], transition: {loop: Infinity, duration:1.2}}}>
                    <Icon h={8} w={8} as={AiFillYoutube} />
                </MotionLink>}
                {weblink && 
                <MotionLink href={weblink} whileHover={{y:[0, -2, 0, -2, 0], transition: {loop: Infinity, duration:1.2}}}>
                    <Icon h={8} w={8} as={BiLinkExternal} />
                </MotionLink>
                }
            </VStack>
        </MotionBox>
    </AnimatePresence>
    );
}