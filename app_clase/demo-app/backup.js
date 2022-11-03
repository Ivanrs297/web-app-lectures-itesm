import React from "react";
import {View, Text, StyleSheet, Button, Alert, Image} from "react-native"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hola mundo </Text>
      <Button
        onPress={() => Alert.alert("Clicked!")}
        title = "Aceptar"
        color = "#FF0000"
      />
      <Image
        style={styles.image}
        source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg"}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {backgroundColor: "#FFF000", flex: 1, justifyContent: "center", alignItems: "center"},
  title: {fontSize: 50, fontWeight: "bold"},
  image: {width: 200, height: 200}
})

export default App;