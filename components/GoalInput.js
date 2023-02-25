import { View, TextInput, Button, StyleSheet,Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText]=useState('');

    function goalInputHandler(enteredText){
    
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goals.jpg')} />
      <TextInput style={styles.textInput} 
      placeholder='your course goal'
      onChangeText={goalInputHandler} 
      value={enteredGoalText} />

      <View style={styles.buttonContainer}>
    <View style={styles.button}>
        <Button title='add goal' onPress={addGoalHandler}></Button>
    </View>
      <View style={styles.button}>
         <Button title="Cancel" onPress={props.onCancel}/>
      </View>
       

      </View>
     

     
      </View>
      </Modal>
)

};

export default GoalInput;

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        backgroundColor:'#f5eec2',
        borderRadius:8
      },
      image:{
        width:100,
        height:100,
        margin:20,
        borderRadius:8
      },
      textInput:{
        borderWidth:1,
        borderColor:'blue',
        width:'100%',
        padding:8,
        borderRadius:9
      }
      ,
      buttonContainer:{
        flexDirection:'row',
        marginTop:16,
      },
      button:{
        width:100,
        marginHorizontal:8
      }
});