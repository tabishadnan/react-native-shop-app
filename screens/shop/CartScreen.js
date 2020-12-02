import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import GridCartItemComponent from '../../components/GridCartItemComponent';
import Moment from 'moment';

const CartScreen = ({ navigation }) => {

    const cartItemInfo = useSelector(state => state.cartreducer);

    const Items = cartItemInfo.items;

    const totalAmount = cartItemInfo.totalAmount;

    const orderDate = Moment().format("MMM / Do / YY");

    const dispatch = useDispatch();

    return (
        <View>
            {/* Show Total Amount */}
            <View style={styles.container}>
                {Object.keys(cartItemInfo.items).length > 0 ?
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontWeight: 'bold' }}>Total: </Text>
                            <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>${totalAmount}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("Order", {totalAmount : totalAmount, orderDate : orderDate});
                                dispatch({type:"EMPTY_ITEM"});
                                dispatch({type:"ADD_ORDER", order : Items, totalAmount : totalAmount,});
                                
                            }}>
                                <Text style={{ color: "#ff9800", fontWeight: 'bold' }}>Order Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <Text>There are no more items in your cart</Text>}
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
        padding: 20,
        borderColor: '#9e9e9e54',
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#ffffff",
    }
});

export default CartScreen;