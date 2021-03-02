import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

// NOTE import navigation
import TabNav from '../navigation/TabNav'


// NOTE import screen
import AccScreen from '../screens/AccScreen'

const HomeNav = () => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={TabNav}/>
            <Drawer.Screen name="Account" component={AccScreen} onPress/>
        </Drawer.Navigator>
    )
}

export default HomeNav