import { Image } from "@chakra-ui/image";
import { Box, ListItem } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { List, UnorderedList } from "@chakra-ui/react";
import styles from "../styles/Nav.module.css"


const Nav = () => {
    return ( 
        <>
        <Box marginBottom="0px" padding="30px" color="black" pos="sticky" className="nav">


            <Image marginRight="auto" src="./Logo.png" width={150} height={45} alt="" />
            <Link marginBottom="5px" marginLeft="20px" paddingLeft="20px" paddingRight="20px" href="#"><a>LEARN MORE</a></Link>
            <Link marginBottom="5px" marginLeft="20px" paddingLeft="20px" paddingRight="20px" href="#"><a>LOGIN</a></Link>
            <Link marginBottom="5px" marginLeft="20px" paddingLeft="20px" paddingRight="20px" href="#"><a>SIGNUP</a></Link>
            <Image marginBottom="5px" marginLeft="20px" marginRight="20px" src="/carbon_user-avatar.svg" width={6} height={6} alt="" />
            <Link marginLeft="20px"><a className={styles.btn}>Become A Host</a></Link>


        </Box>
        </>
     );
}
 
export default Nav;