import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../screens/constants/colors";

const NumberContainer = ({children}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
    )
}

export default NumberContainer;

//Dimensions.get has two options: screen(full screen) & window(full screen except status bar)
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 420 ? 12 : 24,
    margin: deviceWidth < 420 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: deviceWidth < 420 ? 28 : 36,
    fontWeight: 'bold'
  }
})