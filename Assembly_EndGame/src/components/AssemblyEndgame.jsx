import React from "react"
import { languages } from "./languages"
import clsx from 'clsx';
import Confetti from "react-confetti"
import { getFarewellText , getRandomWord  } from "./utils"

export default function AssemblyEndgame() {

    // State value
    const [currentWord, setCurrentWord] = React.useState(()=>getRandomWord())
    const [guessedLetters, setGuessedLetters] = React.useState([])
    console.log(guessedLetters)
    
       // Derived values
    const numGuessesLeft=languages.length-1;
    const wrongGuessesCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length;
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    console.log(isLastGuessIncorrect)

    const isGameWon =currentWord.split("").every(letter=> guessedLetters.includes(letter))

   const isGameLost =wrongGuessesCount >= numGuessesLeft
   const isGameOver = isGameWon || isGameLost
    console.log(wrongGuessesCount)
    /* Static value */
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ? 
                prevLetters : 
                [...prevLetters, letter]
        )
    }
   
    const languageElements = languages.map((lang ,index)=> {
         const isLanguageLost = index < wrongGuessesCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        
        // "chip" is always added.
// If isLanguageLost is true, "lost" is also added.
// If isLanguageLost is false, the expression returns false.
// clsx automatically ignores false, null, undefined, and empty values,
// so the final class becomes either:
// "chip lost" (when the language is lost)
// OR
// "chip" (when the language is not lost)

      const className = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })
    
   const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={index} className={letterClassName}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })
    
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        console.log(className)
        
        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                 aria-disabled={guessedLetters.includes(letter)}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })
     const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
         farewell: !isGameOver && isLastGuessIncorrect
    })
function renderGameStatus(){
    
     if (!isGameOver && isLastGuessIncorrect) {
             return (
                <p  className="farewell-message">
                    {getFarewellText(languages[wrongGuessesCount - 1].name)}
                </p>
            )
        }
    if(isGameWon )
        return (
    <>
            <h2>You Win!</h2>
            <p>Well done 🎉</p>
             <Confetti />
        </>
        )
    if(isGameLost)
        return(
     <>
            <h2>Game Over!</h2>
            <p> You Lost!😢</p>
        </>
    )
    return null;
       
}


function startNewGame(){
     setCurrentWord(getRandomWord())
        setGuessedLetters([])
}

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
          
           <section 
           aria-live="polite"
           role="status"
           className={gameStatusClass}>
                {renderGameStatus()}
            </section>
            <section
             className="sr-only"
              ria-live="polite" 
              role="status"
              >
            <p>
                    {currentWord.includes(lastGuessedLetter) ? 
                        `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>

                 <p>Current word: {currentWord.split("").map(letter => 
                guessedLetters.includes(letter) ? letter + "." : "blank")
                .join(" ")
                }</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button className="new-game"  onClick={startNewGame}>New Game</button>}
        </main>
    )
}
