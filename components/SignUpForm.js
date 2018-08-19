import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import gcUrls from '../gcUrls.json';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { phone: '' };
    }

    async handleSubmit() {
        try {
            await axios.post(gcUrls.createUserUrl, {
                phone: this.state.phone
            })
            await axios.post(gcUrls.requestPasswordUrl, {
                phone: this.state.phone
            })
        } catch (err){
            console.log('Error creating user or requesting password: ', JSON.stringify(err));
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
                </View>
                <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
            </View>
        )
    }
}

export default SignUpForm;