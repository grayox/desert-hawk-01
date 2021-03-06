import axios from 'axios/index';

export const GET_USER_DATA = '[CHAT PANEL] GET USER DATA';

export function getUserData()
{
    const request = axios.get('/api/chat-panel/user');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_USER_DATA,
                payload: response.data
            })
        );
}
