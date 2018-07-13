import React,{Component} from 'react';
import { Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

class UserDetails extends Component {
    render() {
        console.log("hii", this.props.userDetails)
        return (
            <ScrollView>
                <View>
                    <Text>hiiii</Text>
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
