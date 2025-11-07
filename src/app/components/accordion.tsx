import React from 'react'
/** @format */
import Image from 'next/image'
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {
    isOpen?: boolean;
    onToggle?: () => void;
    question: string;
    answer: string;
}

export default function Accordion({ isOpen = false, onToggle, question, answer }: Props){
    const [animationParent] = useAutoAnimate<HTMLDivElement>();

    return(
    <div ref={animationParent} className='flex flex-col gap-4 py-4'>
            {/* Questions */}
            <p onClick={onToggle} className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer wx-200">
            <span>
                {question}
            </span>
            {isOpen ? (
            <Image src="/minus-circle.png" alt="circle-minus" width={20} height={5} className='h-6 w-auto'/>
            ):(
            <Image src="/plus-circle.png" alt="circle-plus" width={20} height={5} className='h-6 w-auto'/>
            )}
            </p>

            {isOpen && (
            <p className='text-sm sm:text-base'>{answer}</p>)}
        </div>
    )
}