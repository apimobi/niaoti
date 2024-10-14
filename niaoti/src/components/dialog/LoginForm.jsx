import { useState, useContext } from "react";
import { Button } from "@/components/ui/button"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { DialogContext } from "../../context/DialogContext";

const LoginForm = ({handleClose}) => {
    const [error, setError] = useState('');
    const {data} = useContext(DialogContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('Invalid email or password');
    }
    
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center text-2xl uppercase">{data.title}</DialogTitle>
                <VisuallyHidden.Root>
                    <DialogDescription>{data.description}</DialogDescription>
                </VisuallyHidden.Root>
                <form className="grid grid-cols-[40%_60%] gap-4 ">
                    <div className="px-4 col-span-2 text-center min-h-[30px] max-h-[30px] text-red-500 font-semibold font-montserrat p-1">{error}</div>
                    <div className="col-span-1 font-montserrat font-semibold px-10">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-span-1 px-4">
                        <input className="px-4 rounded-lg bg-gray-50 border-[1px] border-grey w-full
                            placeholder:text-cadet-gray outline-0 font-source-sans lg:text-base text-sm" 
                            type="email" id="email" name="email"
                        />
                    </div>
                    <div className="col-span-1 font-montserrat font-semibold px-10">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-span-1 px-4">
                        <input className="px-4 rounded-lg bg-gray-50 border-[1px] border-grey w-full
                            placeholder:text-cadet-gray outline-0 font-source-sans lg:text-base text-sm"
                            type="password" id="password" name="password" />
                    </div>
                    <div className="col-span-2 items-center text-center pt-5">
                        <Button variant="outline" onClick={handleSubmit}>Connect</Button>
                    </div>
                </form>
            </DialogHeader>
        </DialogContent>
    )
}

export default LoginForm;