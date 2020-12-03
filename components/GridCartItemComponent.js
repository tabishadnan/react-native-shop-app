import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

const GridCartItemComponent = ({ navigation, cartItem, cId}) => {

    const orderId = useSelector(state => state.orderreducer.orderId = cId);

    const dispatch = useDispatch();

    return (
        <View style={styles.container} onLoad>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontWeight: 'bold', marginRight:5, }}>{cartItem[cId].qty}</Text>
                <Text style={{ fontWeight: 'bold' }}>{cartItem[cId].title}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: "#000000", fontWeight: 'bold', marginHorizontal: 10, }}>{cartItem[cId].sum.toFixed(2)}</Text>
                <Icon name="trash"
                    size={22}
                    color="#d12c5c"
                    onPress={() => dispatch({type:"DELETE_CART_ITEM", id : cId})} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
});

export default GridCartItemComponent;