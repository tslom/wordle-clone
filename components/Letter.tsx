import React from 'react';

interface Props {
    letter: string;
    color?: string;
}

const Letter: React.FC<Props> = ({ letter, color }) => {
    return (
        <div className={`w-20 h-20 flex justify-center items-center m-1 border-2 rounded-md ${ color === "green" ? "bg-green-800 border-green-800" : (color === "yellow" ? "bg-yellow-500 border-yellow-500" : (letter !== " " ? "bg-accent" : ""))}`}>
            <p className={"text-4xl font-bold uppercase"}>{letter}</p>
        </div>
    );
};

export default Letter;