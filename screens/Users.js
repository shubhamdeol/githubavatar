import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import UserList from '../components/UserLIst';
import { connect } from 'react-redux';
import { onFetchUsersInit } from '../store/actions/index';
class Users extends React.Component {
  static navigationOptions = {
    title: 'Users',
 };
 
 componentDidMount = () => {
   this.props.fetchAllUsers();
 }
  render() {
    return (
      <ScrollView style={styles.container}>
     <Text>List of Users</Text>     
     <FlatList 
                data = {this.props.users}
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
   users: state.users.users 
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchAllUsers: () => dispatch(onFetchUsersInit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

