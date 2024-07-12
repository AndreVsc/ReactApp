import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 20,
    minWidth:350,
    borderRadius: 5,
  },
  default: {
    backgroundColor: '#ddd',
  },
  concluido: {
    backgroundColor: '#bfffbf',
    borderColor:'#4d4',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textNormal: {
    fontWeight: 'normal',
  },
});
