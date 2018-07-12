import React from 'react';
import {Avatar} from 'react-native-elements';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
const UserList = (props) => (
    <TouchableOpacity>
    <View style={styles.listWrapper}>
        <View>
            <Text>
                Name: {props.login}
            </Text>
        </View>
        <View>
        <Avatar
            size="small"
            rounded
            source={{uri: props.avatar_url}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            />
        </View>
    </View>
    </TouchableOpacity>
)

export default UserList;

const styles = StyleSheet.create({
    listWrapper: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 70,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 5,
        backgroundColor: "#eee",
        marginBottom: 10,
        justifyContent: "space-between",
    },
    
})