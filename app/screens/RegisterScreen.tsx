import React from 'react';
import {Image, StyleSheet, TextInput} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';

import {AppForm, AppFormPicker, SubmitButton} from '../components/forms'

// defined here so we don't get a new one every re-render
const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).label("Email"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})


function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                    <AppFormPicker
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="person"
                        name="name"
                        placeholder="Name"
                    />
                    <AppFormPicker
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        name="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormPicker
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />
                    
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
    
})

export default RegisterScreen;