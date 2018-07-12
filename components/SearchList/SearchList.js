import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import UserList from '../UserLIst';
class SearchList extends React.Component {
    render() {
        return (
            <View>
                <FlatList 
                data = {this.props.listData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                <UserList {...item} />
                )
            }  />
            </View>
            )
        }
    }

export default SearchList;