import { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Images } from "../assets/images"
import { Border } from "../components/Border"
import ButtonComp from "../components/ButtonComp"
TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const emailHandler = (e) => {

  }
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.Container}>
          <View style={styles.ImageContainer}>
            <Image style={styles.MainImage} source={Images.facebookLogin} />
          </View>
          <View style={styles.InputContianer}>
            <TextInput
              style={styles.InputEmail}
              onChangeText={emailHandler}
              // error={true}
              placeholder="Phone number or email address" />
            <TextInput
              onChangeText={emailHandler}
              secureTextEntry={true}
              style={styles.InputPassword}
              placeholder="Password" />
          </View>
          <View style={styles.BottonsContainer}>
            <View width='90%'>
              <ButtonComp
                onPress={() => navigation.navigate('join-facebook')}
                backgroundColor='blue'
                ButtonTitle='Log In' />
            </View>
            <Text style={styles.ForgotPassword}>
              Forgotton Password?
            </Text>
            <View style={styles.BorderContainer}>
              <Border />
              <Text style={styles.BorderText}>
                OR
              </Text>
              <Border />
            </View>
            <View width='90%'>
              <ButtonComp
                onPress={() => navigation.navigate('join-facebook', { Title: 'Create' })}
                backgroundColor='green'
                ButtonTitle='Create New Facebook Account' />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal:15
  },
  Title: {
    fontSize: 43,
    fontWeight: '700'
  },
  MainImage: {
    width: 100,
    height: 100,
  },
  ImageContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  InputContianer: {
    marginTop: 60,
    width: '90%'
  },
  InputEmail: {
    borderBottomWidth: 1,
  },
  InputPassword: {
    marginTop: 30,
    borderBottomWidth: 1,
  },
  BottonsContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ForgotPassword: {
    marginTop: 20,
    color: 'blue',
    fontSize: 15,
    fontWeight: '500'
  },
  BorderText: {
    fontWeight: '400',
    paddingHorizontal: 5
  },
  BorderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 30
  },
  NewAccountButton: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 8,
  },
  NewAccountText: {
    paddingVertical: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  }
})
