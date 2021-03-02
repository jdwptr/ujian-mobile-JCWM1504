import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

// NOTE import login action
import { loginAction } from '../action'

// NOTE import use dispatch use selector
import { useDispatch, useSelector } from 'react-redux'

const LoginScreen = ({ navigation, route }) => {
    // const [username, setUsername] = React.useState('')
    // const [password, setPassword] = React.useState('')

    // const dispatch = useDispatch()

    // const {name} = useSelector((state) => {
    //     return {
    //         name: state.UserReducer.username
    //     }
    // })

    // const handleLogin = () => {
    //     dispatch(loginAction(username))
    // }

    // React.useEffect(() => {
    //     if (name) navigation.navigate("Feed")
    // }, [name])

    return (
        <View>
            <Text>This is LOGIN SCREEN</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 15 }}
                // onChangeText={setUsername}
                // value={username}
            />

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 15 }}
                // onChangeText={setPassword}
                // value={password}
            />

            <Button title="Login" onPress={handleLogin} />


            <Button title="GO TO DRAWER MAIN NAVIGATION" onPress={() => {
                navigation.navigate("HomeNav")
            }} />
        </View>
    )
}

export default LoginScreen