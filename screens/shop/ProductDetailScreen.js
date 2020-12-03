import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const ProductDetailScreen = ({ navigation, route }) => {

    const product = route.params;

    const img = { uri: product.img };

    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: product.title,
        });

    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.productImg}
                source={{
                    uri: `${product.img}`
                }}
            />
            <View style={styles.btncontainer}>
                <Button title="ADD TO CART" color="#d12c5c" onPress={() => dispatch({type:"ADD_TO_CART", product})}/>
            </View>
            <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10, }}>
                {product.title}
            </Text>
            <Text style={{ color: '#9e9e9e', textAlign: 'center', marginBottom: 10, }}>
                ${product.price}
            </Text>
            <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 20, }}>
                {product.desc}
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
    },
    btncontainer: {
        padding: 10,
        flexDirection: 'row',   
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImg: {
        width: "100%",
        height: 200,
    }
});

export default ProductDetailScreen;