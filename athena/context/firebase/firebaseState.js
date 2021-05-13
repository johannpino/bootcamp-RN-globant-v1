/* eslint-disable react/destructuring-assignment */

import React, { useEffect, useReducer } from 'react';
import firestore from '@react-native-firebase/firestore';
import PropTypes from 'prop-types';
import { addDocument } from '../../utils/firebase';
import {
  SET_PROJECTS,
  SET_TASKS,
  SET_INITIALIZING,
  SET_USER,
  SET_MESSAGES,
} from '../../types';
import FireBaseReducer from './firebaseReducer';
import FireBaseContext from './firebaseContext';

const FirebaseState = (props) => {
  const initialState = {
    projects: [],
    user: {},
    tasks: [],
    messages: [],
    initializing: true,
  };
  const [state, dispatch] = useReducer(FireBaseReducer, initialState);

  // CRUD
  const setProjects = async (payload) => {
    dispatch({
      payload,
      type: SET_PROJECTS,
    });
  };

  const addProject = (project) => {
    addDocument('projects', project);
  };

  const addTask = (task) => {
    addDocument('tasks', task);
  };

  const addMessage = (message) => {
    addDocument('messages', message);
  };

  const setTasks = (tasks) => {
    dispatch({
      payload: tasks,
      type: SET_TASKS,
    });
  };

  const setUser = (user) => {
    dispatch({
      payload: user,
      type: SET_USER,
    });
  };

  const setMessages = (messages) => {
    dispatch({
      payload: messages,
      type: SET_MESSAGES,
    });
  };

  const setInitializing = (bool) => {
    dispatch({
      type: SET_INITIALIZING,
      payload: bool,
    });
  };

  // Observer
  useEffect(() => {
    const subscriber = firestore()
      .collection('projects')
      .orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        const projects = [];

        querySnapshot.forEach((documentSnapshot) => {
          projects.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProjects(projects);
      });

    // Unsubscribe
    return () => subscriber();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('tasks')
      .orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        const tasks = [];

        querySnapshot.forEach((documentSnapshot) => {
          tasks.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setTasks(tasks);
      });

    // Unsubscribe
    return () => subscriber();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection('messages')
      .orderBy('date', 'asc')
      .onSnapshot((querySnapshot) => {
        const messages = [];

        querySnapshot.forEach((documentSnapshot) => {
          messages.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setMessages(messages);
      });

    // Unsubscribe
    return () => subscriber();
  }, []);

  return (
    <FireBaseContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        initializing: state.initializing,
        user: state.user,
        messages: state.messages,
        setUser,
        setInitializing,
        addProject,
        addTask,
        addMessage,
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};

FirebaseState.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default FirebaseState;
