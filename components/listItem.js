import { Image, StyleSheet, Text, View } from "react-native";

export default function ListItem ({name, image,  }){
    return(
        <View style={styles.item}>
            <View style={styles.imgCon}>
            <Image 
            source={{uri: image}} style={styles.image}/>
            </View>
            
                
            <Text style={styles.txt}>{name}</Text>
        </View>
    );
  }

const styles= StyleSheet.create({
    item:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    imgCon:{
        width: 50,
        height: 50,
    },
    image: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        aspectRatio:1,
        borderRadius: 30,
    },
    txt:{
        margin:9,
        fontWeight: 'bold'
    }
});