
// APP NAVIGATOR
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AssignmentsScreen from '../screens/AssignmentsScreen';
import SummaryScreen from '../screens/SummaryScreen';
import AddTask from '../screens/AddTask';
import EditTask from '../screens/EditTask';

// CREATE NAVIGATORS
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// BOTTOM TAB NAVIGATION
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#687585',
      }}
    >

      {/* HOME TAB */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      {/* ASSIGNMENTS TAB */}
      <Tab.Screen
        name="Assignments"
        component={AssignmentsScreen}
      />

      {/* SUMMARY TAB */}
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
      />

    </Tab.Navigator>
  );
}

// MAIN APP NAVIGATOR
export default function AppNavigator() {
  return (
    <Stack.Navigator>

      {/* MAIN TABS */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      {/* ADD SCREEN */}
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ title: 'Add Assignment' }}
      />

      {/* EDIT SCREEN */}
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{ title: 'Edit Assignment' }}
      />

    </Stack.Navigator>
  );
}
