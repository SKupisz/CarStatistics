import React from 'react';
import { FlatList,ImageBackground,Pressable, Text, View   } from 'react-native';
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
            ifOpened: !this.state.ifOpened,
            currentCar: car
        }, () => {});
    }
    render(){
        return <View  style = {this.props.styles["safeAreaView"]}>
            {this.state.ifOpened === false ? <ImageBackground source = {require("../img/background.png")} style = {this.props.styles["background"]}>
                <View style = {this.props.styles["header"]}>
                    <Text style = {this.props.styles["headerText"]}>Choose a car</Text>
                </View>
                <FlatList
                style = {this.props.styles["menuOptionWrapper"]}
                data = {this.names}
                keyExtractor={(item,index) => item+" "+index}
                renderItem = {({item, index}) => <Pressable style = {this.props.styles["menuOption"]} onPress = {() => {this.openTheCar(item);}} key = {index}>
                    <Text style = {this.props.styles["menuOptionText"]}>{this.listData[item].fullName}</Text>
                </Pressable>}
            /></ImageBackground> : <Main styles = {this.props.stylesForMain} onGoingBack = {() => {this.openTheCar("")}} openedcar = {this.state.currentCar}/>}
        </View>;
    }
}