import {
    Box,
    Center,
    useColorModeValue,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { useState } from "react";
import { fiction_Subjects } from "../Data/Books";
  
  const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  
  function Card() {
    const [data, setData] = useState([...fiction_Subjects]);
  
    return (
      <div>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.100", "gray.800")}
            boxShadow={"lg"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            mt={8}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"200px"}
              _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                h: "full",
                pos: "absolute",
                top: 6,
                left: 0,
                backgroundImage: `url(${"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882370_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250882370_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"}
                />
            </Box>
            {/* <Stack pt={10} align={"center"}> */}
              <Text pt={10}
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
                >
                BRAND
              </Text>
            {/* </Stack> */}
          </Box>
        </Center>
      </div>
    );
  }
  
  export default Card;
  