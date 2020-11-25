import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';

const GridProductItemComponent = ({ navigation, product }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product Detail", product)}>
            <View style={styles.container}>
                <Image
                    style={styles.productImg}
                    source={{
                        uri: `${product.item.img}` 
                    }}
                />
                <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10, }}>
                    {product.item.title}
                </Text>
                <Text style={{ color: '#9e9e9e', textAlign: 'center', marginBottom: 10, }}>
                    ${product.item.price}
                </Text>
                <View style={styles.btncontainer}>
                    <Button title="VIEW DETAILS" color="#d12c5c" onPress={() => navigation.navigate("Product Detail", product)} />
                    <Button title="TO CART" color="#d12c5c" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

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
    },
    btncontainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productImg: {
        width: "100%",
        height: 200,
    }
});

export default GridProductItemComponent;