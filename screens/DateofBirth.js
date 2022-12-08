import { useState } from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import DatePicker from 'react-native-date-picker'
import ButtonComp from "../components/ButtonComp"

const DateofBirth = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <SafeAreaView>
            <View style={styles.MainContainer}>
                <Text style={styles.Heading}>
                    What's your date of birth
                </Text>
                <Text style={styles.SubHeading}>
                    Choose your date of birth.You can always make this private later.
                </Text>
                <DatePicker
                    open={true}
                    date={date}
                    androidVariant='nativeAndroid'
                    mode='date'
                />
                <View style={styles.NextButton}>
                    <ButtonComp
                        backgroundColor='blue'
                        ButtonTitle='Next' onPress={() => navigation.navigate('gender')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DateofBirth

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 130,
        paddingHorizontal: 10,

    },
    Heading: {
        fontSize: 25,
        fontWeight: '600',
        paddingBottom: 15,
    },
    SubHeading: {
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 10,
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20
    },
    NextButton: {
        marginTop: 60,
        width: '100%',
        alignItems:'center'
    }
})