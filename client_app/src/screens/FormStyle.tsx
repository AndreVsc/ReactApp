import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logoContainerForm: {
    padding: 5,
    backgroundColor: 'white',
    justifyContent:'flex-end'
  },
  buttonContainerForm: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainerForm: {
    flex: 1,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});