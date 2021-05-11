/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { getUserProyects, getUserTasks } from '../utils/helpers';
import DisplayProjects from './DisplayProjects';
import DisplayTasks from './DisplayTasks';
import FireBaseContext from '../context/firebase/firebaseContext';

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
  const firebaseContext = useContext(FireBaseContext);
  const { projects, tasks, user } = firebaseContext;

  return (
    <>
      {user.displayName ? (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>
            {` Bienvenido,${'\n'} ${user.displayName}`}
          </Text>
          <DisplayTasks
            title="Tareas recientes..."
            items={getUserTasks(tasks, user.email)}
          />
          <DisplayProjects
            title="Tus proyectos"
            items={getUserProyects(projects, user.email)}
          />
        </ScrollView>
      ) : (
        <Text style={styles.title}>Loading...</Text> // spiner goes here
      )}
    </>
  );
};

export default Home;
