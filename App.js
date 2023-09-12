import 'react-native-gesture-handler';
import * as React from 'react'
import Body from './components/Body';
import { useEffect, useState, useContext, createContext } from 'react';
import * as SQLite from 'expo-sqlite'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fierbaseconfig/firebaseconfig';


export const Context = createContext();



export default function App() {
  const [names, setNames] = useState([])
  const [uid, setUid] = useState(undefined)
  const [useinfo, setUseinfo] = useState()
  const [pets, setPets] = useState([])
  const [userRole, SetUserRole] = useState('admin')
  const sqlDb = SQLite.openDatabase('myPets')

  useEffect(() => {
    //here data is being retrieved from the database upon app star
    // getDataFromFirebase()
    if(uid){
      getUser()
    }

    sqlDb.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name ')
    })


    

  }, [])

  //this function gets data or pet data from the firbase database
  const getDataFromFirebase = async () => {
    let someinfo = [];
    someinfo = []
    const querySnapshot = await getDocs(collection(db, 'Pets'));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      someinfo.push(data);

    });
    setNames(someinfo)
  }

  //function to get user info from database
  const getUser = async () => {
   const docRef = doc(db, 'users',uid);

   getDoc(docRef).then((doc) => {
    setUseinfo(doc.data())
    console.log(useinfo)
   })

    // let someinfo = [];
    // someinfo = [];
    // const querySnapshot = await getDocs(collection(db, 'users'));
    // querySnapshot.forEach((doc) => {
    //   let data = doc.data();
    //   console.log(doc.data())
    //   someinfo.push(data);
    // });
    // setUseinfo(someinfo)
    // console.log(useinfo)
  }




  return (
    <Context.Provider value={{ getUser, uid, setUid, userRole, names }}>
      <Body />
    </Context.Provider>
  );
}

