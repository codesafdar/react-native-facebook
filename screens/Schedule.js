import { View, Text, StyleSheet } from "react-native"
const Schedule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This is schedule tab
      </Text>
  </View>
  )
}

export default Schedule

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