import { TouchableOpacity, Text, StyleSheet } from "react-native"
const ButtonComp = ({ onPress, ButtonTitle, backgroundColor,color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.Button, backgroundColor && { backgroundColor }]}>
      <Text style={[styles.Title, color && {color}]}>
        {ButtonTitle}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
  Button: {
    width: '100%',
    borderRadius: 12,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  Title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  },
})
