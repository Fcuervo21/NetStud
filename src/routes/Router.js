import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { Loading } from '../components/Loading';
import { useAuth } from '../contexts/Auth';


export const Router = () => {
    const { authData, loading } = useAuth();
 
    if (loading) {
        return <Loading />
    };
    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};