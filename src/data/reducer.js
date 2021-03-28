const initialState = {
    filters: {
        description: '',
        location: '',
        type: '',
    },
    count: 15,
    loading: null,
    content: {},
    loadingList: null,
    jobs: [],
    page: 1,
    darkThemeEnabled: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTERS":
            return {
                ...state,
                filters: action.payload,
            };
        case "SHOW_MORE_JOBS":
            return {
                ...state,
                count: state.count + 15,
            };
        case "JOB_GET_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "JOB_GET_SUCCESS":
            return {
                ...state,
                content: action.payload,
                loading: false,
            };

        case "JOB_GET_FAILURE":
            return {
                ...state,
                content: {},
                loading: false,
            };
        case "JOBSLIST_GET_REQUEST":
            return {
                ...state,
                loadingList: true,
            };
        case "JOBSLIST_GET_SUCCESS":
            return {
                ...state,
                jobs: [...state.jobs, ...action.payload],
                loadingList: false,
                page: action.payload.length >= 50 ? state.page + 1 : state.page,
            };

        case "JOBSLIST_GET_FAILURE":
            return {
                ...state,
                jobs: [],
                loadingList: false,
            };
        case "CLEAR_JOBS_LIST":
            return {
                ...state,
                jobs: [],
                page: 1,
            };
        case "TOGGLE_DARKTHEME":
            return {
                ...state,
                darkThemeEnabled: !state.darkThemeEnabled,
            };
        default:
            return state;
    }
};

export default reducer;