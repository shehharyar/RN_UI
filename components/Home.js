import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import Categories from './categries'
import ProductsList from './products'

const Home = () => {
  return (
    <>
        <Header/>

    <View style={styles.conatiner}>
        <View style={styles.croiuselContainer}>

        <Text style={styles.heading}>
            Explore
        </Text>
        <View style={styles.carousel}>
            <View style={styles.fallBack}>
                <Text style={styles.fallBackText}>Flat 35% Off</Text>
                <Pressable>
                    <View style={styles.button}>
                        <Text style={styles.btnText}>Shop Now</Text>
                    </View>
                </Pressable>
            </View>
            <Image source={require('../assets/images/headphones.png')} 
            style={styles.image}/>
        </View>   
        </View>
        <Categories/>
        <ProductsList/>
    </View>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        backgroundColor: '#d9d2fc',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    heading:{
        top: 12,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    croiuselContainer:{
        marginHorizontal: 28
    },
    button:{
        color: 'black',
        borderRadius:6,
        paddingHorizontal:20,
        paddingVertical:5,
       
        // justifyContent: 'center',
        // alignItems: 'center',

        backgroundColor: 'white'
    },
    btnText:{
        fontWeight: "bold", 
    },
    image:{
        width:120,
        height: 120
    },
    carousel:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:10,
        top:19,
        borderRadius: 20,
        backgroundColor: '#1B052B',
    },
    fallBack:{
        marginHorizontal: 20
    },
    fallBackText:{
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Sans Serif',
        fontWeight: 'bold'
    }
})