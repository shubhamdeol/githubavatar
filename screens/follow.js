import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import UserList from '../components/UserLIst';
import { connect } from 'react-redux';
class Follow extends React.Component {
  static navigationOptions = {
    title: 'follow',
 };
 


  render() {
    const { navigation } = this.props;
    type = navigation.getParam('type', 'NO-ID');
    return (
      <ScrollView style={styles.container}>
     <Text>List of {type}</Text>     
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
       follow: state.users.follow
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