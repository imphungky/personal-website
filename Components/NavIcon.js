import {motion} from "framer-motion";
import {
    Flex,
    Link,
    Icon
} from "@chakra-ui/react";

const MotionBox = motion.custom(Flex);

export default function NavIcon({icon, href}) {
    return(      
    <MotionBox color="white" whileHover={{y:[0, -2, 0, -2, 0], transition: {loop: Infinity, duration:1.2}}}>
        <Link href={href}>
            <Icon as={icon} h={6} w={6}/>
        </Link>
    </MotionBox>
  );
}