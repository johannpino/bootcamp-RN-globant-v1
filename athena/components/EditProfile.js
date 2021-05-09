/* eslint-disable implicit-arrow-linebreak */
import React, { useContext, useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProjectsContext from '../context/projects/projectsContext';
import FireBaseContext from '../context/firebase/firebaseContext';
import { capitalizeFirstLetter } from '../utils/helpers';

const styles = StyleSheet.create({
  container: {
    height: 1,
    padding: '5%',
  },
  modalContainer: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    fontSize: 20,
    color: 'white',
  },
  inputView: {
    alignItems: 'flex-start',
    marginHorizontal: 48,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  projectBtn: {
    marginVertical: 20,
    backgroundColor: '#5014FC',
    borderRadius: 6,
    padding: 12,
  },
  projectBtnText: {
    color: 'white',
    fontSize: 18,
  },
  error: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const EditProfile = ({ navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { user } = firebaseContext;

  const [name, setName] = useState('');

  const handlePress = () => {
    if (name.trim() === '') {
      navigation.navigate('Profile');
      return;
    }
    user.updateProfile({
      displayName: name,
    });
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Icon
          style={styles.icon}
          name="close-outline"
          size={52}
          color="#FFFFFF"
        />
      </Pressable>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Editar perfil</Text>
        <View style={styles.inputView}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.input}
            placeholder={user.displayName}
            placeholderTextColor="#484848"
          />
        </View>
        <Pressable style={styles.projectBtn} onPress={() => handlePress()}>
          <Text style={styles.projectBtnText}>ACEPTAR</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
