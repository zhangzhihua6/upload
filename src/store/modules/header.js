const header = {
    state: {
        show: true,
        downIcon: false,
        Authorization: "",
        id: ""
    },
    mutations: {
        navShow: (state, payload) => {
            state.show = !state.show;
            state.downIcon = !state.downIcon;
            // console.log(state, payload);

        },
        getAuthorization: (state, payload) => {
            state.Authorization = payload;
        },
        getId: (state, payload) => {
            state.id = payload;
        },
    },
    actions: {

    }
}

export default header