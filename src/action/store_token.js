export const updateToken = (access,refresh) => {
    return {
        type:'UPDATE_TOKEN',
        access,
        refresh
    }
}