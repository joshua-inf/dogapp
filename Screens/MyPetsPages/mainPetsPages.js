import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MyPets from "./myPets"
import MyPetsDetails from "./MyPetsDetails"
import AddPets from "./addPet"

const MainPetsPages = () => {
    const Stack = createStackNavigator()
    return (
        <>     
         <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Group >
                    <Stack.Screen options={{ headerShown: false }} name="MyPets" component={MyPets} />
                    <Stack.Screen name="My Pets Details" component={MyPetsDetails} />
                    <Stack.Screen name="Add new  Pet" component={AddPets} />
                </Stack.Group>  
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}


export default MainPetsPages