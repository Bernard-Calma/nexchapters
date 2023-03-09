let lastId = 0;

const reducer = (state = [], action) => {
    switch (action.type) {
        case "bugAdded": return [
            ...state,
            {
                description: ++lastId,
                description: action.payload.description,
                resolved:false
            }
        ];
        case "bugRemoved": return state.filter(bug => bug.id !== action.payload.id);
        default: return state;
    }
}

export default reducer