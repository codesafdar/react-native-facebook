import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Flex, Spacer, Box, Radio, Divider } from "native-base";
import { RadioContainer } from '../components/RadioContainer';
import ButtonComp from '../components/ButtonComp';

const Gender = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Text style={styles.Heading}>
          What's your gender
        </Text>
        <Text style={styles.SubHeading}>
          You can change who can sees your gender on your profile later.
        </Text>
        <RadioContainer name='Female' buttonValue='1' />
        <RadioContainer name='Male' buttonValue='2' />
        <RadioContainer name='Not to say' buttonValue='3' />
        <View style={{ width: '100%', paddingTop: 50 }}>
          <ButtonComp
            ButtonTitle='Next'
            backgroundColor='blue'
            onPress={() => navigation.navigate('mobile-number')} />
        </View>

      </View>

    </SafeAreaView>
  )
}

export default Gender
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 70
  },
  Heading: {
    fontSize: 25,
    fontWeight: '600',
    paddingBottom: 15,
  },
  SubHeading: {
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 10,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  }
})