import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import PostScreen from "../Screens/PostScreen";
import CreatePost from "../Screens/CreatePost";

export const AppTabNavigator=createBottomTabNavigator({
    CreatePost:{
        screen:CreatePost,
        navigationOptions:{
            tabBarLabel:"Create Post"
        }
    },
    PostScreen:{
        screen:PostScreen,
        navigationOptions:{
            tabBarLabel:"Post Screen"
        }
    }
})
