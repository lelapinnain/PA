import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { fetchImageUpload } from '../actions/profileAction'

const ImageUpload = () => {
  const [imageData, setImageData] = useState(null)
  const dispatch = useDispatch()
  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permission denied!')
      return false
    }
    return true
  }

  const selectImage = async () => {
    const permission = await getPermission()
    if (!permission) {
      return
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      const source = { uri: result.assets[0].uri }
      dispatch(fetchImageUpload(source))
      setImageData(source)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.child]} onPress={selectImage}>
        <Image
          style={styles.image}
          source={require('../assets/Uploadphoto.jpg')}
        />
      </TouchableOpacity>

      {imageData && <Image source={imageData} style={[styles.image]} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  child: { margin: 10 },
  image: {
    width: 110,
    height: 110,
    marginTop: 20,
    margin: 5,
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default ImageUpload
