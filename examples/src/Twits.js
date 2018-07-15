const ADD_TWIT = 'twit/add'

const initialState = {
    data: [],
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case ADD_TWIT:{
            return{
                ...state,
                data: state.data.concat(action.payload)
            }
        }
    }
}