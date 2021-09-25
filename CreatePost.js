import React, { Component } from "react";
import { View, KeyboardAvoidingView, StyleSheet, Alert } from "react-native";
import db from "../config";
import firebase from "firebase";

import MyHeader from "../components/MyHeader";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import SafeAreaView from "react-native-safe-area-view";

export default class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      postName: "",
      post: ""
    };
  }

  getUniqueId() {
    return Math.random()
      .toString(36)
      .substring(7);
  }

  handlePostRequest = (postName, post) => {
    var { userId } = this.state;
    var randomRequestId = this.getUniqueId();
    if (postName && post) {
      db.collection("posts").add({
        user_id: userId,
        post_name: postName,
        post: post,
        request_id: randomRequestId
      });

      this.setState({
       postName: "",
        post: ""
      });
      Alert.alert("post added Successfully");
    } else {
      Alert.alert("Fill the details properly");
    }
  };

  render() {
    var { postName, post } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <MyHeader title="Create post" />
        <KeyboardAvoidingView style={styles.upperContainer}>
          <CustomInput
            style={[styles.input, { height: 75 }]}
            inputContainerStyle={{ height: 60 }}
            label={"post Name"}
            labelStyle={{ fontSize: 20 }}
            placeholder={"post name"}
            onChangeText={text => {
              this.setState({
               postName: text
              });
            }}
            value={postName}
          />
          <CustomInput
            style={[styles.input, { height: 170 }]}
            inputContainerStyle={{ height: 140 }}
            label={"description"}
            labelStyle={{ fontSize: 20 }}
            multiline
            numberOfLines={8}
            placeholder={"What do you want to post?"}
            onChangeText={text => {
              this.setState({
               post: text
              });
            }}
            value={post}
          />
          <CustomButton
            title={"Make a post"}
            onPress={() => this.handlePostRequest(postName, post)}
            style={styles.button}
            titleStyle={styles.buttonTitle}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperContainer: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    width: "90%",
    height: 65,
    borderColor: "#6fc0b8",
    borderWidth: 0,

    alignItems: "flex-start",
    marginTop: 30
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6fc0b8"
  },
  buttonTitle: {
    color: "#fff"
  }
});