import { ScrollView, View, Text, StyleSheet, Image ,Pressable} from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={{uri:"https://www.48hourslogo.com/oss/works/2022/01/12/135536140395/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg"}}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Pressable onPress={()=>navigation.navigate('Menu')}>
          <Text style={styles.buttontext}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'yellow',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'yellow',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  buttontext:{
fontWeight:'bold',
alignContent:'center',
justifyContent:'center',
fontSize:39,
//backgroundColor:'yellow',
borderColor:'yellow',
paddingBottom:45,
paddingLeft:100,
paddingRight:80,
borderEndWidth:5,
  },
});