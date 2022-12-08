import { View, Text,StyleSheet } from "react-native"

const Notifications = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>This is notifications tab</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems:'center'
  },
  title: {
      fontSize: 35,
      fontWeight: '700'
  }
})