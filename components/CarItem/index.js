import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './style'
import Button from '../styledBottons';

const CarItem = (props)=>{
    const {name, tagline, taglineCTA, image} = props.car.item;
    console.warn(props.car)
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image}/>
            <View style={styles.titles}>
                <Text  style={styles.title}>
                 {name}
                </Text>
                <Text style={styles.subtitle}>
                {tagline}
                {' '}
                <Text style={styles.taglineCTA}>
                    {taglineCTA}
                </Text>
                </Text>

            </View>
            <View style={styles.buttonContainer}>
                <Button type="secondary" content={"Custom Order"} onPress={()=>{console.warn("Customer Order was pressed")}}/>
                <Button type="primary" content={"Existing Inventory"} onPress={()=>{console.warn("Existing Inventory was pressed")}}/>
            </View>
             
        </View>
    );

};

export default CarItem;