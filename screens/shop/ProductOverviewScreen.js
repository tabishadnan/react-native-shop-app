import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import GridProductItemComponent from '../../components/GridProductItemComponent';
import { PRODUCTS } from '../../models/ProductData';

const ProductOverviewScreen = ({navigation}) => {

    const counter = useSelector(state => state.shoprducer.counter);

    return ( 
        <FlatList 
            data={PRODUCTS}
            renderItem={(products) => <GridProductItemComponent
            product={products}
            navigation={navigation}
            />}
        />
     );
};

export default ProductOverviewScreen;