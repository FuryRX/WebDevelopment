import React from 'react'

function Card(props){
    console.log(props.item.title)
    return(
        <div className='mt-10 flex font-inter'>
            <img src= {props.item.imageUrl} className="w-[125px] h-[168px] rounded-md ml-10 mt-4"/>

            <div className='ml-8 py-4 w-[326px]'>
                <span>📍</span>
                <span className='text-projectBlack text-xs tracking-widest'>{props.item.location}</span>
                <a href={props.item.googleMapsUrl}><span className='ml-2 underline text-projectGrey text-xs align-baseline'>View on Google Maps</span></a>
                <h1 className='text-projectBlack text-2xl mt-1 font-semibold tracking-wider'>{props.item.title}</h1>
                <p className='text-projectBlack text-xs mt-4 font-semibold'>{props.item.startDate} {props.item.endDate}</p>
                <p className='text-projectBlack text-xs mt-2'>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card
