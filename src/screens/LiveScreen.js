import React from 'react'
import { Text, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { Header } from 'react-native-elements'

// NOTE import ini karena butuh connect data ke redux
import { useDispatch, useSelector } from 'react-redux'

// NOTE import action
import { getData } from '../action/dataAction'

const LiveScreen = () => {

    const dispatch = useDispatch()

    const { negara } = useSelector((state) => {
        return {
            negara: state.dataReducer,
        }
    })
    console.log('country nya', negara)

    React.useEffect(() => {
        dispatch(getData())
    }, [])

    const RenderDataTable = () => {
        return (
            negara.Countries.map((item, index) => {
                return (
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Region</DataTable.Title>
                            <DataTable.Title numeric>New Cases</DataTable.Title>
                            <DataTable.Title numeric>Total Cases</DataTable.Title>
                            <DataTable.Title numeric>Recovered</DataTable.Title>
                            <DataTable.Title numeric>Deaths</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>{item[index].country}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Pagination
                            page={1}
                            numberOfPages={19}
                            onPageChange={page => {
                                console.log(page);
                            }}
                            label="1-10 of 190"
                        />
                    </DataTable>
                )
            })
        )
    }

    return (
        <View>
            <Header
                containerStyle={{ backgroundColor: '#f94144' }}
                // leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Live Update', style: { color: '#fff', fontSize: 30, fontWeight: 'bold' } }}
            // rightComponent={{ icon: 'bell', type: 'font-awesome', color: '#fff' }}
            />

            {/* <RenderDataTable /> */}

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Region</DataTable.Title>
                    <DataTable.Title numeric>New Cases</DataTable.Title>
                    <DataTable.Title numeric>Total Cases</DataTable.Title>
                    <DataTable.Title numeric>Recovered</DataTable.Title>
                    <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>ALA Aland Islands</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                    <DataTable.Cell numeric>0</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={1}
                    numberOfPages={19}
                    onPageChange={page => {
                        console.log(page);
                    }}
                    label="1-10 of 190"
                />
            </DataTable>
        </View>
    )
}

export default LiveScreen