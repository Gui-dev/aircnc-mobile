import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import api from './../../services/api'

import styles from './style'

function SpotList( { tech, navigation } ) {

  const [ spots, setSpots ] = useState( [] )

  useEffect( () => {
    loadSpots()
  }, [] )

  const loadSpots = async () => {
    const { data } = await api.get( '/spots', {
      params: { tech }
    } )
    setSpots( data )
  }

  const handleNavigate = ( id ) => {
    navigation.navigate( 'Book', { id } )
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Empresas que usam <Text style={ styles.bold}>{ tech }</Text>
      </Text>

      <FlatList 
        style={ styles.list }
        data={ spots }
        keyExtractor={ spot => spot._id }
        horizontal
        showsHorizontalScrollIndicator={ false }
        renderItem={ ( { item } ) => (
          <View style={ styles.listItem }>
            <Image style={ styles.thumbnail } source={ { uri: item.thumbnail_url } } />
            <Text style={ styles.company }>{ item.company }</Text>
            <Text style={ styles.price }>
              { item.price ? `R$${item.price}/dia` : 'GRATUITO' }
            </Text>
            <TouchableOpacity
              style={ styles.button }
              onPress={ () => handleNavigate( item._id ) }
            >
              <Text style={ styles.buttonText }>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        ) }
      />
    </View>
  )
}

export default withNavigation( SpotList )
