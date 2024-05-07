'use client';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';

const karla = Montserrat({ subsets: ['latin'] });

const Card = ({ model = "Camry", rate = 0}) => {
    return <div className={`${karla.className} bg-blue-400 hover:bg-blue-500 duration-200 cursor-pointer text-white p-12 w-1/3 rounded-lg m-4`}>
        <div className="w-100 text-center">{model}</div>
        <div className="w-100 text-center">${rate}</div>
    </div>

}

export default Card;