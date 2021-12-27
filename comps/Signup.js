import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { FormErrorMessage, VStack, Button, Flex, Text, Heading, Image, FormControl, FormLabel, Input, SimpleGrid, GridItem, Checkbox, Box } from "@chakra-ui/react"
const Signup = () => {
    const initialValues = { auth_type: 1, display_name: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const baseURL = "https://staging-api.whipser.com/api/v1/user/registration";
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }


useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        axios.post( baseURL, formValues).then(res => console.log(res)).catch(err => console.log(err));
    }
}, [formErrors])
const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.display_name) {
        errors.display_name = "Username is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid Email Format";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters";
    }
    return errors;
};
return (
    <div>

        <form onSubmit={handleSubmit} method="POST">

            <Box color="#424242" position="relative">
                <VStack w="full" h="full" p={100} spacing={10}>

                    <Flex direction="column" background="gray.100" w="50vw" p={12} rounded={6}>
                        <SimpleGrid columns={2} columnGap={3} rowGap={3}>
                            <GridItem display="flex" justifyContent="center" colSpan={2}>
                                <Image src="/sports-car2.png" width={128} height={32} alt="" />
                            </GridItem>
                            <GridItem textAlign="center" colSpan={2}>
                                <Heading> Let's get started</Heading>
                                <Text> Explore The World's Largest Car Sharing Marketplace</Text>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Heading bgColor="gray.300" p={2} rounded={20} textAlign="center" as="h6" size="sx" mb={6}>LOG IN</Heading>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Heading bgColor="#ff9c00" p={2} rounded={20} textAlign="center" size="sx" mb={6}>SIGN UP</Heading>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl >
                                    <FormLabel htmlFor='display_name' fontFamily='Lato'>Display Name</FormLabel>
                                    <Input name="display_name"
                                        id="display_name"
                                        value={formValues.display_name}
                                        fontFamily='Lato'
                                        _placeholder={{ color: 'black', backgroundColor: 'gray.300' }}
                                        onChange={handleChange}
                                        placeholder='Type display name'
                                        mb={3}
                                        type="text"
                                        onChange={handleChange} />
                                    <Text color="red.500">{formErrors.display_name}</Text>
                                </FormControl>

                            </GridItem>

                            <GridItem colSpan={2}>
                                <FormControl >
                                    <FormLabel htmlFor='email' fontFamily='Lato'>E-mail address</FormLabel>
                                    <Input id='email'
                                        type='email'
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        fontFamily='Lato'
                                        _placeholder={{ color: 'black', backgroundColor: 'gray.300' }}
                                        placeholder='Type e-mail address' />
                                    <Text color="red.500">{formErrors.email}</Text>
                                </FormControl>

                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl >
                                    <FormLabel htmlFor='password' fontFamily='Lato'>Password</FormLabel>
                                    <Input
                                        id='password'
                                        type="password"
                                        name="password"
                                        value={formValues.password}
                                        _placeholder={{ color: 'black', backgroundColor: 'gray.300' }}
                                        placeholder='Type your password'
                                        onChange={handleChange}
                                        mb={6}
                                        type="password" />
                                    <Text color="red.500">{formErrors.password}</Text>
                                </FormControl>
                            </GridItem>
                            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success">Signed in Successfully</div>) : (<div className="ui message success">Provide valid Data</div>)}
                            <GridItem colSpan={2}>
                                <Checkbox name="auth_type" id="auth_type" isRequired value={formValues.auth_type} colorScheme='red'>I agree to the terms of service</Checkbox>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Button type="submit" w="full" outline="none" bgColor="#ff9c00">SIGN UP</Button>
                            </GridItem>
                            <GridItem textAlign="center" colSpan={2}>
                                <Text> Already have an account? Log in</Text>
                                <Text>This site is protected by reCAPTCHA and the Google</Text>
                                <Text>Privacy Policy and terms & conditions</Text>
                            </GridItem>
                        </SimpleGrid>
                    </Flex>
                </VStack>

            </Box>
        </form>
    </div>

)
};

export default Signup;