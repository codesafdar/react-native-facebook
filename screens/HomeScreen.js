import { View, Text, StyleSheet, Button } from 'react-native'
import { Box, Heading, HStack, Center, Badge, Divider, VStack } from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FacebookTabs from '../navigation/FacebookTabs'
import MyTabs from '../navigation/FacebookTabs'


const HomeScreen = ({ navigation }) => {
    return (
        <Box safeArea height='100%'>
            <HStack
                paddingX='4'
                justifyContent='space-between'
                alignItems='center'
                paddingBottom='20'
                paddingTop='2'>
                <Heading color='blue.700'>
                    facebook
                </Heading>
                <HStack space={3}>
                    <Center h='10' w='10' bgColor='gray.300' rounded='3xl'>
                        <FontAwesome5 style={{ fontSize: 25 }} name='plus' />
                    </Center>
                    <Center h='10' w='10' bgColor='gray.300' rounded='3xl'>
                        <FontAwesome5 style={{ fontSize: 25 }} name='search' />
                    </Center>
                    <Box>
                        <VStack>
                            <Badge
                                colorScheme="danger"
                                rounded="3xl"
                                mb={-4}
                                mr={-3}
                                zIndex={1}
                                variant="solid"
                                alignSelf="flex-end"
                                _text={{
                                    fontSize: 10
                                }}>
                                7
                            </Badge>
                            <Center bgColor='gray.300' p='1' rounded='3xl' alignItems='center'>
                                <MaterialCommunityIcons style={{ fontSize: 25 }} name='facebook-messenger' />
                            </Center>
                        </VStack>
                    </Box>
                </HStack>
            </HStack>
            <FacebookTabs />
        </Box>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})