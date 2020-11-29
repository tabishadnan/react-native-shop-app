import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const GridCartItemComponent = ({ navigation, cartItem, quantity }) => {

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontWeight: 'bold', marginRight:5, }}>{quantity}</Text>
                <Text style={{ fontWeight: 'bold' }}>{cartItem.title}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: "#000000", fontWeight: 'bold', marginHorizontal: 10, }}>{cartItem.price}</Text>
                <Icon name="trash"
                    size={22}
                    color="#d12c5c"
                    onPress={() => dispatch({type:"DELETE_CART_ITEM", id : cartItem.id})} 
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