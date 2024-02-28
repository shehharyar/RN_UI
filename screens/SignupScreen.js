import { useContext, useLayoutEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../utils/auth';

function SignupScreen({route, navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx= useContext(AuthContext);
  async function signUpHandler({email, password}){
    setIsAuthenticating(true);
    try{
    const token=  await createUser(email, password);
      authCtx.authenticate(token);
    }catch(error){
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
    }
    setIsAuthenticating(false)
  }

  
  useLayoutEffect(
    ()=>{
        navigation.setOptions({
            headerShown: false
        })
    }

,[])

if(isAuthenticating){
  return <LoadingOverlay message="creating user...."/>
}

  return( 
    <ImageBackground 
    source={require('../assets/images/login.jpg')}
    style={styles.mainScreen}>
  <AuthContent onAuthenticate={signUpHandler} />
  </ImageBackground>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        // alignItems:'center',
        justifyContent: 'center'
    },
})