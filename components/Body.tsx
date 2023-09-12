import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './drawerapp';
import {useState, useEffect} from'react'
import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../fierbaseconfig/firebaseconfig';
import MainLogin from '../Authpages/mainpagelog';


const Body = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])
    
    return (
        <SafeAreaProvider>
            {user ? 
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