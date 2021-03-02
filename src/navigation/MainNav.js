import React from 'react'

// NOTE import stack disini
import { createStackNavigator } from '@react-navigation/stack'

// NOTE import screen
import HomeScreen from '../screens/HomeScreen'
import LiveScreen from '../screens/LiveScreen'
import LoginScreen from '../screens/LoginScreen'

// NOTE import navigation
import HomeNav from '../navigation/HomeNav'

import { useDispatch, useSelector } from 'react-redux'

import { loginAction } from '../action/userAction'

const MainNav = () => {

    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    const dispatch = useDispatch()

    // React.useEffect(() => {
    //     console.log('use effect is triggered')
    //     dispatch(loginAction())
    // }, [])

    // const Stack = createStackNavigator()

    return (
        // <Stack.Navigator>
        //     <Stack.Screen name="Home" component={HomeScreen}/>
        //     <Stack.Screen name="Live" component={LiveScreen}/>
        // </Stack.Navigator>

        <Stack.Navigator headerMode={false}>
            {username
                ? (
                    <Stack.Screen name="Home" component={HomeNav} />
                )
                : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </>
                )}

        </Stack.Navigator>
    )
}

export default MainNav