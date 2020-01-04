import React, {Component} from 'react'

import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native'
import * as actions from './actions'
import BlogContext from './BlogContext'
import { connect } from 'react-redux'
/*
    Nguyen nhan la redux da phat ra cung luc 2 action, khien state cua bien loading bi anh huong
*/
export class Detail extends Component {
    handelIncrease = () => {
        this.props.counterIncrease();
        this.props.fetchRequest();
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>Hehe {this.props.counter} {this.props.loading  == 1? "true" : "false"}</Text>
                <Button title = "Change Value"
                    onPress = {() => {
                        this.handelIncrease()
                    }}
                >
                </Button>
                {
                    this.props.loading  == 1 ?
                    <ActivityIndicator size="large" color="#0000ff" />
                    :
                    <Text>:(</Text>
                    
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    counter: state.counter,
    loading: state.loading
})

export default connect(mapStateToProps, actions)(Detail)