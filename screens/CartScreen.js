import React, { useContext } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles';
import { CartContext } from '../store/cart-context'
import CartItem from '../components/CartItem';

const CartScreen = (props) => {
    const cartCtx = useContext(CartContext);

    const purchaseHandler = () => {
        cartCtx.removeAll();
    }

    const addQuantityHandler = (itemId) => {
        cartCtx.changeQuantity(itemId, 'INC');
    }
    const reduceQuantityHandler = (itemId) => {
        cartCtx.changeQuantity(itemId, 'DEC');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={purchaseHandler}
            >
                <Text style={styles.buttonText}>Purchase</Text>
            </TouchableOpacity>
            <FlatList
                data={cartCtx.items}
                renderItem={
                    (itemData) => (
                        <CartItem
                            id={itemData.item.itemId}
                            onAddQuantity={() => addQuantityHandler(itemData.item.itemId)}
                            onReduceQuantity={() => reduceQuantityHandler(itemData.item.itemId)}
                            item={itemData.item}
                        />
                    )
                }
            />

            <View style={styles.listItem}>
                <Text>Discount</Text>
                <Text>80 or more: 15%</Text>
                <Text>100 or more: 20%</Text>
            </View>


            <Text>FINAL TOTAL: {cartCtx.finalTotal}</Text>
            <Text>Deducted: {cartCtx.deducted}</Text>
        </View>
    )
}

export default CartScreen