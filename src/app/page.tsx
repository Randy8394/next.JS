/** @format */
'use client';
import Image from "next/image";
import Accordion from "./components/accordion";
import { faqs } from "../../public/data";


export default function Home() {
  return (
    <main className="min-h-screen relative p-4 pb-10 bg-lime-400">
      <section className="relative transition-all mx-auto w-full max-w-md sm:max-w-2xl md:max-w-3xl rounded-lg flex flex-col gap-4 mt-40 sm:mt-24 p-6">
        <h1 className="flex gap-3 items-center">
          <Image src="/home.png" alt="home" width={30} height={40}/>
          <span className="font-bold text-4xl">FAQs</span>
        </h1>
         <div className="flex flex-col gap-4 divide-y">
        {faqs.map((d, i) => (
         <Accordion answer={d.answer} question={d.question} isAccordionOpen={d.isAccordionOpen} key={i}/>))}
        </div>
      </section>
    </main>
  );
}
