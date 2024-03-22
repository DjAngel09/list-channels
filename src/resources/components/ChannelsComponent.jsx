import React from 'react'
import { EventsComponent } from './EventsComponent'

export const ChannelsComponent = ({ channels = [], setEvent }) => {

  const hours = ['00.00hs', '00.30hs', '01.00hs', '01.30hs', '02.00hs', '02.30hs', '03.00hs', '03.30hs', '04.00hs', '04.30hs', '05.00hs', '05.30hs', '06.00hs', '06.30hs', '07.00hs', '07.30hs', '08.00hs', '08.30hs', '09.00hs', '09.30hs', '10.00hs', '10.30hs', '11.00hs', '11.30hs', '12.00hs', '12.30hs', '13.00hs', '13.30hs', '14.00hs', '14.30hs', '15.00hs', '15.30hs', '16.00hs', '16.30hs', '17.00hs', '17.30hs', '18.00hs', '18.30hs', '19.00hs', '19.30hs', '20.00hs', '20.30hs', '21.00hs', '21.30hs', '22.00hs', '22.30hs', '23.00hs', '23.30hs', '00.00hs']

  return (
    <div className='text-white flex bg-black fixed top-[30%] h-[70%] overflow-auto w-full flex-wrap' >
      <div className='flex mb-2 sticky top-0 z-10 text-center' >
        <div className='w-[208px] text-white bg-black pt-1 border border-[#585858]'>
          <p>HOY</p>
        </div>
        {hours.map(hour => (
          <div className='w-[150px] text-white bg-black py-1 border border-[#585858]'>
            <p>{hour}</p>
          </div>
        ))}
      </div>
      <div className='flex'>
        <div className='w-[200px]'>
          {
            channels.map((channel, index) => (
              <div className='flex items-center bg-[#1a1a1a] px-2 rounded-lg my-2 h-20 justify-center' >
                <p>{channel.number}</p>
                <img className='max-w-[120px]' src={channel.image} alt={channel.name} />
              </div>
            ))
          }
        </div>
        <div className='pt-2' >
          {
            channels.map((channel, index) => (
              <EventsComponent channel={channel} setEvent={setEvent} />
            ))
          }
        </div>
      </div>
    </div>
  )
}