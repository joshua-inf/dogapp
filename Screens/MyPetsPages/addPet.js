import { useContext, useState, useEffect } from "react"
import { Button, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, View, useColorScheme } from "react-native"
import { Context } from "../../Authcontext/authcontext"
import * as SQLite from 'expo-sqlite'
import * as ImagPicker from 'expo-image-picker';

const AddPets = () => {

    // name, species, age, weight, bread,gender, color, ownerid
    const [name, setName] = useState(undefined)
    const [species, setSpecies] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [weight, setWeight] = useState(undefined)
    const [bread, setBread] = useState(undefined)
    const [gender, setGender] = useState(undefined)
    const [color, setColor] = useState(undefined)
    const [comments, setComments] = useState('')
    const [address, setAddress] = useState(undefined)
    const [image, setImage] = useState(null)
    const [myPets, setMyPets] = useState([])

    const sqlDb = SQLite.openDatabase('myPets')

    const { uid, addName, useinfo } = useContext(Context);

    const [coount, setCount] = useState(0)
    const createTabel = () => {

    }


    const pickImage = async () => {
        let result  = await ImagPicker.launchImageLibraryAsync({
          mediaTypes: ImagPicker.MediaTypeOptions.All,
          allowsEditing:true,
          aspect: [4,4],
          quality:1
        });
        if(!result.canceled){
          setImage(result.assets[0].uri)
        }
      }
    

    const Clear = () => {
        setAge(undefined)
        setSpecies(undefined)
        setWeight(undefined)
        setGender(undefined)
        setColor(undefined)
        setName(undefined)
        setBread(undefined)
        setImage(null)
        setAddress(undefined)
        setComments(undefined)
    }
    const submit = () => {
        if(useinfo.address && useinfo.address != ''){
            addName(name, species, age, weight, bread, gender, color, uid, comments, address)
            Clear()
        } else {
            alert('unable to add pet, please add or update personal address')
            console.log('there is a problem')
        }
    }


    return (

        <View style={{ backgroundColor: '#1077f0', height: '100%' }}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{ backgroundColor: '#ddd', padding: 35 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 3, backgroundColor: '#333', height: 200, overflow:'hidden'}}>
                                {image ?
                                    <Image source={{ uri: image }} style={{ height: 200 }} />
                                    :
                                    <></>
                                }
                            </View>
                            <View style={{ flex: 3, padding: 10, flexDirection: 'column', justifyContent: 'center' }}>
                                <Button onPress={pickImage} title="click to add an image" />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 20, }}>
                            <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>name: </Text>
                                    <TextInput value={name} onChangeText={setName} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Species: </Text>
                                    <TextInput value={species} onChangeText={setSpecies} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Bread: </Text>
                                    <TextInput value={bread} onChangeText={setBread} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                            </View>
                            <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Age: </Text>
                                    <TextInput value={age} onChangeText={setAge} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>weight: </Text>
                                    <TextInput value={weight} onChangeText={setWeight} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Gender: </Text>
                                    <TextInput value={gender} onChangeText={setGender} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Color: </Text>
                                    <TextInput value={color} onChangeText={setColor} placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text>pet details(optional)</Text>
                            <TextInput value={comments} onChangeText={setComments} style={{ backgroundColor: '#eee' }} multiline numberOfLines={4} maxLength={50} />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View >
                                <Button onPress={submit} title="save" />
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}



export default AddPets