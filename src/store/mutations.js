export default () => {
    return {
        updateUserInfo(state, nickName) {
            state.nickName = nickName
        },
        updateCartCount(state, cartCount) {
            state.cartCount += cartCount 
        }
    }
}