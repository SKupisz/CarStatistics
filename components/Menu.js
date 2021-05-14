import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Main.js';

export default class Menu extends React.Component{
    constructor(props){
        super(props);

        this.listData = require("./data.json");
        this.names = this.listData["carsNames"];

        this.state = {
            currentCar: "",
            ifOpened: false
        };

        this.openTheCar = this.openTheCar.bind(this);

    }
    openTheCar(car){
        this.setState({
            ifOpened: true,
            currentCar: car
        }, () => {});
    }
    goBack(){
        this.setState({
            ifOpened: false,
            currentCar: ""
        }, () => {});
    }
    render(){
        return <View  style = {this.props.styles["safeAreaView"]}>
            {this.state.ifOpened === false ? <ImageBackground source = {require("../img/background.png")} style = {this.props.styles["background"]}>
                <View style = {this.props.styles["header"]}>
                    <Text style = {this.props.styles["headerText"]}>Wybierz auto</Text>
                </View>
                <FlatList
                style = {this.props.styles["menuOptionWrapper"]}
                data = {this.names}
                keyExtractor={(item,index) => item+" "+index}
                renderItem = {({item, index}) => <Pressable style = {this.props.styles["menuOption"]} onPress = {() => {this.openTheCar(item);}} key = {index}>
                    <Text style = {this.props.styles["menuOptionText"]}>{this.listData[item].fullName}</Text>
                </Pressable>}
            /></ImageBackground> : <Main styles = {this.props.stylesForMain} onGoingBack = {() => {this.goBack()}} openedcar = {this.state.currentCar} data = {this.listData}/>}
        </View>;
    }
}