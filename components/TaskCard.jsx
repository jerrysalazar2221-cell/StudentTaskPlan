
// TASK CARD COMPONENT
import { Text, View, Pressable } from 'react-native';
import { useTasks } from '../context/TaskContext';
import styles from './TaskCardStyle';

// TASK CARD
export default function TaskCard({ task, onEdit }) {

  // GET SHARED FUNCTIONS FROM CONTEXT API
  const { toggleTask, deleteTask } = useTasks();

  return (
    <View style={styles.taskCard}>

      {/* TASK HEADER */}
      <View style={styles.taskHeader}>

        <Text style={styles.taskTitle}>
          {task.assignment}
        </Text>

        {/* TASK STATUS */}
        <View
          style={
            task.completed
              ? styles.completedBadge
              : styles.pendingBadge
          }
        >
          <Text
            style={
              task.completed
                ? styles.completedBadgeText
                : styles.pendingBadgeText
            }
          >
            {task.completed ? 'Completed' : 'Pending'}
          </Text>
        </View>

      </View>

      {/* SUBJECT */}
      <Text style={styles.taskInfo}>
        {task.subject}
      </Text>

      {/* DEADLINE */}
      <Text style={styles.taskInfo}>
        {task.deadline}
      </Text>

      {/* COMPLETE / PENDING BUTTON */}
      <Pressable
        style={styles.completeButton}
        onPress={() => toggleTask(task.id)}
      >
        <Text style={styles.buttonText}>
          {task.completed
            ? 'Mark as Pending'
            : 'Mark Complete'}
        </Text>
      </Pressable>

      {/* EDIT BUTTON */}
      <Pressable
        style={styles.editButton}
        onPress={() => onEdit(task)}
      >
        <Text style={styles.buttonText}>
          Edit Assignment
        </Text>
      </Pressable>

      {/* DELETE BUTTON */}
      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={styles.buttonText}>
          Delete Assignment
        </Text>
      </Pressable>

    </View>
  );
}
