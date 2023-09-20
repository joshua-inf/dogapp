import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Pets from "../../components/Pets";
import { useContext, useEffect } from 'react'
import { Context } from "../../Authcontext/authcontext";


function Home({navigation}) {
  const {mypets, useinfo, alerts,  setImagebeingviewd, uid} = useContext(Context)

//these are the views on the home page that are specific to the users role
  const ShowPets =() => {
    if(useinfo.role == 'petOwner'){
      
      let thatpets = mypets.filter((data) => data.ownerid == uid)
      return thatpets.map((i, values) => {
        return (
          <>
            <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }} key={i.id}>
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
                  <View>
                    <View style={{ padding: 10 }}>
                      <View style={{}}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Name: </Text>
                          <Text style={[styles.Text]}>{i.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Age: </Text>
                          <Text style={[styles.Text]}>{i.age}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Species: </Text>
                          <Text style={[styles.Text]}>{i.species}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Gender: </Text>
                          <Text style={[styles.Text]}>{i.gender}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>weight: </Text>
                          <Text style={[styles.Text]}>{i.weight}</Text>
                        </View>
                      </View>
  
                      <View style={{ marginTop: 10 }}>
  
                        {/* this section is the list area for the vaccinations of the animal */}
                        <Text>Vaccinattion details</Text>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Vaccinated: </Text>
                            <Text style={[styles.Text]}>{i.vaccinated}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Vaccine: </Text>
                            <Text style={[styles.Text]}>{i.vaccine}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Dose: </Text>
                            <Text style={[styles.Text]}>{i.dose}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>LastVaccine: </Text>
                            <Text style={[styles.Text]}>{new Date(i.dateoflastvaccine).toDateString()}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>NextVaccine: </Text>
                            <Text style={[styles.Text]}>{new Date(i.dateofnextvaccine).toDateString()}</Text>
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
                </Text>
              {
                useinfo.role == 'Vet' ?
                  <View >
                    <Pressable  onPress={() => {navigation.navigate('Client Pet page') , setImagebeingviewd(i.id)}} style={{ backgroundColor: '#00f', padding: 10, flexDirection: 'row', justifyContent: 'center', borderRadius: 10, elevation: 4 }}>
                      <Text style={{ color: 'white' }}> Attend</Text>
                    </Pressable>
                  </View>
                  :
                  <></>
              }
              </View>
            </View>
          </>
        )
      })
    } else if(useinfo.role =='Vet'){
      return mypets.map((i, values) => {

        return (
          <>
            <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }} key={i.id}>
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
                  <View>
                    <View style={{ padding: 10 }}>
                      <View style={{}}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Name: </Text>
                          <Text style={[styles.Text]}>{i.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Age: </Text>
                          <Text style={[styles.Text]}>{i.age}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Species: </Text>
                          <Text style={[styles.Text]}>{i.species}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Gender: </Text>
                          <Text style={[styles.Text]}>{i.gender}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>weight: </Text>
                          <Text style={[styles.Text]}>{i.weight}</Text>
                        </View>
                      </View>
  
                      <View style={{ marginTop: 10 }}>
  
                        {/* this section is the list area for the vaccinations of the animal */}
                        <Text>Vaccinattion details</Text>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Vaccinated: </Text>
                            <Text style={[styles.Text]}>{i.vaccinated}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Vaccine: </Text>
                            <Text style={[styles.Text]}>{i.vaccine}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Dose: </Text>
                            <Text style={[styles.Text]}>{i.dose}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>LastVaccine </Text>
                            <Text style={[styles.Text]}>{new Date(i.dateoflastvaccine).toDateString()}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>NextVaccine: </Text>
                            <Text style={[styles.Text]}>{new Date(i.dateofnextvaccine).toDateString()}</Text>
                          </View>
                        </View>
                      </View>
  
  
                      <View style={{ flex: 3 }}></View>
                    </View>
                  </View>
  
                </View>
              </View>
              <View>
              {i.practitionercomments != '' ?
              <View>
              <Text style={{ fontWeight: 'bold' }}>Practitioners comment:</Text>
                <Text>
                {i.practitionercomments}
                </Text>
              </View>
              :
              <></>
              }
                
              {
                useinfo.role == 'Vet' ?
                  <View >
                    <Pressable  onPress={() => {navigation.navigate('Client Pet page') , setImagebeingviewd(i.id)}} style={{ backgroundColor: '#00f', padding: 10, flexDirection: 'row', justifyContent: 'center', borderRadius: 10, elevation: 4 }}>
                      <Text style={{ color: 'white' }}> Attend</Text>
                    </Pressable>
                  </View>
                  :
                  <></>
              }
              </View>
            </View>
          </>
        )
      })
    } else if(useinfo.role == 'Officer'){
      const filteredpets = mypets.filter((val) => new Date(val.dateofnextvaccine).getTime() > new Date().getTime() && val.vaccinated != 'Yes' )
      return filteredpets.map((i, values) => {
        console.log(i.vaccinated)
        return (
          <>
            <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }} key={i.id}>
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
                  <View>
                    <View style={{ padding: 10 }}>
                      <View style={{}}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Name: </Text>
                          <Text style={[styles.Text]}>{i.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Age: </Text>
                          <Text style={[styles.Text]}>{i.age}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Species: </Text>
                          <Text style={[styles.Text]}>{i.species}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>Gender: </Text>
                          <Text style={[styles.Text]}>{i.gender}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={[styles.Text1]}>weight: </Text>
                          <Text style={[styles.Text]}>{i.weight}</Text>
                        </View>
                      </View>
  
                      <View style={{ marginTop: 10 }}>
  
                        {/* this section is the list area for the vaccinations of the animal */}
                        <Text>Vaccinattion details</Text>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Vaccinated: </Text>
                            <Text style={[styles.Text]}>{i.vaccinated}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Vaccine: </Text>
                            <Text style={[styles.Text]}>{i.vaccine}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>Dose: </Text>
                            <Text style={[styles.Text]}>{i.dose}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>LastVaccine: </Text>
                            <Text style={[styles.Text]}>{new Date(i.dateoflastvaccine).toDateString()}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.Text1]}>NextVaccine: </Text>
                            <Text style={[styles.Text]}>{new Date(i.dateofnextvaccine).toDateString()}</Text>
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
                </Text>
              </View>
            </View>
          </>
        )
      })
    }
  }
  return (
    <ScrollView style={{backgroundColor: '#1077f0',  height: '100%'}}>
      <View style={{ padding: 10, flexDirection: 'column', gap: 20 }}>
        {ShowPets()}
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