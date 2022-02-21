import React from "react";
import { ImageBackground, TouchableOpacity, View, StyleSheet, Text } from "react-native";

import bg_win from "../assets/2.gif";
import bg_lose from "../assets/1.gif";

export default class FindNumber_Notification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            check: this.props.route.params.check_nb,
        }
    }

    componentDidMount(){
        const check_nb = this.props.route.params.check_nb;
        console.log(this.props.route.params.check_nb);
    }

    render(){
        if(this.state.check){
            return(
                <ImageBackground source={bg_win} style={styles.container}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txt}>Màn tiếp</Text>
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
        else{
            return(
                <ImageBackground source={bg_lose} style={styles.container}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txt}>Chơi lại</Text>
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    btn: {

    },
    txt: {

    },
});