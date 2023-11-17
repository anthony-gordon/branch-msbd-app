
function generateShipMessage(variantData, settings){
    let buffer = parseInt(settings.buffer);
    let dtcProcessingTimeMessage = settings.dtcProcessingTimeMessage;
    let dtcDateAvailableMessage = settings.dtcDateAvailableMessage;
    let b2bProcessingTimeMessage = settings.b2bProcessingTimeMessage;
    let b2bDateAvailableMessage = settings.b2bDateAvailableMessage;
    let dtcDefaultShippingRange = parseInt(settings.dtcDefaultShippingRange);
    let b2bDefaultShippingRange = parseInt(settings.b2bDefaultShippingRange);
    let message = '';

    let shippingProcessingMessage = '';

      if (variantData.overrideMessage !== ""){
        shippingProcessingMessage = variantData.overrideMessage;
      } else {
        
        let processingTimeDifference =  parseInt(variantData.processingTime);
        let b2b_product = variantData.b2bProduct;
        let date = new Date(variantData.dateAvailable);
        let bufferDays = buffer == 0 ? 0 : parseInt((((buffer)) * 7) / 5);

        let hours = Math.floor(date.getTimezoneOffset() / 60);

        if(hours !== 0){
        if(hours > 0){
            date.setDate(date.getDate() + 1);
        }
        }

        date.setDate(date.getDate() + bufferDays);

        let dateDifference = Math.ceil(parseFloat((new Date(date) - new Date()) / (1000 * 3600 * 24)));
        let daysUntilAvailable = dateDifference > processingTimeDifference ? dateDifference : processingTimeDifference;
        let weeksUntilAvailable = Math.round(daysUntilAvailable / 7);

        if(dateDifference > processingTimeDifference){
          let nextMonday = date;
          const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];

          nextMonday.setDate(nextMonday.getDate() + ((7 - nextMonday.getDay()) % 7 + 1) % 7);
          const nth = function(d) {
            if (d > 3 && d < 21) return `${d}th`;
            switch (d % 10) {
              case 1:  return `${d}st`;
              case 2:  return `${d}nd`;
              case 3:  return `${d}rd`;
              default: return `${d}th`;
            }
          }

        let dateAvailableDescription = `the week of ${monthNames[nextMonday.getMonth()]} ${nth(nextMonday.getDate())}`;

          if (b2b_product){
            message = b2bDateAvailableMessage;
            shippingProcessingMessage = message.replace(`#date_available_description#`, dateAvailableDescription);
          } else {
            message = dtcDateAvailableMessage;
            shippingProcessingMessage = message.replace(`#date_available_description#`, dateAvailableDescription);
          }
        } else {
          if (b2b_product){
            let range = b2bDefaultShippingRange;
            let processingTimeDescription = `in ${weeksUntilAvailable > 1 && weeksUntilAvailable > range ? weeksUntilAvailable - range : 1}-${weeksUntilAvailable > 1 ? weeksUntilAvailable + range : 1 + (range * 2)} weeks`
            message = b2bProcessingTimeMessage;
            shippingProcessingMessage = message.replace(`#processing_time_description#`, processingTimeDescription);
          } else {
            let range = dtcDefaultShippingRange;
            let processingTimeDescription = `in ${daysUntilAvailable > 1 && daysUntilAvailable > range ? daysUntilAvailable - range : 1}-${daysUntilAvailable > 1 ? daysUntilAvailable + range : 1 + (range * 2)} business days`
            message = dtcProcessingTimeMessage;
            shippingProcessingMessage = message.replace(`#processing_time_description#`, processingTimeDescription);
          }
        }
      }  

    return shippingProcessingMessage
}

export function returnCurrentShipDateStrings(currentData, settings){
    let currentShipDateStrings = {};

    for (const [key, value] of Object.entries(currentData)) {
        let shipMessage = generateShipMessage(JSON.parse(value), settings);
        currentShipDateStrings[`${key}`] = shipMessage;
      }

    return currentShipDateStrings
}
