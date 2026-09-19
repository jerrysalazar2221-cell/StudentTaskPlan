
// STUDENT TASK PLAN MAIN APP

import { useState } from 'react';
import {ScrollView,Text,View,Pressable,} from 'react-native';

import AddTask from './screens/AddTask';
import EditTask from './screens/EditTask';
import TaskCard from './components/TaskCard';
import styles from './styles/AppStyle';


// MAIN APP COMPONENT

export default function App() {

  // ==========================================
  // APP STATES
  // ==========================================

  const [screen, setScreen] = useState('home');

  const [tasks, setTasks] = useState([]);

  const [selectedTask, setSelectedTask] = useState(null);


  // ==========================================
  // TASK SUMMARY
  // ==========================================

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;


  // ==========================================
  // ADD TASK
  // ==========================================

  const addTask = (newTask) => {

    setTasks([
      ...tasks,
      {
        ...newTask,
        completed: false,
      },
    ]);

    setScreen('home');
  };


  // ==========================================
  // UPDATE TASK
  // ==========================================

  const updateTask = (updatedTask) => {

    const updatedTasks = tasks.map(
      (task) =>
        task === selectedTask
          ? updatedTask
          : task
    );

    setTasks(updatedTasks);

    setSelectedTask(null);

    setScreen('home');
  };


  // ==========================================
  // COMPLETE / PENDING TASK
  // ==========================================

  const toggleTask = (index) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };


  // ==========================================
  // DELETE TASK
  // ==========================================

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, taskIndex) =>
        taskIndex !== index
    );

    setTasks(updatedTasks);
  };


  // ==========================================
  // ADD SCREEN
  // ==========================================

  if (screen === 'add') {

    return (
      <AddTask
        setScreen={setScreen}
        addTask={addTask}
      />
    );
  }


  // ==========================================
  // EDIT SCREEN
  // ==========================================

  if (
    screen === 'edit' &&
    selectedTask
  ) {

    return (
      <EditTask
        setScreen={setScreen}
        task={selectedTask}
        updateTask={updateTask}
      />
    );
  }


  // ==========================================
  // HOME SCREEN
  // ==========================================

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >

      {/* Header */}

      <Text style={styles.smallTitle}>
        STUDENT PLANNER
      </Text>

      <Text style={styles.title}>
        StudentTaskPlan
      </Text>

      <Text style={styles.subtitle}>
        Organize your assignments with ease.
      </Text>


      {/* Add Assignment Button */}

      <Pressable
        style={styles.addButton}
        onPress={() => setScreen('add')}
      >
        <Text style={styles.addButtonText}>
          + Add Assignment
        </Text>
      </Pressable>


      {/* Task Summary */}

      <View style={styles.summaryCard}>

        <Text style={styles.sectionTitle}>
          Task Summary
        </Text>

        <View style={styles.summaryRow}>

          {/* Total */}

          <View style={styles.summaryBox}>

            <Text style={styles.summaryNumber}>
              {totalTasks}
            </Text>

            <Text style={styles.summaryLabel}>
              Total
            </Text>

          </View>


          {/* Completed */}

          <View style={styles.summaryBox}>

            <Text style={styles.summaryNumber}>
              {completedTasks}
            </Text>

            <Text style={styles.summaryLabel}>
              Completed
            </Text>

          </View>


          {/* Pending */}

          <View style={styles.summaryBox}>

            <Text style={styles.summaryNumber}>
              {pendingTasks}
            </Text>

            <Text style={styles.summaryLabel}>
              Pending
            </Text>

          </View>

        </View>

      </View>


      {/* Assignments */}

      <View style={styles.tasksCard}>

        <Text style={styles.sectionTitle}>
          My Assignments
        </Text>


        {/* Empty State */}

        {tasks.length === 0 ? (

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>
              📚
            </Text>

            <Text style={styles.emptyTitle}>
              No assignments yet
            </Text>

            <Text style={styles.emptyText}>
              Add your first assignment to get started.
            </Text>

          </View>

        ) : (

          // Display all tasks
          tasks.map((task, index) => (

            <TaskCard
              key={index}
              task={task}
              index={index}
              toggleTask={toggleTask}
              setSelectedTask={setSelectedTask}
              setScreen={setScreen}
              deleteTask={deleteTask}
            />

          ))

        )}

      </View>

    </ScrollView>
  );
}