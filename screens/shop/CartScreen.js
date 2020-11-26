import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 20, }}>
            Cart Screen !!!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
        borderColor: '#9e9e9e54',
        borderWidth: 2,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#ffffff",
    }
});

export default CartScreen;