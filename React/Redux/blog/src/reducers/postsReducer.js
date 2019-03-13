export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;

        default: 
            return state;
    }
    // bad! You can do any of this though
        //return document.querySelector('input')

        // bad
        //return Axios.get('/posts')

        //state[0] = "sam"

        //state.pop()

        //state.push()

    //good
        //return state + action

}