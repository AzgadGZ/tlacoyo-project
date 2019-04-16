export default {
    state: {
        online: true,
    },
    mutations:{
        setStatus(state, status){
            state.online = status;
        },
    }
}