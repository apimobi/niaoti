import { createContext, useState } from 'react';

const DialogContext = createContext({
 type: null,
 isOpen: "false",
 data: null,
 setDialogType: () => {},
 setIsOpen: () => {},
 setData: () => {},
});

const DialogProvider = ({ children }) => {
 const [type, setDialogType] = useState(null);
 const [isOpen, setIsOpen] = useState(null);
 const [data, setData] = useState(null);

 return (
   <DialogContext.Provider value={{type, isOpen, data, setDialogType, setIsOpen, setData}}>
     {children}
   </DialogContext.Provider>
 );
};

export { DialogContext, DialogProvider };