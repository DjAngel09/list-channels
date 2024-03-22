import React, { useEffect, useState } from 'react'
import { ModalComponent } from '../components/ModalComponent'
import { getChannels } from '../helpers/getChannels';
import { InfoEvent } from '../components/InfoEventComponent';
import { ChannelsComponent } from '../components/ChannelsComponent';

export const AppTemplate = () => {

  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});

  useEffect(() => {

    setLoading(true);
    const onGetChannels = async () => {
      try {

        const data = await getChannels();
        setChannels(data.response.channels);
        setLoading(false);

      } catch (error) {

        console.log(error);
        setLoading(false);

      }
    }

    onGetChannels();

  }, []);

  return (
    <>
      {loading ? <h1>Cargando...</h1> :

        <ModalComponent open={true} >

          <div>
            <InfoEvent event={event} />
            <ChannelsComponent channels={channels} setEvent={setEvent} />
          </div>

        </ModalComponent>

      }
    </>
  )
}
