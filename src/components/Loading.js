import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="small" color="#0000ff" animating={true} />
        </View>
    );
};