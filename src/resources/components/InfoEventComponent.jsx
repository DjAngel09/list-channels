import React from 'react'

export const InfoEvent = ({ event }) => {
    return (
        <div className='fixed flex w-full bg-[#000000d1] text-white px-2 h-[30%] top-0 overflow-y-auto items-center'>
            <div className='w-full max-w-2xl' >
                <h1 className='text-5xl mb-7' >{event.name}</h1>
                <p className='mb-3' >{`${event.initialHour}Hs a ${event.endHour}Hs ${event.duration}`}</p>
                <p>{event.description}</p>
            </div>
        </div>
    )
}
