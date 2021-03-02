import Axios from 'axios'

export const getData = () => {
    return async (dispatch) => {
        try {
            console.log('getdata kepanggil')
            
            const res = await Axios.get('https://api.jsonbin.io/b/603deef49342196a6a6b6e4d',
            {
                headers:
                {
                    'secret-key': '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS'
                }
            })

            console.log(res.data)

            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}