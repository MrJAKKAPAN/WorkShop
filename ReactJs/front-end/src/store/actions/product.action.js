import { httpClient } from "../../utils/HttpClient";
import {HTTP_PRODUCT_SUCCESS, HTTP_PRODUCT_FETCHING, HTTP_PRODUCT_FAILED, server} from "../../constants";

const setStateProductToSuccess = (payload) => ({
    type:HTTP_PRODUCT_SUCCESS,
    payload: payload
});
const setStateProductToFetching = () => ({
    type:HTTP_PRODUCT_FETCHING,
});
const setStateProductToFailed = () => ({
    type:HTTP_PRODUCT_FAILED,
});

const doGetProducts = (dispatch) => {
    httpClient.get(server.PRODUCT_URL).then(result => {
        dispatch(setStateProductToSuccess(result.data))

    }).catch(error => {
        alert(JSON(error))
        dispatch(setStateProductToFailed())
    }        
    )
} 


export const getProducts = () => {
    return dispatch => {
        dispatch(setStateProductToFetching()); 
        doGetProducts(dispatch);
    }
}
