import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
import IconButton from './components/UI/IconButton';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
// import { authActions } from './store/auth';
import AuthContextProvider, { AuthContext } from './store/auth-context';
// textProvider={} from './store/auth-context';
const Stack = createNativeStackNavigator();

function AuthStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerTintColor:"#ffffff"
    }}
    >
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Signup' component={SignupScreen}/>
    </Stack.Navigator>
  );
}
function AuthenticatedStack(){
  const authCtx = useContext(AuthContext);
  // const dispatch = useDispatch();
  return(
    <Stack.Navigator
    screenOptions={{
    headerStyle: { 
        backgroundColor: '#2D0544',
     },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: '#A666E2' },
    }}
    >
      <Stack.Screen name='Welcome' component={WelcomeScreen}
       options={{
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="exit"
            color={tintColor}
            size={24}
            onPress={authCtx.logout}
          />
        ),
      }}
      />
    </Stack.Navigator>
  );
}

function Navigation(){
  // const isAuth = useSelector(state=> state.auth.isAuthenticated);
  const authCtx = useContext(AuthContext);
  return(
    <NavigationContainer>
     {!authCtx.isAuthenticated && <AuthStack/>}
     {authCtx.isAuthenticated && <AuthenticatedStack/>}
    </NavigationContainer>
   
  );
}

const App = () => {
  return (
    
    <AuthContextProvider>
      <Navigation/>
     </AuthContextProvider>

    

    // <ProductDetailsScreen/>
      );
}

export default App