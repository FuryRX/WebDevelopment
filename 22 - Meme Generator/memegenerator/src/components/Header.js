import React from 'react'

function Header(){
    return (
        <nav className='w-[550px] h-[65px] flex items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-solid'>
            <div className='flex items-center gap-x-2 border-2 border-solid'>
                <img className='.object-cover h-8 w-8 ml-4' src="../images/meme.png" />
                <h1 className='text-xl text-white'>
                    Meme Generator
                </h1>
            </div>
            
            <h3 className='text-xs text-white border-2 border-solid'>
                React Course - Project 3
            </h3>

        </nav>
        
    )
}

export default Header