// TASK CARD STYLES
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // ==========================================
  // CARD
  // ==========================================

  taskCard: {
    backgroundColor: '#f8f4f6',
    borderWidth: 1,
    borderColor: '#eceef0',
    borderRadius: 14,
    padding: 16,
    marginTop: 15,
  },


  // ==========================================
  // TASK HEADER
  // ==========================================

  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },


  // ASSIGNMENT NAME
  //
  // task.assignment from TaskCard.jsx
  // displays the assignment name entered
  // by the user.
  //
  // Example output:
  // Mathematics Activity

  taskTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginRight: 10,
  },


  // ==========================================
  // STATUS BADGES
  // ==========================================

  // PENDING STATUS

  pendingBadge: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },


  // COMPLETED STATUS

  completedBadge: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },


  // PENDING TEXT

  pendingBadgeText: {
    color: '#1565C0',
    fontSize: 11,
    fontWeight: 'bold',
  },


  // COMPLETED TEXT

  completedBadgeText: {
    color: '#2E7D32',
    fontSize: 11,
    fontWeight: 'bold',
  },


  // ==========================================
  // TASK INFORMATION
  // ==========================================

  // This displays:
  // 1. Subject
  // 2. Deadline

  taskInfo: {
    fontSize: 14,
    color: '#475569',
    marginTop: 10,
  },


  // ==========================================
  // COMPLETE / PENDING BUTTON
  // ==========================================

  completeButton: {
    backgroundColor: '#1565C0',
    padding: 11,
    borderRadius: 9,
    marginTop: 15,
    alignItems: 'center',
  },


  // ==========================================
  // EDIT BUTTON
  // ==========================================

  editButton: {
    backgroundColor: '#F9A825',
    padding: 11,
    borderRadius: 9,
    marginTop: 8,
    alignItems: 'center',
  },


  // ==========================================
  // DELETE BUTTON
  // ==========================================

  deleteButton: {
    backgroundColor: '#D32F2F',
    padding: 11,
    borderRadius: 9,
    marginTop: 8,
    alignItems: 'center',
  },


  // ==========================================
  // BUTTON TEXT
  // ==========================================

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

});

export default styles;