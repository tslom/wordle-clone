import React from 'react';

interface Props {
    letter: string;
    color: string;
}

const KeyboardKey: React.FC<Props> = ({ letter, color }) => {
    return (
        <div className={`flex justify-center items-center w-10 h-16 m-0.5 border-2 rounded-md ${ color === "green" ? "bg-green-800 border-green-800" : (color === "yellow" ? "bg-yellow-500 border-yellow-500" : (color === "accent" ? "bg-accent" : ""))}`}>
            <p className={"text-2xl font-bold uppercase"}>{letter}</p>
        </div>
    );
};

export default KeyboardKey;