import 'react-native-gesture-handler';
import * as React from 'react'
import Body from './components/Body';
import { useEffect, useState, useContext, createContext } from 'react';
import * as SQLite from 'expo-sqlite'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './fierbaseconfig/firebaseconfig';
import { Context } from './Authcontext/authcontext';


export default function App() {
  const [names, setNames] = useState([])
  const [loader, setLoader] = useState(true)
  const [uid, setUid] = useState(undefined)
  const [useinfo, setUseinfo] = useState(false)
  const [mypets, setMyPets] = useState([])
  const [userRole, SetUserRole] = useState('admin')
  const sqlDb = SQLite.openDatabase('myPets')
  const [imagebeingviewd, setImagebeingviewd] = useState(undefined)
  const [vcomments, setVcomments] = useState([]) 

const Loadingpage  = () => {
  return(
    <View>
      <Text style={{fontSize:20}}>Loading...</Text>
    </View>
  )
}

  const getPets = () => {
    sqlDb.transaction((tx)=> {
      tx.executeSql('SELECT * FROM pets', null, 
      (txObj,resultSet) => setMyPets(resultSet.rows._array),
      (txObj, error) => console.log(error)
      )
    })
}

  useEffect(() => {
    //here data is being retrieved from the database upon app star
    // getDataFromFirebase()
    
    sqlDb.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT,  comments TEXT, name TEXT, species TEXT, age TEXT, weight TEXT, bread TEXT, gender TEXT, color TEXT, ownerid TEXT, vaccine TEXT, dose TEXT, dateoflastvaccine TEXT, dateofnextvaccine TEXT, practitionercomments TEXT, vaccinated TEXT)', null, 
      (txObj, resultSet) => console.log('success in creating the pet table'),
      (txObj, error) => console.log(error))
    });
    // sqlDb.transaction(tx => {
    //   tx.executeSql('ALTER TABLE pets ADD comments TEXT', null, 
    //   () => console.log('table added'))
    // })
    //this sql 
    getPets()

  }, [])

  const alerts = () => {
    alert('done')
  }

  const deleteCol = (id) => {
    sqlDb.transaction(tx => {
      tx.executeSql('DELETE FROM pets WHERE id = ?', [id],
      (txObj, resultSet) => {
        setImagebeingviewd(undefined)
        alert('the pet with id: '+ id +' has been deleted')
        getPets()
      },
      (txObj, error) => console.log(error))
    })
  }

  const addName = (name, species, age, weight, bread,gender, color, ownerid, comments) => {
    sqlDb.transaction((tx) => {
      tx.executeSql('INSERT INTO pets (name, species, age, weight, bread, gender, color, ownerid, comments) values (?,?,?,?,?,?,?,?,?)', [name, species, age, weight, bread,gender, color, ownerid, comments], 
      (txObj, resultSet) => {
        let existingpets = [...mypets];
        existingpets.push({id: resultSet.insertId, name: name, species: species, age: age, weight: weight, bread: bread,gender: gender, color: color, ownerid: ownerid, comments: comments});
        setMyPets(existingpets);
        alert('pet added successfully')
      }),
      (txObj, error) => console.log(error)
    })
  }

  const updatePets = (queryToBeUsed, petid) => {
    sqlDb.transaction((tx) => {
      tx.executeSql(queryToBeUsed, [petid], 
        (txObj, resultSet) => {
          console.log('upadte made')
          getPets()
          alert('succes')
        }),
        (txObj, error) => console.log(error)
    })
  }

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
  const getUser = (uid) => {
    const colref = collection(db, 'users')
    getDocs(colref).then((snapshot) => {
      let books = [];
      snapshot.docs.forEach((doc) => {
          books.push({...doc.data()})
      })
      setUseinfo(books.filter((val) => val.uid == uid)[0])
      setLoader(true)
    })

  }




  return (
    <Context.Provider value={{ getUser, setNames,updatePets, Loadingpage,setLoader, loader, uid,useinfo, setUid, userRole, names, mypets, addName, setMyPets, alerts,imagebeingviewd, setImagebeingviewd,deleteCol }}>
      <Body />
    </Context.Provider>
  );
}

