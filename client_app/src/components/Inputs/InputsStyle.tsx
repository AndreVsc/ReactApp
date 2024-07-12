import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:40,
    gap:20,
  },
  inputGroup: {
    marginBottom: 20,
    marginTop:20,
    gap:5,
  },
  label: {
    fontWeight:'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  inputObs: {
    fontSize:14,
    height: 90, 
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, 
    overflow: 'hidden',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  tableHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'normal', 
    paddingVertical: 4,
  },
  tableHeaderEmpty: {
    flex: 1,
  },
  tableHeaderSmall: {
    fontSize: 14,
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  termsText: {
    fontSize: 14,
    marginLeft: 10,
  },
});
