import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

function ProductDetailsScreen () {
  return (
   <ScrollView>
    <View style={styles.header}>
        <Icon name='arrow-back-outline' size={30} color={'#000000'}/>
        <View style={styles.title}>
            <Icon name='musical-notes-sharp' size={30} color={'#000000'}/>
            <Text style={styles.txt}>Music Adda</Text>
        </View>
        <Icon name='cart-outline' size={30} color={'#000000'}/>
    </View>
    <View style={styles.ItemDetails}>
        <View>
            <Image source={{uri:'https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_1280.png'}}
            style={styles.image}
            /> 
            <View style={styles.prodInfo}>
                <Text style={styles.proTitle}>Sony AI dual-bass Headphones</Text>
                <Text style={styles.price}>$ 20.99</Text>
            </View>
        </View>
<View style={styles.prodCart}>
    <View style= {styles.prodColor}>
        <Text style={{fontWeight: 'bold', fontSize: 27, color: "#000000"}}>Color</Text>
        <View style={styles.colors}>
            <View style={{ borderRadius: 50, backgroundColor: '#000000', padding:10, width:10 }}></View>
            <View style={{ borderRadius: 50, backgroundColor: '#FFFC65', padding:10, width:10 }}></View>
            <View style={{ borderRadius: 50, backgroundColor: '#0BFF17', padding:10, width:10 }}></View>
        </View>
    </View>
    <View style={styles.details}>
        <Text style={{fontWeight: 'bold', fontSize: 27, color: "#000000"}}>Details</Text>
        <View style={styles.detailTexts}>
            <Text style={styles.detailInfo}>Product Size: 89</Text>
            <Text style={styles.detailInfo}>Product Size: 89</Text>
            <Text style={styles.detailInfo}>Product Size: 89</Text>
            <Text style={styles.detailInfo}>Product Size: 89</Text>
            <Text style={styles.detailInfo}>Product Size: 89</Text>
        </View>
    </View>
<View style={styles.buttons}>
    <Button style={styles.button} mode='flat'>Add to Cart</Button>
    <Button style={styles.button}>Buy Now</Button>

</View>
</View>

    </View>
   </ScrollView>
  );
}

export default ProductDetailsScreen;

const styles= StyleSheet.create({
    header:{
        paddingVertical: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-between',
       alignItems: 'center',
       paddingHorizontal:8,
       elevation:4,
       backgroundColor: 'white',
       shadowColor: 'black',
       shadowOffset:{width: 0, height:2},
       shadowOpacity: 0.25,
    },
    title:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4.5,
    },
    txt:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    ItemDetails:{
        marginTop:0,
        paddingTop:28,
        borderTopRightRadius:19,
        borderTopLeftRadius:19,
        backgroundColor: '#D5B4EB',
    },
    image:{
        // transform:'10',
        width:"100%",
        height: 200,
        resizeMode: 'contain'
    },
    proTitle:{
        fontWeight:'600',
        color:'#000000',

    },
    price:{
        color:'#000000',
        fontWeight: 'bold',
        fontSize: 24
    },
    prodInfo:{
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },prodCart:{
        backgroundColor: '#ffffff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:25,
        paddingVertical: 20,

    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    },
    colors:{
        marginTop:12,
        flexDirection: 'row',
        gap: 3.2
    },
    details:{
        marginTop:28,
    },
    detailTexts:{
        marginVertical:12,
      marginHorizontal:12, 
    },
    buttons:{
        marginVertical:24,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    }
});