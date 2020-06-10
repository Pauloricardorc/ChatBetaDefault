import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

import Fire from '../Fire'

export default class Chat extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('name')
    })

    state = {
        messages: []
    }

    componentDidMount() {
        Fire.shared.on(message =>
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
        );
    }
    // 2.
    componentWillUnmount() {
      Fire.shared.off();
    }

    get user() {
        // Return our name and our UID for GiftedChat to parse
        return {
          name: this.props.navigation.state.params.name,
          _id: Fire.shared.uid,
        };
      } 

    render() {
        return (
            <GiftedChat 
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
        )
    }
}

const styles = StyleSheet.create({})
