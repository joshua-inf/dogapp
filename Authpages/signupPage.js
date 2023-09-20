import { ActivityIndicator, Alert, Button, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from "react-native"
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'
import { useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { FIREBASE_AUTH, db } from "../fierbaseconfig/firebaseconfig"
import * as SQLite from 'expo-sqlite';
import { Context } from "../Authcontext/authcontext"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

const SignupPage = ({ navigation }) => {
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [passwordCopy, setPasswordCopy] = useState('');
    const [loading, setLoading] = useState(false)
    const [role, setRole] = useState(undefined)
    const auth = FIREBASE_AUTH
    const { uid, setUid, getUser } = useContext(Context)

    const [customError, setCustomError] = useState({ state: true })

    //this function adds the user details into firebase usind the uid recieved after creating a user
    const addUser = async (uid) => {
        try {
            const thatdata = collection(db, 'users')
            const docRef = await setDoc(doc(thatdata, uid), {
                email: email,
                uid: uid,
                role: role,
                name: 'john doe',
                phone: '+260*******',
                gender: 'unspecified',
                address:''
            });
            console.log('document written with id: ', docRef);
        } catch (e) {
            console.error('Error adding document', e)
        }
    }

    //this signup function use user input i.e from the email andpassword to create a user with firebase
    const Signup = async () => {
        //the statements below check if the inputs have values or not, email is a valid email address,if the passwords match or not and issues 
        //to do with with using the same email and short passwords firebase has it own 
        if (!email) {
            setCustomError({ state: false, msg: 'email input is empty' })
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
                setCustomError({ state: false, msg: 'this is not a valid email' })
            } else {
                if (password == '' && passwordCopy == '') {
                    setCustomError({ state: false, msg: 'password fields should not be blunk' })
                } else {
                    if (passwordCopy != password) {
                        setCustomError({ state: false, msg: 'the passwords do not match' })
                    } else {
                        if(!role){
                            setCustomError({state:false, msg:'select role'})
                        } else{
                            setLoading(true);
                            try {

                                //this a firebase async function that parses the email and password to create a user with a unique uid
                                const response = await createUserWithEmailAndPassword(auth, email, password);
                                let uid = response.user.uid

                                //this block of functions  uses the user id created by firebase to set the uid and save other auth properties
                                setUid(uid)
                                getUser(uid)
                                addUser(uid)
                                //====
                                alert('check your emails')
                            } catch (error) {
                                console.log(error);
                                Alert.alert('', 'sign up faild. try again later')
                            } finally {
                                setLoading(false)
                            }
                        }
                    }
                }
            }
        }
    }






    return (
        <>
            <View style={{ backgroundColor: '#00f', height: '100%', justifyContent: 'center', position: 'relative' }}>
                <View style={{ justifyContent: "center", flexDirection: 'row', width: '100%', position: 'absolute', bottom: '65%', right: '0', left: '0' }}>
                    <View style={{ width: 500, backgroundColor: '#ddd', height: 500, borderRadius: 500 }}></View>
                </View>
                <KeyboardAvoidingView >
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesome name="paw" size={200} color="black" />
                            <View style={{ gap: 20, marginTop: 30 }}>
                                <View >
                                    <View style={{ flexDirection: 'row', backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }}>
                                        <AntDesign name="mail" size={30} color="black" style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                                        <TextInput onChangeText={(text) => setEmail(text)} value={email} style={{ padding: 10, width: 300 }} placeholder="Email" />
                                    </View>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }}>
                                        <Ionicons name="ios-lock-closed-outline" size={30} color="black" style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                                        <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={{ padding: 10, width: 300 }} placeholder="Password" />
                                    </View>
                                </View>
                                <View >
                                    <View style={{ flexDirection: 'row', backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10 }}>
                                        <Ionicons name="ios-lock-closed-outline" size={30} color="black" style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                                        <TextInput secureTextEntry={true} onChangeText={(text) => setPasswordCopy(text)} style={{ padding: 10, width: 300 }} placeholder="Confirm Password" />
                                    </View>
                                </View>
                                <Text style={{color:'white', textAlign:'center'}}>Select prefered role</Text>
                                <View style={{ gap: 20, flexDirection: 'row', justifyContent:'space-evenly' }}>
                                    {
                                        role == 'petOwner' ?
                                            <Button disabled title="petOwner" />
                                            :
                                            <Button onPress={() => setRole('petOwner')} title="petOwner" />
                                    }

                                    {
                                        role == 'Vet' ?
                                            <Button disabled title="Vet" />
                                            :
                                            <Button onPress={() => setRole('Vet')} title="Vet" />
                                    }

                                    {
                                        role == 'Officer' ?
                                            <Button disabled title="Officer" />
                                            :
                                            <Button onPress={() => setRole('Officer')} title="Officer" />
                                    }
                                </View>
                                {!customError.state ?
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', borderRadius: 10 }}>{customError.msg}</Text>
                                    </View>
                                    :
                                    <></>
                                }
                                {loading ?
                                    <ActivityIndicator size='large' color='#ddd' />
                                    :
                                    <View >
                                        <Button onPress={() => Signup()} color='' title="Signup" />
                                    </View>
                                }
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <Text style={{ padding: 5 }}>Already have an account? </Text><Text onPress={() => navigation.goBack()} style={{ fontWeight: 'bold', color: 'white', padding: 5 }}>Log in</Text>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}



export default SignupPage