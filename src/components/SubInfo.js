import { View, Text } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const PostTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const PostDescription = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <Text>PostDescription</Text>
      </View>
    )
}
export const PostCreator = () => {
    return (
      <View>
        <Text>PostCreator</Text>
      </View>
    )
};
export const PostType = () => {
    return (
      <View>
        <Text>PostType</Text>
      </View>
    )
};

export const PostDate = () => {
    return (
      <View>
        <Text>PostDate</Text>
      </View>
    )
};