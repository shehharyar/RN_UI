import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function LoadingOverlay({message}){
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size={'large'} color={'#1C1D30'}/>
        </View>
    )
}

export default LoadingOverlay;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    message:{
        fontSize: 16,
        marginBottom: 12,
    }
});