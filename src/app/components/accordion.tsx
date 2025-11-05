import React from 'react'
/** @format */
import Image from 'next/image'
import { useState } from 'react'; 
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {
    isAccordionOpen?: boolean;
    question: string;
    answer: string;
}

export default function Accordion(props: Props){
    const [isAccordionOpen, setAccordion] = useState(props.isAccordionOpen || false);
    const [animationParent] = useAutoAnimate();
    function toggleAccordion() {
        setAccordion(!isAccordionOpen);
    }
    return(
        <div ref={animationParent} className='flex flex-col gap-4 py-4'>
            {/* Questions */}
            <p onClick={toggleAccordion} className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer wx-200">
            <span>
                {props.question}
            </span>
            {isAccordionOpen ? (
            <Image src="/minus-circle.png" alt="circle-minus" width={20} height={5} className='h-6 w-auto'/>
            ):(
            <Image src="/plus-circle.png" alt="circle-plus" width={20} height={5} className='h-6 w-auto'/>
            )}
            </p>

            {isAccordionOpen && (

            <p className='text-sm sm:text-base'>{props.answer}</p>)}
        </div>
    )
}