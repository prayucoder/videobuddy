import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import Video1 from "../Assets/1.mp4"
import Video2 from "../Assets/4.mp4"
import Video3 from "../Assets/5.mp4"
import Video4 from "../Assets/6.mp4"

const Videos = () => {
    const VideoArr =[
        Video1,
        Video2,
        Video3,
        Video4,
    ];

    const [VideosSrc, setVideoSrc] = useState(VideoArr[0])
  return <Stack direction={["column","row"]} h={"100vh"}>
    <VStack w={'full'}>
        <video 
        controls
        controlsList='nodownload'
        style={{
            width: '100%',
            height: '100%'
        }}
        src={VideosSrc}>

        </video>
        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"autp"}>
            <Heading>
                Sample video 1
            </Heading>
            <Text>
                This is a sample video for testing and Demo.
            </Text>
        </VStack>
    </VStack>
    <VStack w={["full","xl"]} 
    alignItems={"stretch"}
    p={"8"}
    spacing={"8"}
    overflowY={"auto"}>

        {
            VideoArr.map((item,index)=>(
                <Button colorScheme='purple' variant={"ghost"}  onClick={() => setVideoSrc(item)}>
                    Lecture{index+1}
                </Button>
            ))
        }

    </VStack>
  </Stack>
};

export default Videos;
