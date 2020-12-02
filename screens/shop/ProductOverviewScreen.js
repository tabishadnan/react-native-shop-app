import React from 'react';
import { FlatList } from 'react-native';
import GridProductItemComponent from '../../components/GridProductItemComponent';
import { PRODUCTS } from '../../models/ProductData';

const ProductOverviewScreen = ({navigation}) => {

    return ( 
        <FlatList 
            data={PRODUCTS}
            renderItem={({ item }) => (<GridProductItemComponent
                product={item}
                navigation={navigation}
                />)}
        />
     );
};

export default ProductOverviewScreen;