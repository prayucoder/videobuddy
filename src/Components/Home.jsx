import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';
import { transform } from 'framer-motion';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'upperczse',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <Mycarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={"widest"} lineHeight={"100%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aut maxime eveniet aliquam sed, iusto quidem
            exercitationem aperiam minus eos debitis ipsa possimus corporis
            animi rerum cum pariatur laboriosam ipsum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aut maxime eveniet aliquam sed, iusto quidem
            exercitationem aperiam minus eos debitis ipsa possimus corporis
            animi rerum cum pariatur laboriosam ipsum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aut maxime eveniet aliquam sed, iusto quidem
            exercitationem aperiam minus eos debitis ipsa possimus corporis
            animi rerum cum pariatur laboriosam ipsum.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const Mycarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
        future is gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
        Gaming on console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
