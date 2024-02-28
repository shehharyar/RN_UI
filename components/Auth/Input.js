import { StyleSheet, TextInput, View } from "react-native";

function Input({
    placeholder,
    onUpdateValue,
    value,
    secure,
    children,
    keyboardType,
    isInValid
}){
    return(
        <View style={[styles.inputContainer, isInValid && styles.isInValid]}>
        <TextInput
        keyboardType={keyboardType}
        placeholderTextColor={"#000000"}
        // style={[styles.input, isInValid && styles.isInValid]}
        placeholder={placeholder}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
        />
        {children}
    </View>
    );
}

export default Input;

const styles= StyleSheet.create({
    inputContainer:{
       justifyContent: 'space-between',
       alignItems: 'center',
       flexDirection:'row',
        marginVertical:9,
        borderRadius: 12,
        paddingHorizontal: 19,
        paddingVertical:5,
        backgroundColor: '#ffffff',
    },
    input:{
      
        backgroundColor: '#ffffff',
        borderWidth:3.5,
        borderColor: '#72727217',
        fontSize:16
    },
    isInValid:{
        backgroundColor: '#E99797',
        borderColor: '#E9373AA6'
    },
});