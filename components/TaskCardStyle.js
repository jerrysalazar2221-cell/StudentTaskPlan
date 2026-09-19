// ==========================================
// TASK CARD STYLES
// ==========================================

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // ==========================================
  // CARD
  // ==========================================

  taskCard: {
    backgroundColor: '#F8FBFF',
    borderWidth: 1,
    borderColor: '#DCE9F5',
    borderRadius: 14,
    padding: 16,
    marginTop: 15,
  },

  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  taskTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12355B',
    marginRight: 10,
  },


  // ==========================================
  // STATUS BADGES
  // ==========================================

  pendingBadge: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  completedBadge: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  pendingBadgeText: {
    color: '#1565C0',
    fontSize: 11,
    fontWeight: 'bold',
  },

  completedBadgeText: {
    color: '#2E7D32',
    fontSize: 11,
    fontWeight: 'bold',
  },


  // ==========================================
  // TASK INFORMATION
  // ==========================================

  taskInfo: {
    fontSize: 14,
    color: '#687585',
    marginTop: 10,
  },


  // ==========================================
  // BUTTONS
  // ==========================================

  completeButton: {
    backgroundColor: '#1565C0',
    padding: 11,
    borderRadius: 9,
    marginTop: 15,
    alignItems: 'center',
  },

  editButton: {
    backgroundColor: '#F9A825',
    padding: 11,
    borderRadius: 9,
    marginTop: 8,
    alignItems: 'center',
  },

  deleteButton: {
    backgroundColor: '#D32F2F',
    padding: 11,
    borderRadius: 9,
    marginTop: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

});

export default styles;