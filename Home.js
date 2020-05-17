import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View 
} from 'react-native';

export default class Home extends Component 
{
    render()
    {
        const {navigation} = this.props;
        const username = navigation.getParam('name');

        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Olá {username} !!!
                </Text>
                <Text style = {styles.text}> 
                    Bem vindo a Greenier Life 
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
       fontSize: 20,
       color: '#498A57' 
    }
});