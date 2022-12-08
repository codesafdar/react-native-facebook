import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()
import HomeScreen from "../screens/HomeScreen"
const FacebookHome = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='facebook-home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default FacebookHome