import React from 'react';
import { Animated, Pressable, Image, Text, View } from 'react-native';

import VehicleImages from "./Images.js";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.vehicles = require("./data.json");

        this.state = {
            statsAreClosed: true,
            currentlyLooked: this.props.openedcar
        };

        this.openCloseStats = this.openCloseStats.bind(this);
    }
    openCloseStats(){
        this.setState({
            statsAreClosed: !this.state.statsAreClosed
        }, () => {});
    }
    render(){
        return <View style = {this.props.styles["safeAreaView"]}>
                    <View style = {this.props.styles["darkSpace"]}>
                        <Pressable onPress = {this.props.onGoingBack} style = {this.props.styles["exitBtn"]}>
                            <Text style = {this.props.styles["exitBtnContent"]}>X</Text>
                        </Pressable>
                        <View style = {this.props.styles["carPhotoContainer"]}>
                            <Image source = {VehicleImages[this.state.currentlyLooked]} style = {this.props.styles["carPhoto"]}/>
                        </View>
                        <View style = {this.props.styles["carNameContainer"]}>
                        <Text style = {this.state.statsAreClosed === true ? this.props.styles["carName"] : [this.props.styles["carName"], this.props.styles["disabledName"]]}>
                                {this.vehicles[this.state.currentlyLooked].fullName}
                            </Text>
                        </View>
                        <Pressable onPress = {() => this.openCloseStats()} style = {[this.props.styles["openStatsPressable"]]}>
                                <Text style = {this.props.styles["openStatsPressableText"]}>Stats</Text>
                        </Pressable>
                        

                    </View>
                    <View style = {this.state.statsAreClosed === true ? [this.props.styles["describeSpace"], this.props.styles["disabledSection"]] : this.props.styles["describeSpace"]}>
                        {this.vehicles[this.state.currentlyLooked].params.map((elem,ind) => <View key = {"vehicleProp"+ind} style = {this.props.styles["describeElem"]}>
                            <Text style = {this.props.styles["describeText"]}>{this.vehicles["categories"][ind]+": "+elem}</Text>
                        </View>)}
                    </View>
            </View>;
    }
}