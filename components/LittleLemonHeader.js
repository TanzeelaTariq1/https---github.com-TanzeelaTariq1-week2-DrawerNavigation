import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{
        backgroundColor: 'yellow',
        
      }}>
      <Text 
      style={{
        fontSize:40,
        color:'black',
        textAlign: 'center',
        paddingLeft:4,
        paddingRight:4,
        flex :0.2,
        fontWeight:'bold',
        justifyContent:"center",
        paddingTop:25,
        }}>Little Lemon </Text>
    </View>
  );
}