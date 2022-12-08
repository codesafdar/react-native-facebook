import { View, StyleSheet, SafeAreaView, Text, TextInput } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonComp from "../components/ButtonComp"

const NameAuth = ({navigation}) => {
    return (
        <>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <View style={styles.MainContainer}>
                        <Text style={styles.MainHeading}>
                            What's your name?
                        </Text>
                        <Text style={styles.SubHeading}>
                            Enter the name you use in your daily life
                        </Text>
                        <View style={styles.InputContainer}>
                            <TextInput style={styles.FirstInput} placeholder="First name" />
                            <TextInput style={styles.SecondInput} placeholder="Surname" />
                        </View>
                        <ButtonComp ButtonTitle='Next' backgroundColor='blue' onPress={()=>navigation.navigate('date-of-birth')}/>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

export default NameAuth

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingHorizontal:15
    },
    MainHeading: {
        fontWeight: '600',
        fontSize: 26,
        paddingBottom: 15
    },
    SubHeading: {
        fontSize: 15,
        fontWeight: '500'
    },
    InputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        marginHorizontal: 15,
        paddingBottom: 95
    },
    FirstInput: {
        borderBottomWidth: 1,
        marginRight: 10,
        width: '45%',
        fontSize: 20,
        fontWeight: '400'
    },
    SecondInput: {
        borderBottomWidth: 1,
        width: '45%',
        fontSize: 20,
        fontWeight: '400'
    }
})