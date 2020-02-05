import React, { useState, useEffect } from 'react'
import { AsyncStorage, View, Text, Image, SafeAreaView, ScrollView } from 'react-native'

import styles from './style'
import logo from './../../assets/logo.png'

import SpotList from './../../components/SpotList'

function List() {

  const [ techs, setTechs ] = useState( [] )

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