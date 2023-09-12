import { Button, ScrollView, Text, TextInput, View } from "react-native"

const MyPetPageDetails = () => {
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
                    <View style={{ flexDirection: 'row', padding: 20, }}>
                        <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>name: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>name: </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Species: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Species: </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Bread: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Bread: </Text>
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Age: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Age: </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>weight: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>weight: </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Gender: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Gender: </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Color: </Text>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Color: </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Practitioner only</Text>
                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'column', gap: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Vaccinated:</Text>
                                <TextInput style={{ width: 200, padding: 5, backgroundColor: '#eee' }} placeholder="" />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 3, flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Vaccine:</Text>
                                    <TextInput style={{ width: 100, padding: 5, backgroundColor: '#eee' }} placeholder="" />
                                </View>
                                <View style={{ flex: 3, flexDirection: 'row' }}>
                                    <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Dose:</Text>
                                    <TextInput style={{ width: 100, padding: 5, backgroundColor: '#eee' }} placeholder="" />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>last Vaccination:</Text>
                                <TextInput style={{ width: 200, padding: 5, backgroundColor: '#eee' }} placeholder="" />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Next Vaccination:</Text>
                                <TextInput style={{ width: 200, padding: 5, backgroundColor: '#eee' }} placeholder="" />
                            </View>
                            <View >
                                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Description:</Text>
                                <TextInput multiline={true} numberOfLines={7} style={{ width: '100%', padding: 5, backgroundColor: '#eee' }} placeholder="pet details here" />
                            </View>
                        </View>
                    </View>
                    <View style={{  padding: 10 }}>
                        <View style={{ }}>
                            <Button title="save" style={{ flex: 3 }} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}



export default MyPetPageDetails