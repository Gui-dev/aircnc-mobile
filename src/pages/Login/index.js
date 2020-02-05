import React, { useState, useEffect } from 'react'
import { 
  AsyncStorage, View, KeyboardAvoidingView, Text, TextInput, Image, TouchableOpacity 
} from 'react-native'
import api from './../../services/api'

import logo from './../../assets/logo.png'
import styles from './style'

function Login( { navigation } ) {

  useEffect( () => {
    AsyncStorage.getItem( 'user' )
      .then( user => {
        if( user ) {
          navigation.navigate( 'List' )
        }
      } )
  }, [] )

  const [ email, setEmail ] = useState( '' )
  const [ techs, setTechs ] = useState( '' )

  const handleSubmit = async () => {

    const { data } = await api.post( '/login', { email } )
    await AsyncStorage.setItem( 'user', data._id )
    await AsyncStorage.setItem( 'techs', techs )

    navigation.navigate( 'List' )
  }

  return (
    <KeyboardAvoidingView 
      style={ styles.container }
      behavior='padding'
    >
      <Image source={ logo } />
      
      <View style={ styles.form }>
        <Text style={ styles.label }>
          E-MAIL <Text style={styles.labelInfo}>*</Text>
        </Text>
        <TextInput 
          style={ styles.input }
          placeholder='Seu E-mail'
          placeholderTextColor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={ false }
          value={ email }
          onChangeText={ setEmail }
        />
        
        <Text style={ styles.label }>
          TECNOLOGIAS <Text style={styles.labelInfo}>*</Text>
        </Text>
        <TextInput 
          style={ styles.input }
          placeholder='Tecnologias de interesse'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={ false }
          value={ techs }
          onChangeText={ setTechs }
        />

        <TouchableOpacity 
          style={ styles.button }
          onPress={ handleSubmit }
        >
          <Text style={ styles.textButton }>Encontrar Spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login