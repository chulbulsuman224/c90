import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";
import SafeAreaView from "react-native-safe-area-view";


export default class PostScreen extends Component {
  constructor() {
    super();
    this.state = {
      postsList: []
    };
    this.requestRef = null;
  }

  componentDidMount() {
    this.getpostsList();
  }

  getpostsList = () => {
    this.requestRef = db.collection("posts").onSnapshot(
      snapshot => {
        var postsList = snapshot.docs.map(document => document.data());
        this.setState({
          postsList: postsList
        });
      },
      error => {
        this.requestRef();
      }
    );
  };

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.post_name}
        subtitle={item.post}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <Icon
            name={"open-in-new"}
            type={"material-icons"}
            size={30}
            color={"#6fc0b8"}
            containerStyle={{
              width: 100,
              alignItems: "flex-end"
            }}
          />
        }
        bottomDivider
      />
    );
  };

  render() {
    var { postsList } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader title={"Post"} />
        <SafeAreaView>
        {this.state.postsList.length === 0 ? (
          <View style={styles.emptyListContainer}>
            <Text style={styles.title}>List Of All posts</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={postsList}
            renderItem={this.renderItem}
          />
        )}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});