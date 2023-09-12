import { Button, Pressable, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useContext, useState } from 'react'
import { Context } from "../App";




function Accounts() {
  const {names} = useContext(Context)
const addPet = () => {

}

  return (
  <ScrollView>
       <View style={{padding:10, gap:20}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginBottom:'auto', marginTop:'auto'}}>Name: </Text>
                <TextInput style={{backgroundColor:'#bbb', width: 200, borderRadius:10, padding:5}} placeholder={myname.name} />
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginBottom:'auto', marginTop:'auto'}}>Email: </Text>
                <TextInput style={{backgroundColor:'#bbb', width: 200, borderRadius:10, padding:5}} placeholder={myname.email} />
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginBottom:'auto', marginTop:'auto'}}>Phone: </Text>
                <TextInput style={{backgroundColor:'#bbb', width: 200, borderRadius:10, padding:5}} placeholder={myname.phone} />
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginBottom:'auto', marginTop:'auto'}}>Gender: </Text>
                <TextInput style={{backgroundColor:'#bbb', width: 200, borderRadius:10, padding:5}} placeholder={myname.gender} />
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginBottom:'auto', marginTop:'auto'}}>Role: </Text>
                <TextInput style={{backgroundColor:'#bbb', width: 200, borderRadius:10, padding:5}} placeholder={myname.role} />
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{marginBottom:'auto', marginTop:'auto'}}>Current Password: </Text>
                <TextInput style={{backgroundColor:'#bbb', width: 200, borderRadius:10, padding:5}} placeholder={myname.password} />
              </View>
              {show()}
            </View> 
  </ScrollView>
  )

}

export default Accounts