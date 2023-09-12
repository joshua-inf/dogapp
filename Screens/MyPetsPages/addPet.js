import { Button, Text, TextInput, View } from "react-native"

const AddPets = () => {
    return (
        <View style={{ backgroundColor: '#1077f0', height: '100%', padding: 20 }}>
            <View style={{ backgroundColor: '#ddd', borderRadius: 20 , padding:5}}>
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
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Species: </Text>
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Bread: </Text>
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', gap: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Age: </Text>
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>weight: </Text>
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Gender: </Text>
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Color: </Text>
                            <TextInput placeholder="name" style={{ width: 100, backgroundColor: '#eee', padding: 3 }} />
                        </View>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View >
                        <Button title="save" />
                    </View>
                </View>
            </View>
        </View>
    )
}



export default AddPets