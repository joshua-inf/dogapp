import { Button, ScrollView, Text, TextInput, View, Pressable, Platform } from "react-native"
import { Context } from "../../Authcontext/authcontext"
import { useContext, useEffect, useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker"

const MyPetPageDetails = () => {
    const [date, setDate] = useState(new Date())
    const { mypets, imagebeingviewd, updatePets } = useContext(Context)
    const [datePicker, setDatePicker] = useState(false)
    const [dateofnextvaccine, setDateofnextvaccine] = useState('')

    const [vaccinated, setVaccinated] = useState(undefined)
    const [vaccine, setVaccine] = useState(undefined)
    const [dose, setDose] = useState(undefined)
    const [dateValue, setDateValue] = useState(undefined)
    const [dateoflastvaccine, setDateoflastvaccine] = useState(undefined)
    const [practitionercomments, setPractitionercomments] = useState(undefined)

    // function check to check whether the states have changed in any way
    const checksates = () => {
        if (vaccine || vaccinated || dose || dateofnextvaccine != '' || practitionercomments) {
            return true
        } else {
            return false
        }
    }

    const clearSets = () => {
        setVaccinated(undefined)
        setPractitionercomments(undefined)
        setVaccine(undefined)
        setDose(undefined)
        setDateoflastvaccine(undefined)
        setDateofnextvaccine('')
    }
    const updatePetsDetails = (id) => {

        let values = { vaccinated, vaccine, dose, dateoflastvaccine: date, dateofnextvaccine, practitionercomments }
        let valuesfunct = Object.keys(values)
        let thosevaluesset = Object.values(values)
        let myvaluessrypt = []
        for (let i = 0; i < thosevaluesset.length; i++) {
            if (thosevaluesset[i] && thosevaluesset[i] != '') {
                myvaluessrypt.push(`${valuesfunct[i]} = '${thosevaluesset[i]}'`)
            }
        }

        let myfinalscrypt = `UPDATE pets SET  ${myvaluessrypt}  WHERE id = ?`
        updatePets(myfinalscrypt, id)

        clearSets()

    }

    const toggleAate = () => {
        setDatePicker(!datePicker)
        console.log(datePicker)
    }

    const oncheangedate = ({ type }, selectedDate) => {
        if (type === 'set') {
            let currentdate = selectedDate;
            toggleAate()
            setDateofnextvaccine(currentdate);
            let stringDate = selectedDate.toDateString()
            setDateValue(stringDate)
        } else {
            toggleAate()
        }
    }

    const myPetsfinal = mypets.filter((data) => data.id == imagebeingviewd)

    if (myPetsfinal[0]) {
        let values = myPetsfinal[0]
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#1077f0', height: '100%', padding: 20 }}>
                    <View style={{ backgroundColor: '#ddd', borderRadius: 20, padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 3, backgroundColor: '#333', height: 200 }}></View>
                            <View style={{ flex: 3, padding: 10, flexDirection: 'column', justifyContent: 'center' }}>
                                <Button title="click to add an image" />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10, }}>
                            <View style={{ flex: 3, flexDirection: 'column', gap: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>name: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Species: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.species}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Bread: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.bread}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 3, flexDirection: 'column', gap: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Age: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.age}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>weight: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.weight}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Gender: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.gender}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Color: </Text>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>{values.color}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Practitioner only</Text>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'column', gap: 20 }}>
                                <View style={{ flexDirection: 'coluumn' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Vaccinated: {values.vaccinated}</Text>
                                    <Text>change gender below</Text>
                                    <View style={{ flexDirection: 'row', gap: 20 }}>
                                        {vaccinated == 'Yes' ?
                                            <Button disabled onPress={() => setVaccinated('Yes')} title='Yes' />
                                            :
                                            <Button onPress={() => setVaccinated('Yes')} title='Yes' />
                                        }
                                        {vaccinated == 'No' ?
                                            <Button disabled  title='No' />
                                            :
                                            <Button onPress={() => setVaccinated('No')} title='No' />
                                        }
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 3, flexDirection: 'row' }}>
                                        <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Vaccine:</Text>
                                        <TextInput onChangeText={setVaccine} value={vaccine} style={{ width: 100, padding: 5, backgroundColor: '#eee' }} placeholder={values.vaccine} />
                                    </View>
                                    <View style={{ flex: 3, flexDirection: 'row' }}>
                                        <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Dose:</Text>
                                        <TextInput onChangeText={setDose} value={dose} style={{ width: 100, padding: 5, backgroundColor: '#eee' }} placeholder={values.dose} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>last Vaccination:</Text>
                                    <TextInput editable={false} onChangeText={setDateoflastvaccine} style={{ width: 200, padding: 5, backgroundColor: '#eee' }} placeholder={new Date(values.dateoflastvaccine).toDateString()} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Next Vaccination:</Text>
                                    <Pressable onPress={() => toggleAate()}>
                                        <TextInput editable={false} value={dateValue} style={{ width: 200, padding: 5, backgroundColor: '#eee' }} placeholder={new Date(values.dateofnextvaccine).toDateString()} />
                                    </Pressable>
                                    {/* <TextInput style={{ width: 200, padding: 5, backgroundColor: '#eee' }} placeholder="" /> */}
                                    {datePicker ?
                                        <DateTimePicker
                                            mode='date'
                                            display="Spinner"
                                            value={date}
                                            onChange={oncheangedate}

                                        />
                                        :
                                        <></>
                                    }
                                </View>
                                <View >
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Description:</Text>
                                    <TextInput multiline={true} onChangeText={setPractitionercomments} numberOfLines={7} style={{ width: '100%', padding: 5, backgroundColor: '#eee' }} placeholder={values.practitionercomments} />
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View >
                                {checksates() ?
                                    <Button onPress={() => updatePetsDetails(values.id)} title="save" style={{ flex: 3 }} />
                                    :
                                    <Button title="save" disabled style={{ flex: 3 }} />
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}



export default MyPetPageDetails