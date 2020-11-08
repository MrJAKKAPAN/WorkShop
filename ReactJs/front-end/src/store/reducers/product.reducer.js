import { HTTP_PRODUCT_FETCHING, HTTP_PRODUCT_SUCCESS, HTTP_PRODUCT_FAILED} from "../../constants"

const initialState = { 
    result:null , 
    isFetching: null, 
    isError: false 
}

export default (state = initialState, {type, payload }) => {
    switch (type) {
        case HTTP_PRODUCT_FETCHING:
            return {...state, result:null, isFetching:true, isError:false}
        case HTTP_PRODUCT_SUCCESS:
            return {...state, result:payload, isFetching:false, isError:false}
        case HTTP_PRODUCT_FAILED:
            return {...state, result:null, isFetching:false, isError:true}

        default: 
          return state;
    }
}