import { useState } from 'react';
import { Text,TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import Colors from './constants/colors';
import InstructionText from '../components/ui/InstructionText';


const StartGameScreen = ({onPickNumber}) => {
		const [enteredNumber, setEnteredNumber] = useState('');

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

    return (
			<View style={styles.rootContainer}>
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
			);
}

export default StartGameScreen; 

const styles = StyleSheet.create({
		rootContainer: {
			flex: 1,
			marginTop: 100,
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