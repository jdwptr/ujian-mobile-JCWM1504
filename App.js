import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { View, Text } from 'react-native'

// NOTE import Navgiation
import HomeNav from './src/navigation/HomeNav'
import MainNav from './src/navigation/MainNav'

// NOTE import splashscreen
import SplashScreen from 'react-native-splash-screen'

// NOTE import import untuk redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import allReducers from './src/reducer'

const globalStore = createStore(
  allReducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

const App = () => {
  // React.useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <HomeNav />
      </NavigationContainer>
    </Provider>
  )
}

export default App