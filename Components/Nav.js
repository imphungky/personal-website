import {
    VStack,
    Flex,
    Link,
    Icon
} from "@chakra-ui/react";
import { 
    AiFillFolder,
    AiTwotoneMail,
    AiFillSetting,
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineBarChart,
    AiTwotoneHome
  } from "react-icons/ai";
import NavIcon from "./NavIcon";
export default function Nav() {

    return(
    <VStack minH="100vh" bg="gray.900" justify="space-evenly">
        <VStack p="5" spacing={10}  alignContent="center" justify="center">
            <NavIcon icon={AiTwotoneHome} href="/"/>
            <NavIcon icon={AiOutlineBarChart} href="/skills" />
            <NavIcon icon={AiFillSetting} href="/tech" />
            <NavIcon icon={AiFillFolder} href="/projects" />
            <NavIcon icon={AiTwotoneMail} href="/contact" />
        </VStack>
        <VStack p="5" spacing={10}  alignContent="center" justify="center">
            <NavIcon icon={AiFillGithub} href="https://github.com/imphungky"/>
            <NavIcon icon={AiFillLinkedin} href="https://www.linkedin.com/in/michael-phung-508b5a175/" />
        </VStack>
    </VStack>
    );
}