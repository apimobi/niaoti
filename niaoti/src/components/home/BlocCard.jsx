import {motion} from 'framer-motion';
import useGradientUpdater from '../../hooks/useGradientUpdater';
import { DialogContext } from "@/context/DialogContext";
import { useState, useContext } from "react";


const BlocCard = ({hashId, data, title}) => {
    const {setDialogType, setIsOpen, setData} = useContext(DialogContext);
    // const gradientRefs = useGradientUpdater();

    const handleClick = (e) => {
        console.log('e:', e);
        setDialogType("carousel");
        setIsOpen("true");
        setData(data[e.target.id]);
    }

    return (
        <section id={hashId} className='px-4 lg:py-[65px] py-10'>
            <div className='max-w-[1200px] mx-auto'>
                <h3 className='text-center text-white font-montserrat lg:text-3xl md:text-lg text-base font-semibold'>
                    {title}
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
                    {
                        data?.map(({id, title, description, image}, index) => {
                            return (
                                <motion.div key={id} className='bg-white rounded-3xl p-[2px] md:min-4-[444px] min-h-auto'
                                // ref = {(elt) => (gradientRefs.current[index] = elt)}
                                initial={{
                                    opacity:0,
                                    y: 80
                                }}
                                whileInView={{
                                    opacity:1,
                                    y: 0
                                }}
                                transition={{
                                    duration:0.5,
                                    ease: 'easeInOut'
                                }}
                                whileHover={{
                                    scale:1.05
                                }}
                                >
                                    <div className='rounded-3xl bg-black flex flex-col justify-between
                                        items-center h-full'>
                                        <h4 className='lg:mt-8 md:mt-6 mt-4 mb-4 lg:text-xl text-lg text-white font-montserrat
                                         text-center font-semibold px-4'>
                                            {title}
                                        </h4>
                                        <img id={index} onClick={handleClick} className={'px-4 mb-2'} src={image} alt={title} />
                                        <p className='mt-2 mb-2 text-sm text-white font-montserrat
                                         text-center px-4'>{description}</p>
                                    </div> 
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            
        </section>
    );
}

export default BlocCard;