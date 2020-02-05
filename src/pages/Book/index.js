import React, { useState } from 'react'
import { Alert, AsyncStorage, View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import api from './../../services/api'

import styles from './style'

function Book( { navigation } ) {

  const [ date, setDate ] = useState( '' )
  const id = navigation.getParam( 'id' )

  const handleSubmit = async () => {
    const user_id = await AsyncStorage.getItem( 'user' )
    await api.post( `/spots/${id}/bookings`, { date }, {
      headers: { user_id }
    } )

    Alert.alert( 'Solicitação de reserva enviada' )
    navigation.navigate( 'List' )
  }

  const handleCancel = () => {
    navigation.navigate( 'List' )
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <Text style={ styles.label }>
          DATA DE INTERESSE <Text style={styles.labelInfo}>*</Text>
        </Text>
        <TextInput 
          style={ styles.input }
          placeholder='Qual data você quer reservar'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={ false }
          value={ date }
          onChangeText={ setDate }
        />

        <TouchableOpacity 
          style={ styles.button }
          onPress={ handleSubmit }
        >
          <Text style={ styles.buttonText }>Solicitar Reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ [ styles.button, styles.cancelButton ] }
          onPress={ handleCancel }
        >
          <Text style={ styles.buttonText }>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Book