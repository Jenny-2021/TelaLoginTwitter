import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput,  TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView 
    style={styles.background}  >
      {/*this view controls the image*/}
      <View style={styles.containerLogo}>
        <Image
        
        source ={require('./src/assets/logo.png')}
        
        />
        {/*this view controls the container of inputs*/}
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChargeText={()=> {}}
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChargeText={()=> {}}
        />
        {/*Makes text opaque on click */}
        <TouchableOpacity style={styles.btnSubmit}>
          <Text tyle={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
        
      </View>
    </KeyboardAvoidingView>
  );
}
/*this const controls the value of each "container"*/ 
const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#00aced',
      },
    containerLogo:{ 
        flex:0,
        alignItems:'center',
        justifyContent:'center',  
        width:'90%',
        height:"40%", 
        
      },

      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        height:"100%", 
      },
      
     
      input:{
        backgroundColor:'#fff',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10,
      },
      btnSubmit:{
      backgroundColor:'#008abe',
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
      },
      submitText:{
        color:'#FFF',
        fontSize:18,
      }
    
});