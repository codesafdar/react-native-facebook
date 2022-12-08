import { View, Text, StyleSheet } from "react-native"

const DrawerTest = () => {
  return (
      <View style={styles.Container}>
          <Text>
              This will be drawer component
          </Text>
    </View>
  )
}

export default DrawerTest

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent:'center'
    },
    Title: {
        fontSize: 45,
        fontWeight:700
    }
})