import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './drawerapp';
import {useState, useEffect, useContext} from'react'
import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../fierbaseconfig/firebaseconfig';
import MainLogin from '../Authpages/mainpagelog';
import { Context } from '../Authcontext/authcontext';


const Body = () => {
    const [user, setUser] = useState<User | null>(null);
    const {getUser, uid, setUid, getPets ,setLoader, loader} = useContext(Context)

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
            if(user){
                getUser(user.uid)
                setUid(user.uid)
                getPets()
                setLoader(false)
            }
        })
    }, [])
    
    return (
        <SafeAreaProvider>
            {user && uid ? 
            <NavigationContainer independent={true}>
                <MyDrawer />
            </NavigationContainer>
                :
                <MainLogin/>
            }
        </SafeAreaProvider>
    )
}

export default Body