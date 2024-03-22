import { formatEvents } from "../../../resources/helpers/channelHelper";

describe('formatEvents', () => {
  it('debería devolver un array vacío si se proporciona un array vacío', () => {
    const events = [];
    const result = formatEvents(events);
    expect(result).toEqual([]);
  });

  it('debería formatear correctamente un solo evento', () => {
    const events = [{
      name: 'Evento 1',
      date_begin: '2024-03-22 09:00:00',
      date_end: '2024-03-22 10:00:00',
      duration: '1 hora',
      description: 'Descripción del evento 1',
      unix_begin: 1616413200
    },
    {
      name: 'Evento 2',
      date_begin: '2024-03-22 10:00:00',
      date_end: '2024-03-22 11:00:00',
      duration: '1 hora',
      description: 'Descripción del evento 2',
      unix_begin: 1616413200
    }];


    const result = formatEvents(events);
    expect(result).toEqual([{
      name: 'Evento 1',
      initialHour: '09:00',
      endHour: '10:00',
      duration: '1 hora',
      description: 'Descripción del evento 1',
      tiemInMinutes: 600,
      unix_begin: 1616413200,
      width: 3000
    },
    {
      name: 'Evento 2',
      initialHour: '10:00',
      endHour: '11:00',
      duration: '1 hora',
      description: 'Descripción del evento 2',
      tiemInMinutes: 840,
      unix_begin: 1616413200,
      width: 4200
    }]);
  });

});