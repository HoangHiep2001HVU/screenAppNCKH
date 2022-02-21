import React from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Animated, Easing } from "react-native";
import bg from "../assets/bg_findnumber.jpg";

global.count = 0;
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
            count =1;
        }
        else{
            const { navigation } = this.props;
            if(count==0){
                navigation.navigate("FindNumber_Notification", {
                    check_nb: false
                })
            }
            else{
                if(count==(number-1)){
                    count=number;
                    if(count==this.props.max){
                        navigation.navigate("FindNumber_Notification", {
                            check_nb: true
                        })
                    }
                }
                else{
                    navigation.navigate("FindNumber_Notification", {
                        check_nb: false
                    })
                }
            }
        }

        console.log("nb: " + number + " count: " + count);
    }

    render(){
        const { fadeAnim } = this.state;
        const { item } = this.props;
        // const arr_nb= this.arr_number(numbers);
        return(
            <Animated.View style={{opacity: fadeAnim}}>
                <TouchableOpacity style={styles.nb} onPress={()=>{
                    this.handleClick(),
                    this.check(item.number)
                }}>
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
        };
    }

    componentDidMount(){
        const max = 5;
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
                            <LayoutNumber max={this.state.numbers.length} item = {item} navigation={this.props.navigation}/>
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