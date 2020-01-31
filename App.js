import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';



export default function App() {
  const [list, setList] = useState([]);
  // console.log('here')

  const showDiv = () => {
    if (list.length == 0) {
      return (<View><Text style={styles.textstyle}>id:</Text></View>)
    } else {
      console.log('else show div arr: ', list);
      return list.map((obj, index) => {
        console.log("obj: ", obj);
        console.log("index: ", index);
        return (
          <View style={styles.container} key={index}>
            <Text style={styles.textstyle}>id: {obj.id} </Text>
            <Text style={styles.textstyle}>Title: {obj.title}</Text>
            <Text style={styles.textstyle}>Video: {obj.url}</Text>
          </View>
        );
      });
    }
  }

  const getData = async () => {
    try {
      const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
      const data = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      console.log('data: ', data);
      const response = await fetch(url, data);
      console.log('response: ', response);
      console.log('status: ', response.status);
      const res = await response.json();
      // // alert('hi')
      console.log('res: ', res);
      if (response.status < 200 || response.status >= 300) {
        //     // throw res;
        alert(res.message);
      }
      setList(res);
      return res;
    } catch (err) {
      console.log('ERROR GETTING DATA FROM FACEBOOK')
      console.log(err);
      alert(err.message);
    }
  };

  if (list.length == 0) {
    getData();
  }
  console.log('list: ', list);
  return (
    < ScrollView>
      <View>
        {showDiv()}
      </View>
    </ ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#d6d6d6'
  },
  textstyle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  }
});
