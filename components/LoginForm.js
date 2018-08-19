import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';
import gcUrls from '../gcUrls.json';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { phone: '', code: '' };
    }

    async handleSubmit() {
        try {
            let { data } = await axios.post(gcUrls.verifyPasswordUrl, {
                phone: this.state.phone,
                code: this.state.code
            })
            console.log("Token!!", data.token)
            await firebase.auth().signInWithCustomToken(data.token);
        } catch (err){
            console.log('Error verifying password: ', JSON.stringify(err));
        }
    }

    render(){
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={(phone) => { this.setState({phone })}}
                    />
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={(code) => { this.setState({ code })}}
                    />
                </View>
                <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
            </View>
        )
    }
}

export default LoginForm;