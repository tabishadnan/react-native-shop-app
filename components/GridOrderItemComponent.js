import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { useSelector } from 'react-redux';

const GridOrderItemComponent = ({ navigation, cartItem}) => {

    const orderId = useSelector(state => state.orderreducer.orderId);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
    <Text style={{ fontWeight: 'bold', marginRight:5, }}>{cartItem[orderId].qty}</Text>
                <Text style={{ fontWeight: 'bold' }}>{cartItem[orderId].title}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: "#000000", fontWeight: 'bold', marginHorizontal: 10, }}>{cartItem[orderId].sum}</Text>
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

export default GridOrderItemComponent;