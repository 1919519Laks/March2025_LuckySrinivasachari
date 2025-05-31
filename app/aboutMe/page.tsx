"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function AboutMePage() {
  let facts: string[] = ["1. The digits 1-9 add up to 45, and this is called the 'Rule of 45' in sudoku", "2.  The modern Sudoku was most likely designed anonymously by Howard Garns" , "3. Variant sudoku competitions exist worldwide, organized by the World Puzzle Association." , "4. The \"German whispers\" variant sudoku rule was invented by Axel Gebhardt", "5. There exists a Variant sudoku puzzle so convoluted that only 2 people have been known to solve it - \"Word puzzle\". Can't list a link due to Securly", "fact 6", "fact 7", "act 8", "act 9", "fact 10"];
  const [fact, setFact] = useState("");
  
  return (
    <div>
      <h1 className={title()}>About Me!</h1>
      <Button onPress={() => {setFact(facts[Math.floor(Math.random()*10)])}}> Press for a fact</Button>
      <br></br>
      <p>I am a cryptid, there are no confirmed photos of meee✨</p>
      <h2 className="text-center text-pretty size-48">Who am I and why should you care?</h2>
      {/* I AM IN YOUR WALLS, BEAUTIFUL */}
      <br /><br /><br /><br />
      <p>{fact}</p>
      <img src="art_dahlia.jpg" alt="Error" height={300} width={400}></img>
      <Button as={link} href="https://issaquah.instructure.com/?login_success=1">Canvas</Button>
      <br />
      <p>flexbox pracitce</p>
      <div className="flex justify-between border-1 border-black p-4">
        {/* parent container */}
        <div className="m-4 border-5 border-green-700">
          <p>grandchild #1</p>
        </div>
        <div className="w-full m-8 border-2 border-red-700">
          <p>grandchild #2</p>
          <p>content</p>
        </div>
      </div>
      <p>tailwainf prac</p>
      <div className="border-black border-2">
        {/* tailwind demo 5/15 */}
        <p>Tailwind demo test day.</p>
        <p className="text-green-600">testing out the text color</p>
        <p className="bg-yellow-600">testing background color</p>
        <div>
          <p className="m-9"> margin test go brr </p>
          <p className="p-4"> padding tsting AAA</p>
        </div>
      </div>
    </div>
  );
}
