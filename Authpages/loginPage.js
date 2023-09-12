import { ActivityIndicator, Alert, Button, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from "react-native"
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'
import { useContext, useState } from "react"
import { FIREBASE_AUTH } from "../fierbaseconfig/firebaseconfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { Context } from "../App"

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const {setUid, getUser} = useContext(Context)


    const [customError, setCustomError] = useState({ state: true })

    const login = async () => {

        if (email == '') {
            setCustomError({ state: false, msg: 'email input is empty' })
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(email) === false) {
                setCustomError({ state: false, msg: 'this is not a valid email' })
            } else {
                if (password == '') {
                    setCustomError({ state: false, msg: 'password fields should not be blunk' })
                } else {
                    setLoading(true);
                    try {
                        const response = await signInWithEmailAndPassword(auth, email, password);
                        let uid = response.user.uid;
                        setUid(uid)
                        getUser()
                    } catch (error) {
                        Alert.alert('', 'login failed, please check your password and/or email or try again later')
                    } finally {
                        setLoading(false)
                    }
                }
            }
        }

    }

    return (
        <>
            <View style={{ backgroundColor: '#00f', height: '100%', justifyContent: 'center', position: 'relative' }}>
                <View style={{ justifyContent: "center", flexDirection: 'row', width: '100%', position: 'absolute', bottom: '55%', right: '0', left: '0' }}>
                    <View style={{ width: 500, backgroundColor: '#ddd', height: 500, borderRadius: 500 }}></View>
                </View>
                <KeyboardAvoidingView >
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesome name="paw" size={200} color="black" />
                            <View style={{ gap: 20, marginTop: 30 }}>
                                <View >
                                    <View style={{ flexDirection: 'row', backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10, elevation: 3 }}>
                                        <AntDesign name="mail" size={30} color="black" style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                                        <TextInput value={email} autoCapitalize="none" onChangeText={(text) => setEmail(text)} style={{ padding: 10, width: 300 }} placeholder="Email" />
                                    </View>
                                </View>
                                <View >
                                    <View style={{ flexDirection: 'row', backgroundColor: '#ddd', borderRadius: 10, paddingHorizontal: 10, elevation: 3 }}>
                                        <Ionicons name="ios-lock-closed-outline" size={30} color="black" style={{ marginBottom: 'auto', marginTop: 'auto' }} />
                                        <TextInput value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={{ padding: 10, width: 300 }} placeholder="Password" />
                                    </View>
                                </View>
                                {!customError.state ?
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                                        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', borderRadius: 10 }}>{customError.msg} </Text>
                                    </View>
                                    :
                                    <>
                                    </>
                                }
                                <View>
                                    {!loading ?
                                        <Button onPress={() => login()} color='' title="Login" />
                                        :
                                        <ActivityIndicator size='large' color='#ddd' />
                                    }
                                </View>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <Text style={{ color: 'white', padding: 5 }}>Dont have an account? </Text><Text onPress={() => navigation.navigate('SignupPage')} style={{ fontWeight: 'bold', color: 'white', padding: 5 }}>Sign up here</Text>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </>
    )
}



export default LoginPage