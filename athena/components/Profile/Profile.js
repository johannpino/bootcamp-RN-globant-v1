/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ProfilePicture from './ProfilePicture';
import FireBaseContext from '../../context/firebase/firebaseContext';
import AuthContext from '../../context/auth/authContext';
import {
  getCompletedTasks,
  getUserProjects,
  getUserTasks,
} from '../../utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  email: {
    fontSize: 18,
    color: '#555555',
  },
  editBtn: {
    borderWidth: 2,
    borderColor: '#FFF',
    marginVertical: 20,
    backgroundColor: '#010101',
    borderRadius: 6,
    padding: 12,
  },
  editText: {
    color: 'white',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
  },
  statistics: {
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  number: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    opacity: 0.4,
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
  logoutBtn: {
    margin: '20%',
    borderWidth: 2,
    borderColor: '#FF2626',
    backgroundColor: 'transparent',
    borderRadius: 6,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutBtnText: {
    fontSize: 18,
    color: '#FF2626',
  },
});

const Profile = ({ navigation }) => {
  const firebaseContext = useContext(FireBaseContext);
  const { user, projects, tasks } = firebaseContext;

  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  if (!user) return null;

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.name}>{user.displayName}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Pressable
        style={styles.editBtn}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.editText}>EDITAR PERFIL</Text>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.statistics}>
          <Text style={styles.number}>
            {getUserProjects(projects, user.email).length}
          </Text>
          <Text style={styles.text}>{` PROYECTOS${'\n'}ACTIVOS`}</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.number}>
            {getUserTasks(tasks, user.email).length}
          </Text>
          <Text style={styles.text}>{` TAREAS${'\n'}TOTALES`}</Text>
        </View>
        <View style={styles.statistics}>
          <Text style={styles.number}>
            {getCompletedTasks(getUserTasks(tasks, user.email)).length}
          </Text>
          <Text style={styles.text}>{` TAREAS${'\n'}COMPLETADAS`}</Text>
        </View>
      </View>
      <Pressable style={styles.logoutBtn} onPress={() => logout()}>
        <Text style={styles.logoutBtnText}>CERRAR SESIÓN</Text>
      </Pressable>
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Profile;
