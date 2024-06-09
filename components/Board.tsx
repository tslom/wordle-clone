"use client"
import React, {useEffect, useState} from 'react';
import Word from "@/components/Word";
import Keyboard from "@/components/Keyboard";

const Board = () => {
    const [word, setWord] = useState("");
    const [dictionary, setDictionary] = useState<string[]>([]);

    const [guess, setGuess] = useState("");
    const [board, setBoard] = useState<string[]>([]);
    const [extra, setExtra] = useState<string[]>(Array(5).fill("     "));

    const [win, setWin] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const fetchDictionary = async () => {
            const res = await fetch("/wordlist.txt");
            const text = await res.text();
            const wordList = text.split('\r\n').filter(word => word.length === 5);
            setDictionary(wordList);
            setWord(wordList[Math.floor(Math.random() * wordList.length)]);
        };

        fetchDictionary();
    }, [])

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Backspace" && guess.length > 0) {
                setGuess(guess.substring(0, guess.length - 1));
            } else if (isAlpha(event.key) && guess.length < 5) {
                setGuess(guess + event.key);
            }
            else if (event.key === "Enter" && guess.length === 5 && board.length < 6 && dictionary.includes(guess)) {
                setBoard([...board, guess]);
                setExtra(extra.slice(0, -1));
                setGuess("");
                if (guess === word) {
                    setFinish(true);
                    setWin(true);
                } else if (board.length === 6) {
                    setFinish(true);
                }

            } else if (event.key === "Enter") {
                wrong();
            }


        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [guess, board, extra]);

    const [isWrong, setWrong] = useState(false);

    const wrong = () => {
        setWrong(true);

        setTimeout(() => {
            setWrong(false);
        }, 250);
    };

    return (
        <div className={"flex flex-col min-w"}>
            {word}
            {board.map((guess) => <Word guess={guess} word={word}/>)}
            {board.length < 6 && <Word guess={guess.padEnd(5)} className={`outline rounded-lg ${isWrong ? "wrong" : "" }`} />}
            {extra.map((guess) => <Word guess={guess} />)}
            <Keyboard guesses={board} word={word}/>
        </div>
    );
};

function isAlpha(char: string) {
    const regex = /[a-zA-Z]/;
    return regex.test(char) && char.length == 1;
}



export default Board;