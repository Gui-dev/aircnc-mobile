import { StyleSheet } from 'react-native'

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  },

  label: {
    fontWeight: "bold",
    color: '#444',
    marginBottom: 8
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

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  }
} )

export default styles