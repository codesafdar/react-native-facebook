import { Images } from "../assets/images"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import ButtonComp from "../components/ButtonComp"

const JoinFaceBook = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.MainContainer}>
                <Image source={Images.facebookJoin} style={styles.ImageContainer} resizeMode='stretch' />
                <Text style={styles.Heading}>
                    Join Facebook
                </Text>
                <Text style={styles.SubHeading}>
                    We'll help you to create a new account in a few easy steps
                </Text>
                <View width='90%'> 
                    <ButtonComp ButtonTitle='Next' backgroundColor='blue' onPress={() => navigation.navigate('nameAuth')} />
                    </View>
                <View style={styles.AlreadyAccount}>
                    <ButtonComp
                        onPress={() => navigation.navigate('login')}
                        ButtonTitle='Already have an account?'
                        color='blue' />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default JoinFaceBook

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        // paddingHorizontal:15
    },
    ImageContainer: {
        width: '100%',
        height: 250
    },
    Heading: {
        fontSize: 25,
        fontWeight: '700',
        paddingTop: 70
    },
    SubHeading: {
        fontSize: 15,
        fontWeight: '500',
        paddingTop: 20,
        textAlign: 'center',
        paddingBottom: 60,
        lineHeight:20
    },
    AlreadyAccount: {
        paddingTop: '10%',
    }
})