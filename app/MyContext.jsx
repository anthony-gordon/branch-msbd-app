import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {

  const [sharedState, setSharedState] = useState('Initial value');
  const [buffer, setBuffer] = useState(5);
  const [defaultProcessingTime, setDefaultProcessingTime] = useState(1);
  const [dtcDefaultShippingRange, setDtcDefaultShippingRange] = useState(1);
  const [b2bDefaultShippingRange, setB2bDefaultShippingRange] = useState(1);
  const [dtcDateAvailableMessage, setDtcDateAvailableMessage] = useState('Ships for free #date_available_description#');
  const [dtcProcessingTimeMessage, setDtcProcessingTimeMessage] = useState('Ships for free #processing_time_description#');
  const [b2bDateAvailableMessage, setB2bDateAvailableMessage] = useState('Ships with white glove installation #date_available_description#');
  const [b2bProcessingTimeMessage, setB2bProcessingTimeMessage] = useState('Ships with white glove installation #processing_time_description#');
  const [allProducts, setAllProducts] = useState({});

  return (
    <MyContext.Provider value={{
        sharedState, setSharedState, 
        buffer, setBuffer, 
        defaultProcessingTime, setDefaultProcessingTime, 
        dtcDefaultShippingRange, setDtcDefaultShippingRange, 
        b2bDefaultShippingRange, setB2bDefaultShippingRange, 
        dtcDateAvailableMessage, setDtcDateAvailableMessage, 
        dtcProcessingTimeMessage, setDtcProcessingTimeMessage, 
        b2bDateAvailableMessage, setB2bDateAvailableMessage, 
        b2bProcessingTimeMessage, setB2bProcessingTimeMessage,
        allProducts, setAllProducts 
      }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
