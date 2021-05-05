/* eslint-disable object-curly-newline */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

import DisplayProjects from './DisplayProjects';
import DisplayTasks from './DisplayTasks';
import FireBaseContext from '../context/firebase/firebaseContext';
import AuthContext from '../context/auth/authContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
});

const Home = () => {
  const authContext = useContext(AuthContext);
  const { logout, userName } = authContext;
  const firebaseContext = useContext(FireBaseContext);
  const { projects, getProjects, tasks, getTasks } = firebaseContext;

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{` Welcome,${'\n'} ${userName}`}</Text>
      <DisplayTasks title="Recent tasks..." items={tasks} />
      <DisplayProjects title="Your projects" items={projects} />
      <Button title="logout" onPress={() => logout()} />
    </ScrollView>
  );
};

export default Home;
