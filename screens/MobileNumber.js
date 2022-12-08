import { Box, Heading, Text ,Input, Button} from 'native-base'
const MobileNumber = () => {
    return (
        <Box safeArea>
            <Heading textAlign='center'>
                Enter your mobile number
            </Heading>
            <Text textAlign='center' paddingTop='3' paddingBottom='10'>
                Enter the mobile number on which you can be connected.You can hide this from your peofile later.
            </Text>
            <Box paddingX='5'> 
            <Text>Mobile number</Text>
                <Input variant='underlined' w='100%' />
            </Box>
            <Box paddingX='4'>
                <Button w='100%'
                    marginTop='16'
                    rounded='lg'
                    size='md'
                    colorScheme='darkBlue'
                    _text={{ fontSize: 20, fontWeight: '600' }}>
                    Next
                </Button>
            </Box>
            
        </Box>
    )
}

export default MobileNumber