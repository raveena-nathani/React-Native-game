import { View, StyleSheet } from "react-native";
import Colors from "../../screens/constants/colors";

const Card = ({children}) => {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800 ,
        borderRadius: 8,
        elevation: 4, //for shadow in android devices
        //below 4 properties for shadow in ios devices
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})