import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Jay</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm an Front-End/Fullstack Developer from The Netherlands.
            <br />
            I publish
            that content on my YouTube channel{' '}
            <a
               href="https://www.youtube.com/channel/UC_oo74IhOQXVzXZy_buTVAw"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Jay programmer
            </a>{' '}
             subscribe.
         </p>
      </div>
   )
}

export default Intro;