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
  const [myUpdatedDetails, setMyUpdatedDetails] = useState({})

  const { useinfo, uid, getUser, loader, Loadingpage, setLoader } = useContext(Context);

  //this function changes to true if any of the values have been changed
  const checkStatus = () => {
    if (name || email || phone || gender || role) {
      return true
    } else {
      return false
    }
  }
  const clear = () => {
    setEmail(undefined)
    setName(undefined)
    setPhone(undefined)
    setRole(undefined)
    setGender(undefined)
  }
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
    addUser()
    setLoader(false)
  }



  const addUser = async () => {
    try {
      const thatdata = collection(db, 'users')
      const docRef = await updateDoc(doc(thatdata, uid), myUpdatedDetails);
      console.log('document written with id: ', docRef);
      clear();
      setMyUpdatedDetails({})
      getUser(uid)
      alert('upadte successfully made')
    } catch (e) {
      console.error('Error adding document', e)
    }
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
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginBottom: 'auto', marginTop: 'auto' }}>Gender: {useinfo.gender} </Text>
                <Text>change gender below</Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                  {gender == 'male' ?
                    <Button disabled onPress={() => setGender('male')} title='male' />
                    :
                    <Button onPress={() => setGender('male')} title='male' />
                  }
                  {gender == 'female' ?
                    <Button disabled onPress={() => setGender('female')} title='female' />
                    :
                    <Button onPress={() => setGender('female')} title='female' />
                  }
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