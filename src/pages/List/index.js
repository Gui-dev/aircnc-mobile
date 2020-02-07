import React, { useState, useEffect } from 'react'
import { Alert, AsyncStorage, View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import socketIO from 'socket.io-client'

import styles from './style'
import logo from './../../assets/logo.png'

import SpotList from './../../components/SpotList'

function List() {

  const [ techs, setTechs ] = useState( [] )

  useEffect( () => {
    AsyncStorage.getItem( 'user' )
      .then( user_id => {
        const socket = socketIO( 'http://192.168.0.103:3333', {
          query: { user_id }
        } )

        socket.on( 'booking_response', booking => {
          Alert.alert( 
            `Sua reserva em ${booking.spot.company} em ${booking.date} 
              foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}` 
          )
        } )
      } )
  }, [] )

  useEffect( () => {
    AsyncStorage.getItem( 'techs' )
      .then( storagedTechs => {
        const techsArray = storagedTechs.split( ',' ).map( tech => tech.trim() )
        setTechs( techsArray )
      } )
  }, [] )

  return (
    <SafeAreaView style={ styles.container }>
      <Image source={ logo } style={ styles.logo }/>
      <ScrollView>
        { techs.map( ( tech, index ) => <SpotList key={ index } tech={ tech } /> ) }
      </ScrollView>
    </SafeAreaView>
  )
}

export default List