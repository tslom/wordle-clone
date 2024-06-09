import React from 'react';
import Letter from "@/components/Letter";

interface Props {
    guess: string;
    word?: string;
    className?: string;
}

const Word: React.FC<Props> = ({ guess, className, word}) => {
    let letters: React.JSX.Element[];
    if (word) {
        let tempWord = word;
        let colorArray = [];
        for (let i = 0; i < word.length; i++) {
            if (guess[i] === word[i]) {
                colorArray.push("green")
            } else if (tempWord.includes(guess[i])) {
                tempWord = tempWord.replace(guess[i], "");
                colorArray.push("yellow");
            }
            else
                colorArray.push("accent");
        }
        letters = guess.split("").map((letter, index) => { return <Letter letter={letter} color={colorArray[index]}/> })
    }
    else
        letters = guess.split("").map((letter, index) => { return <Letter letter={letter} /> })

    return (
        <div className={`flex ${className}`}>
            {letters}
        </div>
    );
};

export default Word;