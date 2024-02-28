import { useContext, useLayoutEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../utils/auth';

function LoginScreen({route, navigation}) {
  // const dispatch = useDispatch();
  // const authtoken= useSelector(state => state.auth.token);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx= useContext(AuthContext);
  // const auth= useSelector(state=> state.a);
    async function signInHandler({email, password}){
        setIsAuthenticating(true);
        try {
          const token =  await login(email, password);
          authCtx.authenticate(token);
          // dispatch(authActions.authenticate(token));

          // console.log(authtoken);
          console.log(authCtx.token);
          console.log(authCtx.isAuthenticated);
          } catch (error) {
            Alert.alert(
              'Authentication failed!',
              'Could not log you in. Please check your credentials or try again later!'
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

// if(isAuthenticating){
//     return <LoadingOverlay message={'Logging you In...'}/>
// }

  return(
    <ImageBackground 
    source={require('../assets/images/login.jpg')}
    style={styles.mainScreen}>
  { isAuthenticating && <LoadingOverlay message={'Logging you In...'}/>}      
 {!isAuthenticating && <AuthContent isLogin onAuthenticate={signInHandler}/>}
    </ImageBackground>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center'
    },
})