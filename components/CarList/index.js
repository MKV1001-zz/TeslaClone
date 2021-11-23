import React  from "react";
import {View, FlatList, Dimensions} from 'react-native';
import CarItem from "../CarItem";
import styles from "./styles";
import car from "./car";



const CarList = (props)=>{
    return(
        <View style={styles.carListView}>
            <FlatList
            data={car}
            renderItem={(item)=> <CarItem car={item}/>}
            showsVerticalScrollIndicator="false"
            snapToAlignment='start'
            decelerationRate='fast'
            snapToInterval={Dimensions.get('window').height}
         />
        </View>
        
    );

};

export default CarList;