import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = ({ navigation }) => {

    const cartItemInfo = useSelector(state => state.cartreducer);

    return (
        <View style={styles.container}>
            {cartItemInfo.items.length > 0 ?
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row',}}>
                        <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                        <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>${cartItemInfo.totalAmount}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("All Products")}>
                            <Text style={{ color: "#ff9800", fontWeight: 'bold' }}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <Text>There are no more items in your cart</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
        padding: 20,
        borderColor: '#9e9e9e54',
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#ffffff",
    }
});

export default CartScreen;