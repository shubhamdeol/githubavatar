import React from 'react';
import { ScrollView ,Text, View, TextInput, StyleSheet} from 'react-native';
import connect from 'react-redux';
import SearchList from '../components/SearchList/SearchList';
import axios from 'axios';

class Search extends React.Component {
  static navigationOptions = {
    title: 'Search a GitHub User',
 };
 
     state = {
         search: "",
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
           this.callGitApi(Text);
     }
 
     callGitApi = (Text) => {
         axios.get("https://api.github.com/search/users?q="+Text)
           .then( res => {
               this.setState( {
                   search: res.data.items,
               })
             
       })
     }
 
     render() {
         return (
             <View style={styles.container}>
                 <TextInput 
                 style= {styles.input} 
                 underlineColorAndroid = "transparent"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 placeholder="Search for GitHub Avatars"
                 value = {this.state.value}
                 onChangeText = {this.handleSearch}/>
                 <SearchList listData = {this.state.search} />
             </View>
             )
         }
     }


     const mapStateToProps = state => {
       return {
          // search: state.search.value    and access it with props.search in component
       };
     };
     export default connect(Search);

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
