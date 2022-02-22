import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { styles } from '../../styles'
export default function TodoHeader({todos}) {
  return (
    <View style={styles.listHeader}>
        <Text style={styles.listHeadText}>{`${todos.filter(i=>!i.finished).length} not finished todos of ${todos.length}`}</Text>
    </View>
  )
}
