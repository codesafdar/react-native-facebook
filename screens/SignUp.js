import { View, Text, StyleSheet ,SafeAreaView} from "react-native"

const SignUp = () => {
    return (
        <SafeAreaView style={styles.MainContainer}>
            <Text style={styles.Title}>
                This is sign up screen
            </Text>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        fontSize: 45,
        fontWeight: '700',
    }
})