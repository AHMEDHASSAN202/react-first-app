export const Reducer = (state, action) => {
    switch (action.TYPE) {
        case "UPDATE_TITLE":
            return { title: action.payload }
        default:
            return state;
    }
}