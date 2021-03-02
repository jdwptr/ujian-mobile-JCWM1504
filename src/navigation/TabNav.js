import React from 'react'

// NOTE import stack disini
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// NOTE import screen
import HomeScreen from '../screens/HomeScreen'
import LiveScreen from '../screens/LiveScreen'

const TabNav = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Live" component={LiveScreen}/>
        </Tab.Navigator>
    )
}

export default TabNav