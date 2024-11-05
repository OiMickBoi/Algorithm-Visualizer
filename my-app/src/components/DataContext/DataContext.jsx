import { createContext, useContext, useState } from "react";

const GlobalContect = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalArray, setGlobalArray] = useState([64, 34, 25, 12, 22, 11, 90])

  const addToArray = (item) => {
    setGlobalArray([...globalArray, item]);
  };

  const removeFromArray = (index) => {
    setGlobalArray(globalArray.filter((_,i) => i !== index));
  };

  const updateArray = (newArray) => {
    setGlobalArray(newArray);
  };

  return (
    <GlobalContext.Provider value={{
      globalArray,
      setGlobalArray,
      andToArray,
      removeFromArray,
      updateArray
    }}>

    {children}
    </GlobalContext.Provider>
  );

};

export const useGlobalArray = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalArray must be used within a GlobalProvider');
  }
  return context;
};
