import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Body = () => {

  return (
    <View style={styles.bodyContainer}>
      <Text>Body</Text>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 16
  }
})