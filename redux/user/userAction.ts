import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_RESPONSE } from './userType';

export const getUserLoading = () => {
    return ({
        type: GET_USER_LOADING,
    })
}

export const getUserResponse = (data: any) => {
  return ({
    type: GET_USER_RESPONSE,
    payload : data
    })
}

export const getUserError = (errorMessage: string) => {
    return ({
        type: GET_USER_ERROR,
        payload : errorMessage
    })
}

