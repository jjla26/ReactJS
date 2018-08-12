const ADD_NEWS = 'news/add'

export const addNews = (categoryId, { value }) => {
    const payload = {
        id : Math.random().toString(36),
        text : value ,
        categoryId,
    }
    return{
        type: ADD_NEWS,
        payload,
    }
}

const initialState = {
    data: [],
}

export default function reducer(state= initialState, action){
        switch (action.type) {
            case ADD_NEWS:{
                return{
                 ...state,
                 data: state.data.concat(action.payload),
                }
            }
                        
            default:
                return state;
        }
    }
