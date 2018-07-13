import React,{Component} from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';

class UserDetails extends Component {
    render() {

        return (
            <ScrollView>
                <View>
                <Image source={{uri: this.props.userDetails.avatar_url}} style={{width: 100, height: 100}} />
                    <Text>Name: {this.props.userDetails.name}</Text>
                    <Text>login id: {this.props.userDetails.login}</Text>
                    <Text>Name: {this.props.userDetails.name}</Text>

                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        userDetails: state.userDetails.userDetails
    }
}
export default connect(mapStateToProps)(UserDetails);
