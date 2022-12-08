import { View, Text, StyleSheet } from "react-native"

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is Account tab
      </Text>
    </View>
  )
}


export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 35,
    fontWeight: '700'
  }
})