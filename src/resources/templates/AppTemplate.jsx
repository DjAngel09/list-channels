import React, { useEffect, useState } from 'react'
import { ModalComponent } from '../components/ModalComponent'
import { getChannels } from '../helpers/getChannels';
import { InfoEvent } from '../components/InfoEventComponent';
import { ChannelsComponent } from '../components/ChannelsComponent';

export const AppTemplate = () => {

  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [openModal, setOpenModal] = useState(false);

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

        <>
          <button className='m-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => setOpenModal(!openModal)} >Abrir Modal</button>
          <ModalComponent open={openModal} setOpenModal={setOpenModal} >

            <div>
              <InfoEvent event={event} />
              <ChannelsComponent channels={channels} setEvent={setEvent} />
            </div>

          </ModalComponent>
        </>

      }
    </>
  )
}
