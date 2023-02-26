import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

function Login() {

  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handle_login = ()=>{
       localStorage.setItem("book_email", email);
       localStorage.setItem("book_pass", pass);
       if(email=="aniket@gmail.com" && pass == "Aniket"){
            Navigate("/")
       }else{
            alert("Invalid Credentials")
       }
  }

  

return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value);
            }} 
           type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
          onClick={()=>{
            handle_login();
          }}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Login;



