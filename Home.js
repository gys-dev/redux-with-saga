import React, {Component, useContext} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import BlogContext from './BlogContext'
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export class Home extends Component {
    getContext() {
        
        return value
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {styles.container}>

                <Text>Hello {this.props.counter}</Text>
                <Button title = "PUSH"
                onPress = {() => {
                    this.props.navigation.navigate('Detail');
                }}
                ></Button>
                

            </View>
        )
    }
}
const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps, null)(Home)



