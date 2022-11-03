import React, { useState } from "react";
import {View, Text, StyleSheet, Button, Alert, Image, SafeAreaView, TextInput} from "react-native"
import * as ImagePicker from 'expo-image-picker'

const App = () => {

  // hooks
  const [count, setCount] = useState(0)
  const [text, setText] = useState(null)
  const [number, setNumber] = useState(null)
  const [image, setImage] = useState(null)

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled)
      setImage(result.uri)
  }

  const createAlert = () =>
    Alert.alert(
      `Hello ${text}`,
      `Your number ${number}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log("Canceled"),
          style: "cancel"
        },
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed")
        }
      ]
    )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Counter: {count}</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title = "Increase"
        color = "#FF0000"
      />

      <TextInput
        style={styles.input}
        onChangeText={setText}
        value = {text}
        placeholder = "A string"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value = {number}
        placeholder = "A number"
        keyboardType="numeric"
      />

      <Button 
        title="Select Image"
        onPress={selectImage}
      />

      <View style={styles.imageContainer}>
        {image && <Image source={{uri: image}} style={styles.image} />}
      </View>

      <Button
        title = "Submit"
        onPress={() => createAlert()}
        color="#16D339"
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {backgroundColor: "#EFEFEF", flex: 1, justifyContent: "center", padding: 30},
  title: {fontSize: 50, fontWeight: "bold"},
  image: {width: 200, height: 200, borderRadius: 100},
  input: {height: 40, margin: 15, borderWidth: 1, padding: 10, bordeRadius: 20},
  imageContainer: {margin: 20, alignItems: "center"}
})

export default App;