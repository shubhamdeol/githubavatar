import React,{Component} from 'react';
import { Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';

class UserDetails extends Component {
    render() {

        return (
            <ScrollView>
                <View>
                <Image source={{uri: this.props.userDetails.avatar_url}} style={{width: "100%", height: 400}} />
                    <Text>Name: {this.props.userDetails.name}</Text>
                    <Text>login id: {this.props.userDetails.login}</Text>
                    <Text>company: {this.props.userDetails.company}</Text>
                    <Text>Email: {this.props.userDetails.email}</Text>
                    <Text>company: {this.props.userDetails.company}</Text>
                    <Text>Tota Followers: {this.props.userDetails.followers}</Text>
                    <Text>Following: {this.props.userDetails.following}</Text>
                    <Text>Location: {this.props.userDetails.location}</Text>

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
