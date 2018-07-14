import React from 'react';
import {Avatar} from 'react-native-elements';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MyButton from '../UI/Button/MyButton';
import {connect} from 'react-redux'; 
import { onFetchUserInfoInit,onFetchFollowersInit, onFetchFollowingsInit } from '../store/actions/index';
class UserList extends React.Component {
    
    handleUserDetails = (login) => {
        this.props.getUserDetails(login)
        this.props.nav("UserDetails");
    }

    render(){ 
     return (  
            <View style={styles.listWrapper}>
                <View style={{width: 140}}>
                <Avatar
                    size="medium"
                    rounded
                    source={{uri: this.props.avatar_url}}
                    onPress={() => this.handleUserDetails(this.props.login) }
                    activeOpacity={0.7}
                    />
                <Text>
                        {this.props.login}
                </Text>
                </View>
                <View>
                    <MyButton color="#a550c9" onPress = {() => this.props.getFollowingDetails(this.props.following_url)}>Following</MyButton>
                </View>
                <View>
                    <MyButton color="#a550c9" onPress = {() => this.props.getFollowersDetails(this.props.followers_url)}>Followers</MyButton>
                </View>
            </View>
)
}
}

const mapStateToProps = state => {
    return {
       search: state.userDetails.userDetails
    }
}

const mapDispatchToProps = ( dispatch ) => {
   return {
       getUserDetails: (login) => dispatch(onFetchUserInfoInit(login)),
       getFollowingDetails: (following_url) => dispatch(onFetchFollowingsInit(following_url)),
       getFollowersDetails: (followers) => dispatch(onFetchFollowersInit(followers))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

const styles = StyleSheet.create({
    listWrapper: {
        flex: 1,
        paddingTop: 5,
        alignSelf: "center",
        flexDirection: "row",
        width: "95%",
        height: 70,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 5,
        backgroundColor: "#eee",
        marginBottom: 10,
        justifyContent: "space-around",
    },
    
})