
import {useState, useEffect} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Heading,
  Flex,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.custom(Flex);

export default function Home() {


  return (
        <Flex>
        <Head>
          <title>Michael Phung's Personal Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex p="10" minH="80vh" w="70vw" direction="column" justify="center" alignItems="baseline" color="white">
          <Heading as="h1" size="3xl" fontSize="60px">
            <Flex>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{duration:0.5}}>H</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.2, duration:0.7}}>e</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.4, duration:0.7}}>l</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.2, duration:0.7}}>l</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.3, duration:0.7}}>o</MotionBox>
            </Flex>
          </Heading>
          <Heading as="h1" size="3xl" fontSize="60px">
            <Flex>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.3, duration:0.7}}>M</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.4, duration:0.7}}>y</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.2, duration:0.7}} ml="4">n</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.7, duration:0.7}}>a</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.1, duration:0.7}}>m</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.4, duration:0.7}}>e</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.6, duration:0.7}} ml="4">i</MotionBox>
              <MotionBox initial={{y: '-100vh'}} animate={{y: 0}} transition={{delay: 0.7, duration:0.7}}>s</MotionBox>
            </Flex>
          </Heading>
          <Heading as="h1" size="4xl" fontSize="100px">
            <MotionBox initial={{opacity: 0}} animate={{opacity: 100}} transition={{delay: 1.4, duration:4}}>
            Michael Phung
            </MotionBox>
          </Heading>
          <MotionBox mt="4" w="70%" initial={{opacity: 0}} animate={{opacity: 100}} transition={{delay: 1.4, duration:4}}>
            <Text fontSize="20px">
            I am a fourth year student at the University of Toronto Mississauga, I enjoy working on fullstack projects and exploring new ideas!
            </Text>
          </MotionBox>
        </Flex>
        </Flex>

  )
}
