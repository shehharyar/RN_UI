import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import FlatButton from "../UI/FlatButton";
import AuthForm from "./AuthForm";

function AuthContent({isLogin, onAuthenticate}){
const navigation= useNavigation();

    const [credentialIsInValid, setCredentialIsInValid] = useState({
        email:false,
        password:false,
        confirmEmail:false,
        confirmPassword:false,
    });

    function switchAuthModeHandler(){
        if (isLogin) {
            navigation.replace('Signup');
          } else {
            navigation.replace('Login');
          }

    }

    function SubmitHandler(credentials){
        let { email, password, confirmEmail, confirmPassword} = credentials;
        
        email= email.trim();
        password= password.trim();

        const emailIsValid = email.includes('@') && email.length > 0;
        const passwordIsValid= password.length > 6;
        const emailsAreEqual= email === confirmEmail;
        const passwordsAreEqual= password === confirmPassword;

        if(!emailIsValid || 
        !passwordIsValid 
        || (!isLogin && (!emailsAreEqual || !passwordsAreEqual) ) 
        )
        {
            Alert.alert('InValid Input', "plaase check your entered credentials.")
            setCredentialIsInValid({
                email:!emailIsValid,
                password:!passwordIsValid,
                confirmEmail:!emailIsValid || !emailsAreEqual,
                confirmPassword:!passwordIsValid || !passwordsAreEqual
            });
            return;
        }
        onAuthenticate({ email, password });
    }

    return(
        <View style={styles.authContent}>

        <AuthForm
            isLogin={isLogin}
            onSubmit={SubmitHandler}
            credentialsInvalid={credentialIsInValid}
            />
                  <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
             
        </View>
    );
}

export default AuthContent;

const styles= StyleSheet.create({
    authContent:{
        marginTop:7,
        marginHorizontal:12,
        padding: 24,
        borderRadius:9,
        elevation:2,   
        // backgroundColor: '#5E0C7EB2',
        opacity:0.9,
        shadowColor: 'black',
        shadowOffset: {width:1, height:1},
        shadowOpacity: 0.35,
        shadowRadius:4,
    },
    buttons:{
        marginTop:8,
    }

})