import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProductItem = ({ img, title, subtitle, isFavourite }) => {
  const [isFav, setIsFav] = useState(false);
  
  function favouriteHandler (){

    setIsFav(prevState=> isFavourite= !prevState);
  }
  
  let name= isFavourite ? 'heart' : 'herat-o';
  return (

    <View style={styles.productItem}>
      <Pressable onPress={favouriteHandler}>
        { isFav?  <Icon name={'heart'} size={29} color={'red'}/>
      :   <Icon name={'heart-o'} size={29} color={'red'}/>
      }
      </Pressable>
<Pressable>
    <View>

        <Image
         source={{uri: img}}
         resizeMode='cover'
         style={styles.image}
         />
        <View>
          <Text>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
         </View>

</Pressable>
    </View>
  )
}

export default ProductItem


const styles= StyleSheet.create({
    image:{
        width: "100%",
        height: 200,
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
    },
    productItem:{
        padding:8,
        margin: 8,
        borderRadius: 9,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset:{width: 0, height:2},
        shadowOpacity: 0.25,
        overflow: 'hidden',
        
     width:'45%',
        // height: 150,
    },
    subtitle:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 23
    }
})