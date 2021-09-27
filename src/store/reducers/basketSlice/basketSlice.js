import { createSlice } from "@reduxjs/toolkit"


const loggedUser = localStorage.getItem("LoggedinUser");
const userBasket = localStorage.getItem(loggedUser);
const initialState = {
    user: loggedUser ? loggedUser : null,
    basket: userBasket ? userBasket.basket : [],
    total: userBasket ? userBasket.total : 0,
    qty: userBasket ? userBasket.qty : 0,
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("LoggedinUser", JSON.stringify(state.user))
        },
        userLogout: (state, action) => {
            state.user = null;
            localStorage.setItem("LoggedinUser", JSON.stringify(state.user))
        },
        addToBasket: (state, action) => {
            let userbasket = { ...action.payload, qty: 1 };
            if (state.basket.length > 0) {
                if (state.basket.some(item => item.id === userbasket.id)) {
                    state.basket.map(item => {
                        if (item.id === userbasket.id) {
                            item.qty++;
                        }
                        return item;
                    })
                    state.qty++;
                } else {
                    state.basket.push(userbasket);
                    state.qty++;
                }
            } else {
                state.basket.push(userbasket)
                state.qty++;
            }
            state.total = state.basket.reduce((total, item) => total + item.price * item.qty, 0);
            localStorage.setItem(state.user, JSON.stringify(state))

        },
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload.id);
            state.total = state.basket.reduce((total, item) => total + item.price, 0);
            localStorage.setItem(state.user, JSON.stringify(state))

        }
    }
})

export const { addToBasket, userLogin, userLogout, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
