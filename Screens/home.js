import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./Home/Pethome"
import MyPetPageDetails from "./Home/updatePet"

const MainPetPage = () => {
  const Stack = createStackNavigator()
  return (
      <>     
       <NavigationContainer independent={true}>
          <Stack.Navigator>
              <Stack.Group >
                  <Stack.Screen options={{ headerShown: false }} name="MyPets" component={Home} />
                  <Stack.Screen name="Client Pet page" component={MyPetPageDetails} />
              </Stack.Group>  
          </Stack.Navigator>
      </NavigationContainer>
      </>
  )
}

export default MainPetPage