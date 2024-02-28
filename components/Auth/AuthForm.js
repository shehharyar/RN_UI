import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Button from '../Button';
import Input from "./Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid}){
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
    
    const {
        emai: emailIsInvalid,
        confirmEmail: emailsDontMatch,
        password:passwordIsInvalid,
        confirmPassword: passwordsDontMatch
    }= credentialsInvalid;

//   const [isSecure, setIsSecure] = useState(true); 
  const [secureStates, setSecureStates] = useState({
    password:true,
    confirmPassowrd:true
  })  
   
  function secureTextHandler(field){
    setSecureStates((prevStates)=> ({
        ...prevStates,
        [field]:!prevStates[field]
    }

    ));
    //    setIsSecure(prevState => !prevState);
   }
   function updateInputValueHandler(inputType, enteredValue){
    switch (inputType) {
        case 'email':
            setEnteredEmail(enteredValue);
            break;
        case 'confirmEmail':
            setEnteredConfirmEmail(enteredValue);
            break;
        case 'password':
            setEnteredPassword(enteredValue);
            break;
        case 'confirmPassword':
            setEnteredConfirmPassword(enteredValue);
            break;
    }
   }

   function submitHandler(){
    onSubmit({
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword
    })
   }

    return(
        <View style={styles.form}>
         <View>
        <Input
        placeholder='Enter Your Email'
        keyboardType='email-address'
        value={enteredEmail}
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        isInValid={emailIsInvalid}
        />
      {!isLogin && (<Input
        placeholder='Confirm Your Email'
        keyboardType='email-address'
        value={enteredConfirmEmail}
        onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
        isInValid={emailsDontMatch}
        />)} 
           <Input
            placeholder='Enter Your Password'
            secure={secureStates['password']}
            value={enteredPassword}
            isInValid={passwordIsInvalid}
            onUpdateValue={updateInputValueHandler.bind(this, 'password', )}
            >
                <Pressable onPress={() => secureTextHandler('password')}>
                {secureStates['password'] ? <Icon name='eye' size={24}/>: <Icon name='eye-off' size={24}/>}
                </Pressable>
            </Input>
          {!isLogin &&  (<Input
            placeholder='Confirm Your Password'
            secure={secureStates['confirmPassowrd']}
            value={enteredConfirmPassword}
            isInValid={passwordsDontMatch}
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
            >
                <Pressable onPress={()=> secureTextHandler('confirmPassowrd')}>
                {secureStates['confirmPassowrd'] ? <Icon name='eye' size={24}/>: <Icon name='eye-off' size={24}/>}
                </Pressable>
            </Input>)
            }
      
        <View style={styles.button}>
        <Button onPress={submitHandler}>{isLogin ? "Log In" : "Sign Up"}</Button>
        </View>
    </View>   
</View>
    );
}

export default AuthForm;

const styles= StyleSheet.create({
        button:{
            marginHorizontal:19,
            marginVertical:10,
        },    
})