import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native';


export default function Homescreen({ navigation }) {

  const [Crypto, SetCrypto] = useState([
    { name: 'Bitcoin', key: '1', marketprice: '40000 USD' },
    { name: 'Ethereum', key: '2', marketprice: '3000 USD' },
    { name: 'Bitcoin cash', key: '3', marketprice: '8000 USD' },
    { name: 'Ethereum Classic', key: '4', marketprice: '2500 USD' },
    { name: 'Ripple', key: '5', marketprice: '1 USD' },
    { name: 'Shiba Inu', key: '6', marketprice: '0.004 USD' },
    { name: 'Solana', key: '7', marketprice: '40000 USD' },
    { name: 'Dogecoin', key: '8', marketprice: '3000 USD' },
    { name: 'Bitcoin Gold', key: '9', marketprice: '8000 USD' },
    { name: 'Near', key: '10', marketprice: '2500 USD' },
    { name: 'Monero', key: '11', marketprice: '1 USD' },
    { name: 'Iota', key: '12', marketprice: '0.004 USD' },
    { name: 'Manna', key: '13', marketprice: '40000 USD' },
    { name: 'Uniswap', key: '14', marketprice: '3000 USD' },
    { name: 'Litecoin', key: '15', marketprice: '8000 USD' },
    { name: 'ChainLink', key: '16', marketprice: '2500 USD' },
    { name: 'USD Coin', key: '17', marketprice: '1 USD' },
    { name: 'USD Tether', key: '18', marketprice: '0.004 USD' },
  ]);

  return (



    <View style={styles.container}>


      <View style={styles.view}>
        
         <Image style={styles.img} source={require('../assets/Cryptodataapplogo.png')}></Image>
      </View>
      <ScrollView>

        {Crypto.map((item => {
          return (
            <View key={item.key} style={styles.list}>

              <Text style={styles.text}>{item.name} </Text>
              <Text>{item.marketprice}</Text>
            </View>


          )
        }))

        }
      </ScrollView>



      <TouchableOpacity >
        <Text style={styles.button}
        onPress={() =>  navigation.push('Appprofile') }
        > Profile Settings</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0,
    borderRadius: 0,
  },

  list: {
    backgroundColor: 'limegreen',
    borderWidth: 3,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 6,

  },
  text: {
    borderBottomWidth: 3,
    fontSize: 15,
    fontWeight: 'bold',

  }

  ,

  text3: {
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    align: 'center',
    backgroundColor: 'yellow',

  }
  ,
  button: {
    borderWidth: 5,
    textAlign: 'center',
    width: 400,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor:'yellow',
    fontWeight: 'bold',

  },
  img:{
 paddingLeft:10,
 paddingRight:10,
 height: 100,
 width:220,
 borderWidth: 5,
 borderRadius: 0,

  },

view: {
  backgroundColor: 'yellow',
  borderColor: 'black',
  borderWidth: 5,
  borderRadius: 10,
  width: 360,
  paddingLeft: 60,
  paddingTop: 20,
  paddingBottom: 20,
  
}
,

})