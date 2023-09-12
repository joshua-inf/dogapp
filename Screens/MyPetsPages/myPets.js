import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Pets from "../../components/Pets";
import { useContext } from "react";
import { Context } from "../../Authcontext/authcontext";


function MyPets({navigation}) {
  return (
    <View style={{height:'100%',backgroundColor: '#1077f0'}}>
    <View style={{padding:10, position:'sticky', top:0}}>
      <Pressable onPress={() => navigation.navigate('Add new  Pet')} style={{elevation:4,padding:5, backgroundColor:'white', alignContent:'center', flexDirection:'row', justifyContent:'center' }}>
        <Text>Add pets</Text>
      </Pressable>
    </View>
      <ScrollView>
        <View style={{ padding: 10, height: '100%', flexDirection: 'column', gap: 20 }}>
          {Pets.map((e, value) => {
            return (
              <>
                <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }} key={value}>
                  <View style={{
                    flexDirection: 'row',
                  }}>

                    <View style={{
                      flex: 3
                    }}>
                      <Image source={e.petDetails.image} style={{ height: 200, width: '100%' }} />
                    </View>

                    <View style={{
                      flex: 3
                    }}>
                      <View style={{paddingStart:10}}>
                        <Text style={{ fontWeight: 'bold', fontSize:16 }}>{e.petDetails.name}</Text>
                        <Text>
                          For your Bombay cat, I would recommend administering the
                          FVCRP vaccination. The specific dosage and schedule will be
                          determined by your veterinarian, taking into account your
                          cat's overall health, vaccinationukopenia.
                        </Text>
                      </View>
                      <View style={{padding:10}}>
                        <Button onPress={() => navigation.navigate('My Pets Details')} title="View Details" />
                      </View>
                    </View>
                  </View>
                </View>
              </>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
  },
  Text1: {
    fontWeight: 'bold'
  }
})

export default MyPets