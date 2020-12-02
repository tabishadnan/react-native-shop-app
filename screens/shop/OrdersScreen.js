import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const OrdersScreen = ({ navigation, route }) => {

    const order = useSelector(state => state.orderreducer.items);

    console.log("hello order",order);

    const totalAmount = route.params.totalAmount;

    const orderDate = route.params.orderDate;

    // const orderDate = route.params.orderDate;

    // console.log(route);

    return (
        <View>
            {/* Show Total Amount */}
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>${totalAmount}</Text>
                    <Text>{orderDate}</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{
                            color: "#FFF", fontWeight: 'bold', backgroundColor: "#d12c5c",
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderRadius: 10,
                        }}>SHOW DETAILS</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* GridCartItemComponent */}
            {/* <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Object.keys(Items)}
                renderItem={({ item }) =>
                    <GridCartItemComponent
                        cartItem={Items}
                        cId={item}
                    />
                }
            /> */}
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

export default OrdersScreen;