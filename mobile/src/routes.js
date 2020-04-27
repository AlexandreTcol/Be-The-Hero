import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import IcidentsScreen from './screens/Incidents'
import DetailScreen from './screens/Detail'


export default function Routes() {

    function Incidents() {
        return (
            <IcidentsScreen />
        )
    }

    function Detail() {
        return (
            <DetailScreen />
        )
    }

    const AppStack = createStackNavigator()
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Incidents" component={Incidents}/>
            <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
