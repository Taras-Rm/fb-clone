const SET_USER = 'SET_USER';
const SET_POSTS = 'SET_POSTS';

let initialState = {
    user: null,
    posts: []
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user
            }  
        }
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }  
        }
        default: {
            return state;
        }
       
    }
}

// actions

export const setUser = (user) => {
    return {
        type: SET_USER,
        user: user
    }
}
export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts: posts
    }
}


export default appReducer;