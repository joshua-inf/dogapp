import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './loginPage';
import SignupPage from './signupPage';



const MainLogin = () => {
    const Stack = createStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Group screenOptions={{headerShown:false}}>
                        <Stack.Screen name="LogingPage" component={LoginPage} />
                        <Stack.Screen name="SignupPage" component={SignupPage} />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}


export default MainLogin