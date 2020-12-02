import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
StyleSheet,
} from "react-native";



export default class WriteStory extends React.Component {


render(){
  return(


 
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Title of the Story"
            />

             <TextInput
              style={styles.inputBox}
              placeholder="Author of the Story"
            />

             <TextInput
              style={styles.inputBox}
              placeholder="Write a  Story"
            />
<TouchableOpacity
            style={styles.submitButton}

          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          </View>
 )
}
}