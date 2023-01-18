import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import NumberContainer from "../components/games/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons' //present default when project is created with expo

let minBoundary = 1;
let maxBoundary = 100;
function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }

const GameScreen = ({userNumber, onGameOver}) => {
		const initialGuess = generateRandomBetween(1,100,userNumber );
		const [currentGuess, setCurrentGuess] = useState(initialGuess);

		useEffect(() => {
			if(currentGuess === userNumber){
				  onGameOver();
			}
		}, [currentGuess, userNumber, onGameOver])
	
		function nextGuessHandler(direction){ //direction => 'lower','greater'

			if(
				(direction === 'lower' && currentGuess < userNumber ) || 
				(direction === 'greater' && currentGuess > userNumber) 
			){
				 Alert.alert("Don't lie", "You know this is wrong!", 
				[{text: 'Sorry!', style:'cancel'}]);
				return;
			}


			if(direction === 'lower'){
				maxBoundary = currentGuess;
			}else{
				minBoundary = currentGuess + 1;
			}

			const newNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber);
			setCurrentGuess(newNumber); 
		}

    return (
        <View style={styles.screen}>
           <Title>Opponent's Guess</Title>
					 <NumberContainer>{currentGuess}</NumberContainer>
						<Card>
						<InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
							<View style={styles.buttonsContainer}>
								<View style={styles.buttonContainer}>
										<PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
											<Ionicons name="md-add" size={24} color="white"/>
										</PrimaryButton>
										
								</View>
								<View style={styles.buttonContainer}>
									 <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} >
											<Ionicons name="md-remove" size={24} color="white"/>
										</PrimaryButton> 
								</View>
							</View>
							
						
						</Card>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
		instructionText: {
			marginBottom: 12
		},
		buttonsContainer: {
			flexDirection: 'row'
		},
		buttonContainer: {
			flex: 1
		}
}) 