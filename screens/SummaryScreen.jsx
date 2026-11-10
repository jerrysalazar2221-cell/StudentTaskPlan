
// SUMMARY SCREEN
import { View, Text } from 'react-native';
import { useTasks } from '../context/TaskContext';
import styles from '../styles/AppStyle';

// SUMMARY COMPONENT
export default function SummaryScreen() {

  // GET SHARED TASK DATA
  const { tasks } = useTasks();

  // CALCULATE TASK SUMMARY
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <View style={styles.container}>

      {/* PAGE HEADER */}
      <Text style={styles.smallTitle}>
        STUDENT PLANNER
      </Text>

      <Text style={styles.title}>
        Task Summary
      </Text>

      <Text style={styles.subtitle}>
        Track your assignment progress.
      </Text>

      {/* TOTAL TASKS */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryNumber}>
          {totalTasks}
        </Text>

        <Text style={styles.sectionTitle}>
          Total Assignments
        </Text>
      </View>

      {/* COMPLETED TASKS */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryNumber}>
          {completedTasks}
        </Text>

        <Text style={styles.sectionTitle}>
          Completed Assignments
        </Text>
      </View>

      {/* PENDING TASKS */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryNumber}>
          {pendingTasks}
        </Text>

        <Text style={styles.sectionTitle}>
          Pending Assignments
        </Text>
      </View>

    </View>
  );
}
