import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const GridOrderItemComponent = ({ navigation, cartItem, cId}) => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
    <Text style={{ fontWeight: 'bold', marginRight:5, }}>{cartItem[cId].qty}</Text>
                <Text style={{ fontWeight: 'bold' }}>{cartItem[cId].title}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: "#000000", fontWeight: 'bold', marginHorizontal: 10, }}>{cartItem[cId].sum.toFixed(2)}</Text>
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