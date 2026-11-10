
// HOME SCREEN
import { View, Text, Pressable, FlatList } from 'react-native';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import styles from '../styles/AppStyle';

// HOME SCREEN COMPONENT
export default function HomeScreen({ navigation }) {

  // GET SHARED TASK DATA
  const { tasks } = useTasks();

  // TASK SUMMARY
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <FlatList
      style={styles.scroll}
      contentContainerStyle={styles.container}

      // DATA SOURCE
      data={tasks}

      // DISPLAY EACH TASK
      renderItem={({ item }) => (
        <TaskCard
          task={item}
          onEdit={(selectedTask) =>
            navigation.navigate('EditTask', {
              task: selectedTask,
            })
          }
        />
      )}

      // UNIQUE KEY
      keyExtractor={(item) => item.id.toString()}

      // HEADER
      ListHeaderComponent={
        <View>

          <Text style={styles.smallTitle}>
            STUDENT PLANNER
          </Text>

          <Text style={styles.title}>
            StudentTaskPlan
          </Text>

          <Text style={styles.subtitle}>
            Organize your assignments with ease.
          </Text>

          {/* ADD ASSIGNMENT BUTTON */}
          <Pressable
            style={styles.addButton}
            onPress={() => navigation.navigate('AddTask')}
          >
            <Text style={styles.addButtonText}>
              + Add Assignment
            </Text>
          </Pressable>

          {/* TASK SUMMARY */}
          <View style={styles.summaryCard}>

            <Text style={styles.sectionTitle}>
              Task Summary
            </Text>

            <View style={styles.summaryRow}>

              <View style={styles.summaryBox}>
                <Text style={styles.summaryNumber}>
                  {totalTasks}
                </Text>
                <Text style={styles.summaryLabel}>
                  Total
                </Text>
              </View>

              <View style={styles.summaryBox}>
                <Text style={styles.summaryNumber}>
                  {completedTasks}
                </Text>
                <Text style={styles.summaryLabel}>
                  Completed
                </Text>
              </View>

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

          {/* ASSIGNMENTS HEADER */}
          <View style={styles.tasksCard}>
            <Text style={styles.sectionTitle}>
              My Assignments
            </Text>

            {tasks.length === 0 && (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>
                  No assignments yet
                </Text>

                <Text style={styles.emptyText}>
                  Add your first assignment to get started.
                </Text>
              </View>
            )}
          </View>

        </View>
      }

    />
  );
}
