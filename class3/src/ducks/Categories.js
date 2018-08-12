const SELECT = 'select/category'


export const selectCategory = payload => ({
    type: SELECT,
    payload,
}) 


const initialState= {
    data : [
        {id: 1, name: 'Defecto', selected: true},               
        {id: 2, name: 'Deportes', selected: false},
        {id: 3, name: 'Tecnologia', selected: false},

    ],
}

export default function reducer(state= initialState, action){
    switch (action.type) {
        case SELECT : {
            return{
                ...state,
                data: state.data.map(x => ({
                ...x,
                selected : x.id === action.payload,
            }))

            }
        }
            
        default:
            return state
    }

}