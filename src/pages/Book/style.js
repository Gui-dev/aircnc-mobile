import { StyleSheet } from 'react-native'

const styles = StyleSheet.create( {

  container: {
    margin: 30
  },

  label: {
    fontWeight: "bold",
    color: '#444',
    marginBottom: 8,
    marginTop: 30
  },

  labelInfo: {
    fontWeight: "bold",
    color: '#F99',
  },

  input: {
    height: 44,
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderBottomColor: '#DDD',
  },

  button: {
    height: 42,
    backgroundColor: '#F05A5B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },

  
  cancelButton: {
    backgroundColor: '#CCC',
    marginTop: 10
  },
} )

export default styles