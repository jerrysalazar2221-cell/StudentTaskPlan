import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

  // SCREEN
  scroll: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },

  container: {
    padding: 25,
    paddingTop: 70,
    paddingBottom: 40,
  },
// THIS PART IS THE HEADER

  smallTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1565C0',
    letterSpacing: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#12355B',
    marginTop: 5,
  },

  subtitle: {
    fontSize: 15,
    color: '#687585',
    marginTop: 6,
  },


 
  // THIS ONE IS PAG ADD SA BUTTON
 

  addButton: {
    backgroundColor: '#1565C0',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // SUMMARY
  summaryCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12355B',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  summaryBox: {
    width: '31%',
    backgroundColor: '#F0F6FF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
  },

  summaryLabel: {
    fontSize: 12,
    color: '#687585',
    marginTop: 4,
  },
 //TASK PART
  tasksCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginTop: 20,
  },


  // PAG EMTTY AN CONTAINER
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  emptyIcon: {
    fontSize: 40,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12355B',
    marginTop: 10,
  },

  emptyText: {
    fontSize: 14,
    color: '#687585',
    marginTop: 5,
    textAlign: 'center',
  },

});

export default styles;