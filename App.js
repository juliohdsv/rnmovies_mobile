import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [feed, setFedd] = useState([
    {id:1, name: "Júlio", age:32, email: "julio@gmail.com"},
    {id:2, name: "Henrique", age:32, email: "julio@gmail.com"},
    {id:3, name: "Vieira", age:32, email: "julio@gmail.com"},
    {id:4, name: "Silva", age:32, email: "julio@gmail.com"},
    {id:5, name: "Tais Vieira", age:34, email: "julio@gmail.com"},
  ]);

  function UserProfile(props){
    return(
      <View 
        style={styles.profile}
        key={props.data.id}
      >
        <Text style={styles.description}>{props.data.name}</Text>
        <Text style={styles.description}>{props.data.age}</Text>
        <Text style={styles.description}>{props.data.email}</Text>
      </View>
    ) 
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={ (item)=> item.id}
        data={feed}
        renderItem={ ({item}) => <UserProfile data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile:{
    backgroundColor: "#000",
    height: 200,
    marginBottom: 15,
    justifyContent: "center",
  },
  description:{
    color: "#fff",
  },
});
