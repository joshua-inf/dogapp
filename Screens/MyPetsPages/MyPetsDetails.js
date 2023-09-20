import { useContext } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { Context } from "../../Authcontext/authcontext"
import { useState } from 'react'
import { convertToObject } from "typescript"

const MyPetsDetails = () => {
    const [name, setName] = useState(undefined)
    const [species, setSpecies] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [weight, setWeight] = useState(undefined)
    const [bread, setBread] = useState(undefined)
    const [gender, setGender] = useState(undefined)
    const [color, setColor] = useState(undefined)




  //this function when called clears the state of the constants
const clearSets = () => {
    setName(undefined)
    setWeight(undefined)
    setAge(undefined)
    setColor(undefined)
    setGender(undefined)
    setBread(undefined)
    setSpecies(undefined)
}
    // function check to check whether the states have changed in any way
    const checksates = () => {
        if (name || age || color || bread || gender || weight || species) {
            return true
        } else {
            return false
        }
    }
    

    //this useContext hook get the information and functions passed from parent to child elements to be used throughout the project
    const { imagebeingviewd, mypets, deleteCol,updatePets, setImagebeingviewd } = useContext(Context)
    
    if(imagebeingviewd){
        const mypetsfiltered = mypets.filter((value) => value.id == imagebeingviewd)
        const finalmypets = mypetsfiltered[0]
        
        const executeDelete = () => {
            deleteCol(finalmypets.id)
        }
            //this fumctiom creates the update qury
    const updatePetsDetails = () => {

        let values  = {name, species, age, bread, gender, color}
        let valuesfunct = Object.keys(values)
        let thosevaluesset = Object.values(values)
        let myvaluessrypt = []
        for(let i = 0; i < thosevaluesset.length; i++){
            if(thosevaluesset[i]){
                myvaluessrypt.push(`${valuesfunct[i]} = '${thosevaluesset[i]}'`)
            }

        }

        let myfinalscrypt = `UPDATE pets SET  ${myvaluessrypt}  WHERE id = ?`
        updatePets(myfinalscrypt, finalmypets.id)

        clearSets()

    }

        return (
            <View style={{ backgroundColor: '#1077f0', height: '100%', padding: 20 }}>
                <View style={{ backgroundColor: '#ddd', borderRadius: 20, padding: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 3, backgroundColor: '#333', height: 200 }}></View>
                        <View style={{ flex: 3, padding: 10, flexDirection: 'column', justifyContent: 'center' }}>
                            <Button title="click to add an image" />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 20, }}>
                        <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>name: </Text>
                                <TextInput value={name} onChangeText={setName} placeholder={finalmypets.name} style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Species: </Text>
                                <TextInput value={species} onChangeText={setSpecies} placeholder={finalmypets.species} style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Bread: </Text>
                                <TextInput value={bread} onChangeText={setBread} placeholder={finalmypets.bread} style={{ width: 100, backgroundColor: '#eee', padding: 4 }} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Age: </Text>
                                <TextInput value={age} onChangeText={setAge} placeholder={finalmypets.age} style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>weight: </Text>
                                <TextInput value={weight} onChangeText={setWeight} placeholder={finalmypets.weight} style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Gender: </Text>
                                <TextInput value={gender} onChangeText={setGender} placeholder={finalmypets.gender} style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Color: </Text>
                                <TextInput value={color} onChangeText={setColor}  placeholder={finalmypets.color} style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                        <View style={{ flex: 3 }}>
                            {checksates() ?
                                <Button onPress={updatePetsDetails} title="save" style={{ flex: 3 }} />
                                :
                                <Button disabled title="save" style={{ flex: 3 }} />
                            }
                        </View>
                        <View style={{ flex: 3 }}>
                            <Button onPress={executeDelete} color='red' title="delete" />
                        </View>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{padding:10}}>
            <View style={{backgroundColor:'#900', padding:20, alignContent:'center', borderRadius:15}}>
                <Text style={{textAlign:'center', color:'white', fontSize: 17, textTransform:'uppercase'}}>nothing here or id does not exist</Text>
            </View>
            </View>
        )
    }

}



export default MyPetsDetails