import React from 'react';
import { ScrollView ,Text, View, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SearchList from '../components/SearchList/SearchList';
import { onFetchSearchInit } from '../store/actions/index';


class Search extends React.Component {
  static navigationOptions = {
    title: 'Search a GitHub User',
 };
 
    state = {
        value: ""
    }

      //  navMovieDetails = ( movieID ) => {
      //      this.props.navigation.navigate("RouteToDetails", {
      //          movieID: movieID
      //      });
      //  }
 
       handleSearch = (Text) => {
           this.setState({
               value: Text
           })
           this.props.fetchSearchDetails(Text);
     }
 
    //  callGitApi = (Text) => {
    //      axios.get("https://api.github.com/search/users?q="+Text)
    //        .then( res => {
    //            this.setState( {
    //                search: res.data.items,
    //            })
             
    //    })
    //  }
 
     render() {
         return (
             <View style={styles.container}>
                 <TextInput 
                 style= {styles.input} 
                 underlineColorAndroid = "transparent"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 placeholder="Search for GitHub Avatars"
                 value = {this.props.value}
                 onChangeText = {this.handleSearch}/>
                 <SearchList listData = {this.props.search} nav = {this.props.navigation.navigate}/>
             </View>
             )
         }
     }

     const mapStateToProps = state => {
         return {
            search: state.users.searchResults
         }
     }

     const mapDispatchToProps = ( dispatch ) => {
        return {
            fetchSearchDetails: (Text) => dispatch(onFetchSearchInit(Text)),
        }
    }

  
     export default connect(mapStateToProps,mapDispatchToProps )(Search);

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: "white",
         alignItems: "center",
         width: "100%"
     },
     input: {
         width: "80%",
         height: 50
     }
 })
