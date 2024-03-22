import React, { useEffect, useState } from 'react'
import { formatEvents } from '../helpers/channelHelper';

export const EventsComponent = ({ channel, setEvent }) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(formatEvents(channel.events));
  }, [])


  return (
    <>
      {events.length > 0 ?
        <div className='flex ml-2 h-[88px]' >
          {events.map(event => (
            <div
              style={{
                width: event.width
              }}
              key={event.unix_begin}
              className={`border border-[#585858] truncate p-2 bg-[#1a1a1a] hover:bg-[#44454f]`}
              onMouseOver={() => setEvent(event)}
            >
              <p>
                {event.name}
              </p>
              <p>{event.initialHour}-{event.endHour}</p>
            </div>
          ))}
        </div>
        :
        <p>Cargando...</p>
      }
    </>
  )
}
