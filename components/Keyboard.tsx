import React from 'react';
import KeyboardKey from "@/components/KeyboardKey";

interface Props {
    guesses: string[];
    word: string;
}

const Keyboard: React.FC<Props> = ({ guesses, word }) => {
    const letters = new Set(guesses.join(""));
    const alpha = "abcdefhijklmnopqrstuvwxyz";
    const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    function getColor(letter: string) {
        if (letters.has(letter)) {
            if (word.includes(letter)) {
                for (let guess of guesses) {
                    while (guess.includes(letter)) {
                        if (guess.indexOf(letter) === word.indexOf(letter))
                            return "green";
                        guess = guess.replace(letter, "");
                    }
                }
                return "yellow";
            }
            return "accent";
        }
        return "";
    }
    let listKeys: React.JSX.Element[][] = keyboard.map((row: string) => {
        return row.split("").map((letter) => {
            return <KeyboardKey letter={letter} color={getColor(letter)}/>
        })
    })
    return (
        <div>
            <div className={"flex justify-center"}>
                {listKeys[0]}
            </div>
            <div className={"flex justify-center"}>
                {listKeys[1]}
            </div>
            <div className={"flex justify-center"}>
                {listKeys[2]}
            </div>
        </div>
    );
};

export default Keyboard;