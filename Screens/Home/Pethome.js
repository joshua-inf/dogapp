import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Pets from "../../components/Pets";
import { useContext } from 'react'
import { Context } from "../../App";


function Home({navigation}) {
  const {myInfo, setMyInfo} = useContext(Context)
  return (
    <ScrollView>
      <View style={{ padding: 10, backgroundColor: '#1077f0', height: '100%', flexDirection: 'column', gap: 20 }}>
        {Pets.map((i, values) => {
          return (
            <>
              <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }} key={values}>
                <View style={{
                  flexDirection: 'row',
                }}>

                  <View style={{
                    flex: 3
                  }}>
                    <Image source={i.petDetails.image} style={{ height: 200, width: '100%' }} />
                  </View>

                  <View style={{
                    flex: 3
                  }}>
                    <View>
                      <View style={{ padding: 10 }}>
                        <View style={{}}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Name: </Text>
                            <Text style={[styles.Text]}>{i.petDetails.name}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Age: </Text>
                            <Text style={[styles.Text]}>{i.petDetails.Age}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Species: </Text>
                            <Text style={[styles.Text]}>{i.petDetails.Species}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Gender: </Text>
                            <Text style={[styles.Text]}>{i.petDetails.Gender}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>weight: </Text>
                            <Text style={[styles.Text]}>{i.petDetails.weight}</Text>
                          </View>
                        </View>

                        <View style={{ marginTop: 10 }}>

                          {/* this section is the list area for the vaccinations of the animal */}
                          <Text>Vaccinattion details</Text>
                          <View>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={[styles.Text1]}>Vaccinated: </Text>
                              <Text style={[styles.Text]}>{i.VacineDetails.Vaccinated}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={[styles.Text1]}>Vaccine: </Text>
                              <Text style={[styles.Text]}>{i.VacineDetails.Vaccine}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={[styles.Text1]}>Dose: </Text>
                              <Text style={[styles.Text]}>{i.VacineDetails.Dose}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={[styles.Text1]}>LastVaccine: </Text>
                              <Text style={[styles.Text]}>{i.VacineDetails.LastVaccine}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={[styles.Text1]}>NextVaccine: </Text>
                              <Text style={[styles.Text]}>{i.VacineDetails.NextVaccine}</Text>
                            </View>
                          </View>
                        </View>


                        <View style={{ flex: 3 }}></View>
                      </View>
                    </View>

                  </View>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>Practitioners comment:</Text>
                  <Text>
                    For your Bombay cat, I would recommend administering the
                    FVCRP vaccination. The specific dosage and schedule will be
                    determined by your veterinarian, taking into account your
                    cat's overall health, vaccinationukopenia.
                  </Text>
                </View>
                {
                  myInfo == 'vet' ?
                    <View style={{ padding: 4 }}>
                      <Pressable onPress={() => navigation.navigate('Client Pet page')} style={{ backgroundColor: '#00f', padding: 3, flexDirection: 'row', justifyContent: 'center', borderRadius: 10, elevation: 4 }}>
                        <Text style={{ color: 'white' }}> Attend</Text>
                      </Pressable>
                    </View>
                    :
                    <></>
                }
              </View>
            </>
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Text: {
  },
  Text1: {
    fontWeight: 'bold'
  }
})

export default Home