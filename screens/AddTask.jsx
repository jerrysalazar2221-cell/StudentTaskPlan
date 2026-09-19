// ==========================================
// ADD TASK SCREEN
// ==========================================

import { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';

import styles from './AddTaskStyle';


// ==========================================
// ADD TASK COMPONENT
// ==========================================

export default function AddTask({ setScreen, addTask }) {

  // ==========================================
  // FORM STATES
  // ==========================================

  const [assignment, setAssignment] = useState('');
  const [subject, setSubject] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');


  // ==========================================
  // ADD ASSIGNMENT
  // ==========================================

  const handleAddTask = () => {

    if (
      assignment.trim() === '' ||
      subject.trim() === '' ||
      deadline.trim() === ''
    ) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');

    addTask({
      assignment,
      subject,
      deadline,
    });
  };


  // ==========================================
  // SCREEN
  // ==========================================

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >

      <Text style={styles.smallTitle}>
        STUDENT PLANNER
      </Text>

      <Text style={styles.title}>
        Add Assignment
      </Text>

      <Text style={styles.subtitle}>
        Create a new task for your studies.
      </Text>


      {/* FORM */}

      <View style={styles.formCard}>

        <Text style={styles.label}>
          Assignment Name
        </Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Research Paper"
          placeholderTextColor="#9AA7B5"
          value={assignment}
          onChangeText={(text) => {
            setAssignment(text);
            setError('');
          }}
        />


        <Text style={styles.label}>
          Subject
        </Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. IT Research"
          placeholderTextColor="#9AA7B5"
          value={subject}
          onChangeText={(text) => {
            setSubject(text);
            setError('');
          }}
        />


        <Text style={styles.label}>
          Deadline
        </Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. September 30, 2026"
          placeholderTextColor="#9AA7B5"
          value={deadline}
          onChangeText={(text) => {
            setDeadline(text);
            setError('');
          }}
        />


        {/* ERROR */}

        {error !== '' && (
          <Text style={styles.errorText}>
            ⚠️ {error}
          </Text>
        )}


        {/* ADD BUTTON */}

        <Pressable
          style={styles.addButton}
          onPress={handleAddTask}
        >
          <Text style={styles.buttonText}>
            Add Assignment
          </Text>
        </Pressable>


        {/* BACK BUTTON */}

        <Pressable
          style={styles.backButton}
          onPress={() => setScreen('home')}
        >
          <Text style={styles.backButtonText}>
            ← Back to Home
          </Text>
        </Pressable>

      </View>

    </ScrollView>
  );
}