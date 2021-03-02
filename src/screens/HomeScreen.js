import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header, Card, Divider, Icon } from 'react-native-elements'

const HomeScreen = ({ navigation }) => {
    // const Drawer = createDrawerNavigator
    return (
        <View>
            <Header
                containerStyle={{ backgroundColor: '#f94144' }}
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'bell', type: 'font-awesome', color: '#fff' }}
            />

            <View style={{ backgroundColor: '#f94144' }}>
                <Text style={styles.title}>Coronavirus Live Update</Text>
            </View>

            <View style={styles.view1}>

                <View style={{
                    borderRadius: 30,
                    width: 110,
                    height: 140,
                    backgroundColor: 'yellow',
                }}>
                    <Text style={styles.textContent}>Total</Text>
                    <Divider style={{ backgroundColor: 'white', width: 75, alignSelf: 'center' }} />
                    <Text style={styles.text1}>1233455</Text>
                    <Text style={styles.text2}>+12334</Text>
                </View>

                <View style={{
                    borderRadius: 30,
                    width: 110,
                    height: 140,
                    backgroundColor: '#4ecdc4'
                }}>
                    <Text style={styles.textContent}>Recovered</Text>
                    <Divider style={{ backgroundColor: 'white', width: 75, alignSelf: 'center' }} />
                    <Text style={styles.text1}>1233455</Text>
                    <Text style={styles.text2}>+12334</Text>

                </View>

                <View style={{
                    borderRadius: 30,
                    width: 110,
                    height: 140,
                    backgroundColor: '#9b5de5'
                }}>
                    <Text style={styles.textContent}>Deaths</Text>
                    <Divider style={{ backgroundColor: 'white', width: 75, alignSelf: 'center' }} />
                    <Text style={styles.text1}>1233455</Text>
                    <Text style={styles.text2}>+12334</Text>

                </View>
                {/* <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                </Card> */}
            </View>

            <View>
                <Text style={styles.title1}>Health Tips</Text>
            </View>

            <View style={styles.icon}>
                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    containerStyle={{borderRadius: 10}}
                    // iconStyle={{}}
                />
                <Icon
                    raised
                    name='plus'
                    type='font-awesome'
                    color='#f50'
                />
                <Icon
                    raised
                    name='minus'
                    type='font-awesome'
                    color='#f50'
                />
            </View>

            <View style={styles.icon}>
                <Icon
                    raised
                    name='camera'
                    type='font-awesome'
                    color='#f50'
                />
                <Icon
                    raised
                    name='thermometer-1'
                    type='font-awesome'
                    color='#f50'
                />
                <Icon
                    raised
                    name='calendar-plus-o'
                    type='font-awesome'
                    color='#f50'
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'left',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    title1: {
        textAlign: 'left',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    textContent: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    text1: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'white',
        fontSize: 20
    },
    text2: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'white',
        fontSize: 15
    },
    view1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        height: 300,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f94144',
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})

export default HomeScreen