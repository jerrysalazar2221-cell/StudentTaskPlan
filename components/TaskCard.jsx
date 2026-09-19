
// TASK CARD COMPONENTS PART
import {Text,View,Pressable,} from 'react-native';
import styles from './TaskCardStyle';


//TASKCARD

export default function TaskCard({task,index,toggleTask,
                setSelectedTask,setScreen,deleteTask,}) {
  return (

    <View style={styles.taskCard}>

      {/* Task Header this will see the header*/}

      <View style={styles.taskHeader}>

        <Text style={styles.taskTitle}>
          {task.assignment}
        </Text>


        {/* Task Status */}

        <View
          style={task.completed ? styles.completedBadge: styles.pendingBadge}
        >

          <Text
            style={task.completed? styles.completedBadgeText: styles.pendingBadgeText}
          >

            {task.completed? 'Completed' : 'Pending'}

          </Text>

        </View>

      </View>


      {/* Subject */}

      <Text style={styles.taskInfo}>
        📚 {task.subject}
      </Text>


      {/* Deadline */}

      <Text style={styles.taskInfo}>
        📅 {task.deadline}
      </Text>


      {/* Complete / Pending Button */}

      <Pressable
        style={styles.completeButton}
        onPress={() => toggleTask(index)}
      >

        <Text style={styles.buttonText}>

          {task.completed
            ? 'Mark as Pending'
            : 'Mark Complete'}

        </Text>

      </Pressable>


      {/* Edit Button */}

      <Pressable
        style={styles.editButton}
        onPress={() => {

          setSelectedTask(task);

          setScreen('edit');

        }}
      >

        <Text style={styles.buttonText}>
          Edit Assignment
        </Text>

      </Pressable>


      {/* Delete Button */}

      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteTask(index)}
      >

        <Text style={styles.buttonText}>
          Delete Assignment
        </Text>

      </Pressable>

    </View>
  );
}