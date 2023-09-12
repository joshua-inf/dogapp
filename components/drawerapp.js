
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/home';
import MyPets from '../Screens/MyPetsPages/myPets';
import Accounts from '../Screens/accounts';
import { AntDesign } from '@expo/vector-icons';
import Settings from '../Screens/settings';
import CustomDrawer from '../Custom/customdrawer';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import MainPetsPages from '../Screens/MyPetsPages/mainPetsPages';
import { useContext } from 'react';
import { Context } from '../App';
import { Text } from 'react-native';


const Drawer = createDrawerNavigator();


function MyDrawer() {
    const  {userRole}  = useContext(Context)

    
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Group  screenOptions={{
                headerTitle:'',
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: 'white',
                headerRight: () => (
                    <FontAwesome style={{marginEnd:20}} name="paw" size={34} color="black" />
                )

            }}>

                
                <Drawer.Screen name="Home" component={Home} />

                {
                 userRole == 'admin' ? 
                <Drawer.Screen name="My Pets" component={MainPetsPages} />
                :
                <></>
                }
                <Drawer.Screen name="My Accounts" component={Accounts} />
                <Drawer.Screen name="My Settings" component={Settings} />
            </Drawer.Group>
        </Drawer.Navigator>
    );
}

export default MyDrawer