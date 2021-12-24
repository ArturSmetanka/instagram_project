import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SingupForm = ({navigation}) => {
    const SingupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(3, 'A username is required'),
        password: Yup.string()
        .required()
        .min(6, 'Your passwoed has to have at least 6 characters')
    })

    return (
        <View style = {styles.wrapper}>

            <Formik
                initialValues={{email:'', username: '',password: ''}}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SingupFormSchema}
                validateOnMount={true}
            >
        {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
                    
            <>
            <View style = {[styles.inputField,
            {borderColor: values.email.length < 1 || Validator.validate(values.email)? '#ccc' : 'red'}
            ]}>
            <TextInput 
                placeholderTextColor={'#444'}
                placeholder ='Email'
                autoCapitalize = 'none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                autoCorrect ={false}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            
            </View>

            <View style = {[styles.inputField,
            {borderColor:
                1 > values.username.length || values.username.length >= 3
                ? '#ccc'
                : 'red'}
            ]}>
            <TextInput 
                placeholderTextColor={'#444'}
                placeholder ='Username'
                autoCapitalize = 'none'
                autoCorrect ={false}
                textContentType='username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
            />
            
            </View>

            <View style = {[styles.inputField,
                {
                    borderColor:
                1 > values.password.length || values.password.length >= 6
                ? '#ccc'
                : 'red'
            },
                
            ]}>
            <TextInput 
                placeholderTextColor={'#444'}
                placeholder ='Password'
                autoCapitalize = 'none'
                autoCorrect ={false}
                secureTextEntry ={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
            
            </View>
            <View style ={{alignItems: 'flex-end',marginBottom: 30,}}>
                <Text style = {{ color: '#6BB0F5'}}>Forgot password?</Text>
            </View>
            <Pressable titleSize = { 20 } style = {styles.button(isValid)} disabled ={!isValid}
                onPress={handleSubmit}>
                <Text style = {styles.buttonText}>Sing Up</Text>
            </Pressable>

            <View style = {styles.singupContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Text style = {{color: '#6BB0F5'}}> Log in</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
            </Formik>
        </View>
    )

}

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 80,
    },
    inputField:{
        borderRadius: 4,
        padding:12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: isValid=> ({
        backgroundColor: isValid ?  '#0096F6' :'#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        fontWeight: '600',
        color:'#fff',
        fontSize: 20,
    },
    singupContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },

})



export default SingupForm
