import React from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import bg from "../assets/bg_findnumber.jpg";

export default class FindNumbers extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            numbers: [],
            check_number: 0
        };
    }

    componentDidMount(){
        const max = 10;
        const arr_number= [];
        for(let i= 1; i<=max; i++){
            const arr = {id: i, number: i};
            arr_number.push(arr);
        }
        this.setState({numbers: arr_number});
    }

    arr_number(list){
        const arr=[];
        arr.push(list.sort(() => Math.random() - 0.5));
        return arr;
    }

    check(number){
       
    }

    render(){
        const { numbers } = this.state;
        const arr_nb= this.arr_number(numbers);
        return(
            <ImageBackground source={bg} style={styles.bg}>
                <View style={styles.container}>
                    <FlatList
                        data = {numbers}
                        numColumns={5}
                        renderItem={({item}) => 
                            <TouchableOpacity style={styles.nb}>
                                <Text style={styles.txt}>{item.number}</Text>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    bg: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 50,
        alignItems: "center",
        justifyContent: "space-between",
    },
    nb: {
        backgroundColor: "red",
        margin: 10,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderColor: "#fff",
        borderWidth: 3,
    },
    txt: {
        fontSize: 24,
    },
});