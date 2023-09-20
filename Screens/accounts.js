import { Button, Pressable, ScrollView, Text, View, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useContext, useState } from 'react'
import { Context } from "../Authcontext/authcontext";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../fierbaseconfig/firebaseconfig";
import * as filesystem from 'expo-file-system';




function Accounts() {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [gender, setGender] = useState(undefined)
  const [role, setRole] = useState(undefined)
  const [address, setAddress] = useState(undefined)
  const [myUpdatedDetails, setMyUpdatedDetails] = useState({})

  const { useinfo, uid, getUser, loader, Loadingpage, setLoader } = useContext(Context);

  //this function changes to true if any of the values have been changed and makes the update button clickeable
  const checkStatus = () => {
    if (name || email || phone || gender || role || address) {
      return true
    } else {
      return false
    }
  }

  //this function when called clears the state of the constants
  const clear = () => {
    setEmail(undefined)
    setName(undefined)
    setPhone(undefined)
    setRole(undefined)
    setGender(undefined)
  }

  //in order to only update the fields that have been changed this function when called
  //checks for input validity and if true that variable is added to an object which is then parsed
  const uploaddata = () => {
    if (name) {
      myUpdatedDetails.name = name
    }
    if (email) {
      myUpdatedDetails.email = email
    }
    if (phone) {
      myUpdatedDetails.phone = phone
    }
    if (role) {
      myUpdatedDetails.role = role
    }
    if (gender) {
      myUpdatedDetails.gender = gender
    }
    if(address) {
      myUpdatedDetails.address = address
    }

    addUser()
    setLoader(false)
  }


//this function is called after the information has already passed through form validation and sends
//and sends a request to the firbase server to update the user info
  const addUser = async () => {
    try {
      const thatdata = collection(db, 'users')
      const docRef = await updateDoc(doc(thatdata, uid), myUpdatedDetails);
      alert('upadte successfully made')
      clear();
      setMyUpdatedDetails({})
      getUser(uid)
    } catch (e) {
      console.error('Error adding document', e)
    }
  }


  const Gender = () => {
      return (
        <View>
        <Text>change gender below</Text>
        
        <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'80%'}}>

  
          {
            gender == 'male' ?
              <Button disabled onPress={() => setGender('male')} title='male' />
              :
              <Button onPress={() => setGender('male')} title='male' />
          }
          {
            gender == 'female' ?
              <Button disabled onPress={() => setGender('female')} title='female' />
              :
              <Button onPress={() => setGender('female')} title='female' />
          }
        </View>
        </View>
      )
  }



  if (!uid) {
    return (
      <View style={{ padding: 10 }}>
        <View style={{ backgroundColor: '#900', padding: 20, alignContent: 'center', borderRadius: 15 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 17, textTransform: 'uppercase' }}>user not logged in</Text>
        </View>
      </View>
    )
  } else {
    return (
      <ScrollView>

        {loader ?
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '#222', height: 150, width: 150, borderRadius: 150 }}></View>
            </View>
            <View style={{ padding: 10, gap: 20 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Name: </Text>
                <TextInput value={name} onChangeText={setName} style={{ backgroundColor: '#bbb', width: 200, borderRadius: 10, padding: 5 }} placeholder={useinfo.name} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Email:  </Text>
                <TextInput value={email} onChangeText={setEmail} style={{ backgroundColor: '#bbb', width: 200, borderRadius: 10, padding: 5 }} placeholder={useinfo.email} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Phone: </Text>
                <TextInput value={phone} onChangeText={setPhone} style={{ backgroundColor: '#bbb', width: 200, borderRadius: 10, padding: 5 }} placeholder={useinfo.phone} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>address: </Text>
                <TextInput value={address} onChangeText={setAddress} style={{ backgroundColor: '#bbb', width: 200, borderRadius: 10, padding: 5 }} placeholder={useinfo.address} />
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Gender: {useinfo.gender} </Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                {useinfo.gender == 'female' || useinfo.gender == 'male' ?
<></>
                  :
                 Gender()
                }
                {/* {Gender(useinfo.gender)} */}
                </View>
              </View>
              <View style={{ flexDirection: 'column'}}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Role: {useinfo.role}</Text>
                
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Current Password: </Text>
                <TextInput style={{ backgroundColor: '#bbb', width: 200, borderRadius: 10, padding: 5 }} placeholder='hidded' />
              </View>
            </View>
            <View>
              {checkStatus() ?
                <Button onPress={uploaddata} title="update" />
                :
                <Button disabled title="update" />
              }
            </View>
          </View>
          :
          <ActivityIndicator size='large' color='#ddd' />
        }
      </ScrollView>
    )
  }


}

export default Accounts