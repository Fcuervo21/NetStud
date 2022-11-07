import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import LogoHDark from '../assets/logos/logoHDark'
import Search from '../assets/icons/search'
import styles from './styles'
import FocusedStatusBar from './FocusedStatusBar'
import { COLORS } from '../constants/theme'

const HomeHeader = () => {
  return (
    <SafeAreaView>
        <FocusedStatusBar />
        <View style={styles.wrapperSearchBar}>
            <LogoHDark />
            <Search />
        </View>
    </SafeAreaView>
  )
}

export default HomeHeader