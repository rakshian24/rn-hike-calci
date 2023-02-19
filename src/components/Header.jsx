import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../common/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    paddingTop: 12,
    paddingLeft: 14,
    paddingBottom: 12,
    backgroundColor: colors.white,
    shadowOffset: { width: -12, height: 7 },
    shadowColor: '#171717',
    shadowOpacity: 0.75,
    shadowRadius: 4,
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "500",
  }
})