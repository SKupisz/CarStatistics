import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends React.Component{
    constructor(props){
        super(props);

        this.featuresOfTheVehicle = ["Years of production: 1908-1927",
                    "Produced by: Ford Motor Company",
                    "Maximum speed: 65 km/h",
                    "Curb weight: 540kg",
                    "Price: 28,000$"
                ];

        this.state = {
            statsAreClosed: true
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

                        <View style = {this.props.styles["carPhotoContainer"]}>
                            <Image source = {require("../img/ford.png")} style = {this.props.styles["carPhoto"]}/>
                            <Text style = {this.state.statsAreClosed === true ? this.props.styles["carName"] : [this.props.styles["carName"], this.props.styles["disabledSection"]]}>Ford Model T</Text>
                        </View>
                        <Pressable onPress = {() => this.openCloseStats()} style = {this.props.styles["openStatsPressable"]}>
                                <Text style = {this.props.styles["openStatsPressableText"]}>Stats</Text>
                        </Pressable>
                        

                    </View>
                    <View style = {this.state.statsAreClosed === true ? [this.props.styles["describeSpace"], this.props.styles["disabledSection"]] : this.props.styles["describeSpace"]}>
                        {this.featuresOfTheVehicle.map((elem,ind) => <View key = {"vehicleProp"+ind} style = {this.props.styles["describeElem"]}>
                            <Text style = {this.props.styles["describeText"]}>{elem}</Text>
                        </View>)}
                    </View>
                    <StatusBar style="auto" />
            </View>;
    }
}
//<Image source = {require("../img/ford.png")} style = {this.props.styles["carPhoto"]}/>