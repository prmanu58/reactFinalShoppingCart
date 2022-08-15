import { createContext, useReducer } from 'react';

export const CartContext = createContext({
    items: [],
    finalTotal: 0,
    deducted: 0,
    addItem: (item) => { },
    changeQuantity: (itemId, ) => { },
    removeAll: () => { },
})

function cartReducer(state, action) {
    let finalTotal = state.finalTotal;
    let deducted = state.deducted;
    let newItems = [];

    switch (action.type) {
        case 'ADD':
            const itemId = action.payload.itemId;

            const itemExists = state.items.some((item) => {
                return item.itemId === itemId;
            });

            if (!itemExists) {
                newItems = [...state.items, action.payload];
                finalTotal = finalTotal + action.payload.price;
            }
            else {
                newItems = state.items.map((item) => {
                    if (item.itemId === itemId) {
                        const newItem = {
                            ...item,
                            quantity: item.quantity + 1,
                            total: item.total + item.price
                        };

                        finalTotal = finalTotal + item.price;
                        return newItem;
                    }

                    return item;
                });
            }

            return getFinalState(finalTotal, deducted, newItems);

        case 'CHANGE_QTY':
            newItems = state.items.map((item) => {
                if (item.itemId === action.payload.itemId) {
                    let newItem
                    if(action.payload.change == "INC"){
                        newItem = {
                            ...item,
                            quantity: item.quantity + 1,
                            total: item.total + item.price
                        };
    
                        finalTotal = finalTotal + item.price;
                    }else{
                        newItem = {
                            ...item,
                            quantity: item.quantity - 1,
                            total: item.total - item.price
                        };
    
                        finalTotal = finalTotal - item.price;
                    }
                    
                    return newItem
                }
                else {
                    return item;
                }
            });

            return getFinalState(finalTotal, deducted, newItems);

        case 'REMOVE_ALL':
            return {
                items: [],
                finalTotal: 0,
                deducted: 0,
            };

        default:
            return state;

    }
}

const getFinalState = (finalTotal, deducted, newItems) => {
    if (finalTotal > 80 && finalTotal < 100) {
        deducted = finalTotal * 15 / 100;
    } else if (finalTotal >= 100) {
        deducted = finalTotal * 20 / 100;
    }

    return {
        items: newItems,
        finalTotal: finalTotal - deducted,
        deducted: deducted
    }
}

function CartContextProvider({ children }) {
    const initialState = {
        items: [],
        finalTotal: 0,
        deducted: 0,
    };

    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    function addItem(item) {
        dispatch({ type: 'ADD', payload: item });
    }

    function changeQuantity(itemId, change) {
        console.log(itemId, change)
        dispatch({ type: 'CHANGE_QTY', payload: {itemId, change} });
    }

    function removeAll() {
        dispatch({ type: 'REMOVE_ALL' });
    }

    const value = {
        items: cartState.items,
        finalTotal: cartState.finalTotal,
        deducted: cartState.deducted,
        addItem: addItem,
        changeQuantity: changeQuantity,
        removeAll: removeAll,
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider; 