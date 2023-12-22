import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { categories } from '../utils/data';
import ListItem from './listItem';

const Categories = () => {

  
  
    return (
    <View style={styles.cat}>
   <FlatList
   data={categories}
    horizontal= {true}
   keyExtractor={ item=> item.id}
renderItem={({item}) => <ListItem name={item.name} image={item.imageUrl}/> }
   />
    </View>
  )
}

export default Categories;

const styles= StyleSheet.create({
    cat:{
        // borderColor: "black",
        // borderWidth:10,
        paddingHorizontal:10,
        // flex:1,
        marginVertical:29,

    }
});