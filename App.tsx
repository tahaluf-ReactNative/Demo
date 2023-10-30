/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput , ScrollView, Image, FlatList} from 'react-native';





// function App(): JSX.Element {
//   const [name,setName] = useState('username');
//   const [age,setAge] = useState(20);

//  const handleText = (text:String)=>{
//     setName(text);
//  }

//   return (

//     <View style={styles.container}>
//       <Text>Hello {name} your age is {age}</Text>
//       <Button title='increase one' onPress={()=> setAge(age+1)}/>
//       <Button title='decrease one' onPress={()=> setAge(age-1)}/>

//       <TextInput placeholder='Enter your name' onChangeText={handleText} />


//     </View>

//   );
// }


// function App(): JSX.Element {

//   const logo = {
//     uri:"https://reactnative.dev/img/tiny_logo.png",
//     width:60,
//     height:60,
//   }

//   return(
//     <ScrollView>
//       <Text>Hello from scroll view</Text>
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Text>one</Text>
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Text>two</Text>

//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Text>last one</Text>

//       <Image source={logo} />

//     </ScrollView>
//   )
// }


function App(): JSX.Element {
  return(
<FlatList
   data={[
    {key:'ESRAA'},
    {key:'Deena'},
    {key:'Sanaa'},
    {key:'Tasneem'},
    {key:'Waed'},
    {key:'Tassneem'},
    {key:'Tasaneem'},
    {key:'Tasnesem'},
    {key:'Tasaneem'},
    {key:'Tasneem'},
    {key:'ss'},
    {key:'Tasssneem'},
    {key:'Tasnaeem'},
    {key:'Tasnexxem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasnewwem'},
    {key:'Tasneqqem'},
   ]}

   renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
  
/>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
