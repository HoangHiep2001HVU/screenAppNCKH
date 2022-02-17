import React from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Animated, Easing } from "react-native";
import bg from "../assets/bg_findnumber.jpg";

export class LayoutNumber extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1),
        }
    }

    handleClick() {
    
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    check(number){
        if(number==1){
            this.setState({check_number: 1});
        }
        else{
            if(this.state.check_number==0){
                console.log("thua")
            }
            else{
                const check= this.state.check_number;
                if(check==number-1){
                    this.setState({check_number: number});
                    if(number==this.state.numbers.length){
                        console.log("win");
                    }
                }
                else{
                    console.log("thua");
                }
            }
        }
    }

    render(){
        const { fadeAnim } = this.state;
        const { item } = this.props;
        console.log(item);
        // const arr_nb= this.arr_number(numbers);
        return(
            <Animated.View style={{opacity: fadeAnim}}>
                <TouchableOpacity style={styles.nb} onPress={()=>this.handleClick()}>
                    <Text>{item.number}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

export default class FindNumbers extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            numbers: [],
            check_number: 0,
        };
    }

    componentDidMount(){
        const max = 30;
        const arr_number= [];
        for(let i= 1; i<=max; i++){
            const arr = {id: i, number: i};
            arr_number.push(arr);
        }
        const arr = arr_number.sort(() => Math.random() - 0.5);
        this.setState({numbers: arr});
    }

    render(){
        const { numbers, check_number , _opactity } = this.state;

        // const arr_nb= this.arr_number(numbers);
        return(
            <ImageBackground source={bg} style={styles.bg}>
                <View style={styles.title}>

                </View>
                <View style={styles.container}>
                    <FlatList
                        data = {numbers}
                        numColumns={5}
                        renderItem={({item}) => 
                            <LayoutNumber item = {item} />
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
        fontSize: 24,
    }
});