import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import UserList from '../components/UserLIst';
import { connect } from 'react-redux';
class Follow extends React.Component {
 
 static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('type', 'A Nested Details Screen'),
  };
};


  render() {
    // const { navigation } = this.props;
    // type = navigation.getParam('type', 'NO-ID');
    const follow = this.props.clicked == "followers" ? "followers" : "followings"
    return (
      <ScrollView style={styles.container}>
      <Text>List Of {follow}</Text>
     <FlatList 
                data = {this.props.follow}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                <UserList {...item} nav = {this.props.navigation.navigate} />
                )
            }/>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
    return {
       follow: state.users.follow,
       clicked: state.users.clicked
    }
}

export default connect(mapStateToProps)(Follow);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });