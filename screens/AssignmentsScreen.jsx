
// ASSIGNMENTS SCREEN
import { View, Text, Pressable, FlatList } from 'react-native';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import styles from '../styles/AppStyle';

// ASSIGNMENTS COMPONENT
export default function AssignmentsScreen({ navigation }) {

  // GET SHARED TASK DATA
  const { tasks } = useTasks();

  return (
    <FlatList
      style={styles.scroll}
      contentContainerStyle={styles.container}
      data={tasks}

      // DISPLAY EACH ASSIGNMENT
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

      // UNIQUE TASK ID
      keyExtractor={(item) => item.id.toString()}

      // SCREEN HEADER
      ListHeaderComponent={
        <View>

          <Text style={styles.smallTitle}>
            STUDENT PLANNER
          </Text>

          <Text style={styles.title}>
            My Assignments
          </Text>

          <Text style={styles.subtitle}>
            Manage all your school assignments here.
          </Text>

          {/* ADD BUTTON */}
          <Pressable
            style={styles.addButton}
            onPress={() => navigation.navigate('AddTask')}
          >
            <Text style={styles.addButtonText}>
              + Add Assignment
            </Text>
          </Pressable>

        </View>
      }

      // EMPTY LIST MESSAGE
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            No assignments yet
          </Text>

          <Text style={styles.emptyText}>
            Your assignments will appear here.
          </Text>
        </View>
      }
    />
  );
}
