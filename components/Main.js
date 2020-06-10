import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
 } from 'react-native'

class Main extends React.Component {
    state = {
        name: '' //Adicionando o component state
    }

    
    onPress = () =>{
        this.props.navigation.navigate('Chat', {name: this.state.name})
    }
    
    onChangeText = name => this.setState({ name });
    
    render(){
        return(
            <View>
                <Text style={styles.title}>Escreva seu nome:</Text>
                <TextInput 
                    onChangeText={this.onChangeText} // Adicionando o name dentro do onChangeText cada click no teclado
                    style={styles.nameInput}
                    placeholder='Paulo Ricardo'
                    value={this.state.name}
                />
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.buttonText}>Proximo</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const offset = 24
const styles = StyleSheet.create({
    nameInput:{
        height: offset,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
    },
    Title:{
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
    },
    buttonText:{
        marginLeft: offset,
        fontSize: offset,
    },
})

export default Main