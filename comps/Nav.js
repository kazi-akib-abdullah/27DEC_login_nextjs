import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import styles from "../styles/Nav.module.css"


const Nav = () => {
    return ( 
        <>
            <Box position="relative" marginBottom="0px" padding="30px" color="black" className="nav">
                <Image marginRight="auto" src="./Logo.png" width={150} height={45} alt="" />
                <Link marginBottom="5px" marginLeft="20px" paddingLeft="20px" paddingRight="20px" href="#">LEARN MORE</Link>
                <Link marginBottom="5px" marginLeft="20px" paddingLeft="20px" paddingRight="20px" href="#">LOGIN</Link>
                <Link marginBottom="5px" marginLeft="20px" paddingLeft="20px" paddingRight="20px" href="#">SIGNUP</Link>
                <Image marginBottom="5px" marginLeft="20px" marginRight="20px" src="/carbon_user-avatar.svg" width={6} height={6} alt="" />
                <Link marginLeft="20px"><a className={styles.btn}> Become A Host</a></Link>
            </Box>
        </>
     );
}
 
export default Nav;