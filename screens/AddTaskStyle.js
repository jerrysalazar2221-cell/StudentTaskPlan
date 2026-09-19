// ==========================================
// ADD TASK STYLES
// ==========================================

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },

  container: {
    padding: 25,
    paddingTop: 70,
    paddingBottom: 40,
  },

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

  formCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginTop: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#12355B',
    marginTop: 5,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#F8FBFF',
    borderWidth: 1,
    borderColor: '#DCE9F5',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: '#12355B',
    marginBottom: 18,
  },

  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: '#1565C0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  backButton: {
    backgroundColor: '#E8EEF5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  backButtonText: {
    color: '#456078',
    fontSize: 15,
    fontWeight: 'bold',
  },

});

export default styles;