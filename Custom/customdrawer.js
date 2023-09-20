import { Button, Text, View } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { SafeAreaInsetsContext } from "react-native-safe-area-context"
import { useContext } from "react"
import { FIREBASE_AUTH } from "../fierbaseconfig/firebaseconfig"
import { Context } from "../Authcontext/authcontext"


const CustomDrawer = (props) => {
    const {uid, getUser, setNames, setUid, setMypets, setUseinfo, setMyPets} = useContext(Context);

    const logout = () => {
        FIREBASE_AUTH.signOut()
        setUid(undefined)
        setMyPets([])
    }

    return (
        <SafeAreaInsetsContext.Consumer>
            {insets => 
                    <View style={{ 
                        flex: 1,
                        paddingTop: insets.top,
                        backgroundColor:'#d9d9d9'
                     }}>
                        <View>
                            <View style={{
                                padding:50,
                                alignContent: 'center'
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 30

                                }}>
                                    My Pet App 
                                </Text>
                            </View>
                            <View style={{
                                backgroundColor: 'black',
                                padding: 1,
                                width: '90%'
                            }}></View>
                        </View>
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                        </DrawerContentScrollView>
                        <View style={{ padding: 10 }}>
                            <Button onPress={logout} title='Log out' />
                        </View>
                    </View>
            }
        </SafeAreaInsetsContext.Consumer>
    )
}
// () => FIREBASE_AUTH.signOut()
export default CustomDrawer