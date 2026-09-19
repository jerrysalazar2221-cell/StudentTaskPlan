// ==========================================
// EDIT TASK SCREEN
// ==========================================

import { useState } from 'react';

import {
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './EditTaskStyle';


// ==========================================
// EDIT TASK COMPONENT
// ==========================================

export default function EditTask({
  setScreen,
  task,
  updateTask,
}) {

  // ==========================================
  // FORM STATES
  // ==========================================

  const [assignment, setAssignment] =
    useState(task.assignment);

  const [subject, setSubject] =
    useState(task.subject);

  const [deadline, setDeadline] =
    useState(task.deadline);

  const [error, setError] = useState('');


  // ==========================================
  // UPDATE TASK
  // ==========================================

  const handleUpdate = () => {

    // Check if any field is empty
    if (
      assignment.trim() === '' ||
      subject.trim() === '' ||
      deadline.trim() === ''
    ) {

      setError('Please fill in all fields.');

      return;
    }


    // Remove error message
    setError('');


    // Send updated task back to App.js
    updateTask({

      ...task,

      assignment: assignment,

      subject: subject,

      deadline: deadline,

    });

  };


  // ==========================================
  // SCREEN UI
  // ==========================================

  return (

    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >

      {/* Page Header */}

      <Text style={styles.smallTitle}>
        STUDENT PLANNER
      </Text>

      <Text style={styles.title}>
        Edit Assignment
      </Text>

      <Text style={styles.subtitle}>
        Update your assignment details.
      </Text>


      {/* Edit Form */}

      <View style={styles.formCard}>

        {/* Assignment Name */}

        <Text style={styles.label}>
          Assignment Name
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Assignment name"
          placeholderTextColor="#9AA7B5"
          value={assignment}
          onChangeText={(text) => {

            setAssignment(text);

            setError('');

          }}
        />


        {/* Subject */}

        <Text style={styles.label}>
          Subject
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Subject"
          placeholderTextColor="#9AA7B5"
          value={subject}
          onChangeText={(text) => {

            setSubject(text);

            setError('');

          }}
        />


        {/* Deadline */}

        <Text style={styles.label}>
          Deadline
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Deadline"
          placeholderTextColor="#9AA7B5"
          value={deadline}
          onChangeText={(text) => {

            setDeadline(text);

            setError('');

          }}
        />


        {/* Validation Error */}

        {error !== '' && (

          <Text style={styles.errorText}>
            ⚠️ {error}
          </Text>

        )}


        {/* Update Button */}

        <Pressable
          style={styles.updateButton}
          onPress={handleUpdate}
        >

          <Text style={styles.buttonText}>
            Update Assignment
          </Text>

        </Pressable>


        {/* Back Button */}

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