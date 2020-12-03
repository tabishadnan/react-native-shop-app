import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import GridOrderItemComponent from '../../components/GridOrderItemComponent';
import Moment from 'moment';

const OrdersScreen = ({ navigation, route }) => {

    const order = useSelector(state => state.orderreducer.orders);

    console.log(order);

    const amount = useSelector(state => state.orderreducer.amount);

    amount.toFixed(2);

    const orderDate = Moment().format("MMM / Do / YY");

    const isShowDetail = useSelector(state => state.orderreducer.isShowDetail);

    const dispatch = useDispatch();

    return (
        <>
            {Object.keys(order).length > 0 && <View>
                {/* Show Total Amount */}
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>${amount}</Text>
                        <Text>{orderDate}</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={() => dispatch({ type: "IS_SHOW_DETAIL" })}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{
                                color: "#FFF", fontWeight: 'bold', backgroundColor: "#d12c5c",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderRadius: 10,
                            }}>{!isShowDetail ? "SHOW DETAILS" : "HIDE DETAILS"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* GridCartItemComponent */}
                {isShowDetail && <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={Object.keys(order)}
                    renderItem={({ item }) =>
                        <GridOrderItemComponent
                            cartItem={order}
                            cId={item}
                        />
                    }
                />}
            </View>}
            {Object.keys(order).length <= 0 && <View>
                {/* Show Total Amount */}
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#d12c5c", fontWeight: 'bold' }}>$0.00</Text>
                        <Text>{orderDate}</Text>
                    </View>
                </View>
            </View>}
        </>
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