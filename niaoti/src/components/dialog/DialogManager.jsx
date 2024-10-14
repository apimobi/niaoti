import LoginForm from "./LoginForm";
import { useState, useEffect, useContext } from "react";
import { DialogContext } from '@/context/DialogContext';
import {
    Dialog
} from "@/components/ui/dialog"
import ImgCarrousel from "./ImgCarousel";

const MyDialog = () => {
    const [dialog, setDialog] = useState(null);
    const [open, setOpen] = useState(null);

    const {type, isOpen, setDialogType, setData} = useContext(DialogContext);


    const handleClose = (value) => {
        console.log(value);
        setOpen(value);
        setDialogType(null);
    }

    useEffect(() => {
        console.log('type:', type); 
        switch(type) {
            case 'login':
              setData({title: 'Log in', description: 'log in to your account'});
              setDialog(<LoginForm />);  
              setOpen(isOpen);
              break;
            case 'carousel':
                setDialog(<ImgCarrousel />);  
                setOpen(isOpen);
                break;
            default:
              setDialog(null);
              setOpen("false");
              break;
          }
      }, [type]); 
    

    return (
        <Dialog onOpenChange={handleClose} open={open} defaultOpen={isOpen}>
            {dialog}
        </Dialog>
    )
}

export default MyDialog;