import { useState } from 'react';
import { 
  TextInput, 
  View,  
  StyleSheet, 
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView, //helps to move the view up when keyboard is opened
  ScrollView 
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import Colors from './constants/colors';
import InstructionText from '../components/ui/InstructionText';


const StartGameScreen = ({onPickNumber}) => {
		const [enteredNumber, setEnteredNumber] = useState('');
     
    // whenever we are switching the orientations, because based on that width and height will be calculated
    const { width, height } = useWindowDimensions(); 

		const numberInputHandler = (text) => {
			setEnteredNumber(text);
		}

		const resetInputHandler = () => {
			setEnteredNumber('')
		}

		const confirmInputHandler = () => {
			const chosenNumber = +enteredNumber;

			if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
				Alert.alert(
					'Invalid number',
					'Number has to be between 1 and 99',
					[{text: 'Okay', style:"destructive", onPress:resetInputHandler}])
					return;
			}

			onPickNumber(chosenNumber);
		}

    const marginTop = height < 400 ? 30 : 100;

    return (
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position"> 
          <View style={[styles.rootContainer, {marginTop}]}>
            <Title>Guess My Number </Title>
            <Card style={styles.inputContainer}>
              <InstructionText >Enter a number</InstructionText>
            <TextInput 
              style={styles.numberInput} 
              maxLength = {2} 
              keyboardType="number-pad" 
              autoCapitalize='none' 
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler} 
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
			);
}

export default StartGameScreen; 

const styles = StyleSheet.create({
    screen: {
      flex: 1
    },  
		rootContainer: {
			flex: 1,
			// marginTop: 100,
			alignItems: 'center'
		},

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
		buttonsContainer: {
			flexDirection: 'row'
		},
		buttonContainer: {
			flex: 1
		}
})