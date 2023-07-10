import React, {useState} from 'react';
import { View, StyleSheet, Button, Text ,TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {


function speak(){
  Speech.speak(text, {
    language: 'en-US'
  });
}

const playAudio1 = () => {
  const audioText = 'Could you bring me the menu?';
  Speech.speak(audioText, { language: 'en-US' });
};

const playAudio2 = () => {
  const audioText = 'What is your name?';
  Speech.speak(audioText, { language: 'en-US' });
};

const playAudio3 = () => {
  const audioText = 'Good morning Good night';
  Speech.speak(audioText, { language: 'en-US' });
};

return (
  <View style={styles.container}>
      <View style={styles.square}>
        <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Could you bring me the menu?</Text>
         <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Você poderia me trazer o cardápio?</Text>
         <TouchableOpacity style={styles.button} onPress={playAudio1}>
         <FontAwesome name="microphone" size={24} color="black" />
        </TouchableOpacity>
      </View>


      <View style={styles.square}>
        <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>What is your name?</Text>
         <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Qual o seu nome?</Text>
         <TouchableOpacity style={styles.button} onPress={playAudio2}>
         <FontAwesome name="microphone" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.square}>
        <Text style={[styles.audioText, { alignSelf: 'flex-start' }]}>Good morning / Good night</Text>
        <Text style={[styles.subText, { alignSelf: 'flex-start' }]}>Bom Dia / Boa Noite</Text>
        <TouchableOpacity style={styles.button} onPress={playAudio3}>
        <FontAwesome name="microphone" size={24} color="black" />
        </TouchableOpacity>
      </View>
     
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F1EFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  square: {
    width: 390,
    height: 121,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 20,
  },

audioText: {
  fontSize: 16,
  textAlign: 'left',
},
subText: {
  fontSize: 12,
  marginTop: 10,
  textAlign: 'left',
},
button: {
 
  
  marginTop: 10,
},
buttonText: {
  fontSize: 16,
  color: 'white',
  textAlign: 'center',
},
});
