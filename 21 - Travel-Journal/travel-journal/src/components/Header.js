import React from 'react'

function Header(){
    return(
        <section className="w-[550px] h-[55px] bg-projectRed flex justify-center items-center gap-1" >
            <img src="../assets/worldwide.png" className='w-[24px] h-[24px]' />
            <h1 className="text-sm text-white font-inter">
                my travel journal
            </h1>
        </section>
    )
}

export default Header