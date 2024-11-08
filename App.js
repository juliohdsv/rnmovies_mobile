import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [feed, setFedd] = useState([
    {id:1, name: "Júlio", idade:32, email: "julio@gmail.com"},
    {id:2, name: "Henrique", idade:32, email: "julio@gmail.com"},
    {id:3, name: "Vieira", idade:32, email: "julio@gmail.com"},
    {id:4, name: "Silva", idade:32, email: "julio@gmail.com"},
  ]);

  function UserProfile(){
    return(
      <View style={styles.profile}>
        <Text style={styles.description}>Minha lista</Text>
      </View>
    ) 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={feed}
        renderItem={ ({item}) => <UserProfile/> }
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
  },
  description:{
    color: "#fff",
  },
});
