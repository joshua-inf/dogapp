import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Pets from "../../components/Pets";
import { useContext } from "react";
import { Context } from "../../Authcontext/authcontext";
// import { Context } from "../../Authcontext/authcontext";


function MyPets({ navigation }) {
  const { mypets, imagebeingviewd, setImagebeingviewd,uid } = useContext(Context);
  const thatmypets = mypets.filter((data) => data.ownerid === uid )
  // ownerid
  const changelocation = (a) => {
    navigation.navigate('My Pets Details')
    setImagebeingviewd(a)
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#1077f0' }}>
      <View style={{ padding: 10, position: 'sticky', top: 0 }}>
        <Pressable onPress={() => navigation.navigate('Add new  Pet')} style={{ elevation: 4, padding: 5, backgroundColor: 'white', alignContent: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Add pets</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={{ padding: 10, height: '100%', flexDirection: 'column', gap: 20 }}>
          {thatmypets.map((e, value) => {
            return (
              <>
                <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }} key={value}>
                  <View style={{
                    flexDirection: 'row',
                  }}>

                    <View style={{
                      flex: 3
                    }}>
                      <Image source={require('../../images/beagle-sitting-panting-isolated-white.jpg')} style={{ height: 200, width: '100%' }} />
                    </View>

                    <View style={{
                      flex: 3
                    }}>
                      <View style={{ paddingStart: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{e.name}</Text>
                        <Text>
                          {e.comments}
                        </Text>
                      </View>
                      <View style={{ padding: 10 }}>
                        <Button onPress={() =>  changelocation(e.id) } title="View Details" />
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