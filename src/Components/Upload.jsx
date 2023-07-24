import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return <Container maxW={"container.xl"} p={"16"} h={"100vh"}>

    <VStack color={"purple.500"} justifyContent={"center"} h={"full"}>
        <AiOutlineCloudUpload size={"10vmax"}/>
        <form >
            <HStack>
                <Input required type='file' css={{
                    '&::file-selector-Button':{
                        border:'none',
                        width:'calc(100% + 36px)',
                        marginLeft: '-18px',
                        height:'100%',
                        color:'purple',
                        backgroundColor:'white',
                        cursor:'pointer'

                    }
                }}/>
                <Button colorScheme='purple' type='submit'>Upload</Button>
            </HStack>
        </form>
    </VStack>
  </Container>
}

export default Upload
