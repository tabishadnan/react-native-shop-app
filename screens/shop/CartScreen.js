import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import GridCartItemComponent from '../../components/GridCartItemComponent';

const CartScreen = ({ navigation }) => {

    const cartItemInfo = useSelector(state => state.cartreducer);

    const Items = cartItemInfo.items;

    const totalAmount = cartItemInfo.totalAmount;

    const dispatch = useDispatch();

    return (
        <View>
            {/* Show Total Amount */}
            <View style={styles.container}>
                {Object.keys(cartItemInfo.items).length > 0 ?
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', padding: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                            <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>${totalAmount.toFixed(2)}</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={{ backgroundColor: "#ff9800", padding: 7 }}
                                onPress={() => {
                                    dispatch({ type: "EMPTY_ITEM" });
                                    dispatch({ type: "ADD_ORDER", order: Items, totalAmount: totalAmount, });
                                }}>
                                <Text style={{ color: "#FFF", fontWeight: 'bold', }}>Order Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', padding: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                            <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>$0.00</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={{ backgroundColor: "#9E9E9E", padding: 7 }}
                            >
                                <Text style={{ color: "#FFF", fontWeight: 'bold', }}>Order Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>

            {/* GridCartItemComponent */}
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Object.keys(Items)}
                renderItem={({ item }) =>
                    <GridCartItemComponent
                        cartItem={Items}
                        cId={item}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
        padding: 10,
        borderColor: '#9e9e9e54',
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#ffffff",
    }
});

export default CartScreen;