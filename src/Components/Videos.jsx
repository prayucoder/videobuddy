import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const Videos = () => {
    const VideoArr =[
        'https://youtu.be/IUN664s7N-c',
        'https://www.pexels.com/video/drone-view-of-big-waves-rushing-to-the-shore-3571264/',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        '',
    ];

    const [VideosSrc, setVideoSrc] = useState(VideoArr[0])
  return <Stack direction={["column","row"]} h={"100vh"}>
    <VStack w={'full'}>
        <video
        controls
        controlsList='nodownload'
        style={{
            width: '100%',
        }}
        src={{VideosSrc}}>

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
