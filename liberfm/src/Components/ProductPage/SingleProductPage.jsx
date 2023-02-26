import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
  } from '@chakra-ui/react';
import { books_all } from '../Data/Books';

  const handleClick=()=>{
    alert("Product added to the Cart")
  }
  
  export default function Simple() {

    let data = [...books_all]
    console.log(data)

    return (
      <Container maxW={'4xl'}>
        {data?.map((item,ind) => (
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 4, md: 5 }}
          py={{ base: 9, md: 12 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={item.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={500}
                fontSize={{ base: 'lg', sm: '2xl', lg: '3xl' }}>
                {item.name}
              </Heading>
              <Text
                fontWeight={400}
                fontSize={'2xl'}>
                <span style={{textDecoration:"underline"}}>Author</span>: {item.author}
              </Text>
              <Text
                fontWeight={400}
                fontSize={'2xl'}>
                <span style={{textDecoration:"underline"}}>Price</span>: ${item.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                  textDecoration={'underline'}>
                  Product Description
                </Text>  
                <Box>
                  {item.description}
                </Box>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'black'}
              color={"white"}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }} onClick={handleClick}>
              Add to cart
            </Button>
          </Stack>
        </SimpleGrid>
        ))}
      </Container>
    );
  }