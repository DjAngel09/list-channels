export const formatEvents = (events) => {

  let previosFin = 0;
  let arrayEvents = [];

  events.forEach((event, i) => {
    let dateSplit = event.date_begin.split(' ');
    let a = dateSplit[1].split(':'); 
    let dateSplitFin = event.date_end.split(' ');
    let b = dateSplitFin[1].split(':');
    let endMinutes = ((+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2])) / 60;
    let startMinutes = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])) / 60;

    if(i===0){
      startMinutes = 0;
    }else if( i === events.length - 1 ){
      endMinutes = 1440;
    }

    if (previosFin !== startMinutes) {
      arrayEvents.push({
        name: '...',
        initialHour: null,
        endHour: null,
        duration: event.duration,
        description: event.description,
        tiemInMinutes: startMinutes - previosFin,
        unix_begin: i * endMinutes,
        width: (startMinutes - previosFin) * 5
      })
    }

    arrayEvents.push({
      name: event.name,
      initialHour:  `${a[0]}:${a[1]}`,
      endHour: `${b[0]}:${b[1]}`,
      duration: event.duration,
      description: event.description,
      tiemInMinutes: endMinutes - startMinutes,
      unix_begin: event.unix_begin,
      width: (endMinutes - startMinutes) * 5
    });

    previosFin = endMinutes;

  });

  return(arrayEvents);

}