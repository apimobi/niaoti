import { motion } from 'framer-motion';
import { DialogContext } from "@/context/DialogContext";
import { useContext } from "react";

const BlocApp = ({hashId, title, data}) => {

    const {setDialogType, setIsOpen, setData} = useContext(DialogContext);

    const handleClick = (e) => {
        if(data[e.target.id].images.length > 0){
            setDialogType("carousel");
            setIsOpen("true");
            setData(data[e.target.id]);
        }
    }

    return (
        <section id={hashId} className="lg:py-[65px] py-10 px-4">
            <div className="max-w-[1400px] mx-auto">
                <h3 className="text-center text-white font-montserrat lg:text-3xl md:text-2xl text-xl font-semibold">
                    {title}
                </h3>
                <div className="grid lg:grid-cols-8 md:grid-cols-4 xxl:gap-4 xl:gap-4 lg:gap-4 gap-2 lg:mt-[65px] mt-10 min-w-[49px]">
                    {data.map(({id, title, icon, images}, index) => {
                        return (
                            <motion.div key={id+title} className="bg-white rounded-3xl p-[1px] d-flex flex-col justify-center items-center text-center"
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
                                    <div className={`rounded-3xl bg-black flex flex-col justify-between
                                        items-center h-full ${ images.length > 0 ? "cursor-pointer":"cursor-default" } `}>
                                        
                                        <img id={index} onClick={handleClick} className={'px-4 mb-2 mt-4'} src={icon} alt={title} />
                                        <h4 className='lg:mt-2 md:mt-2 mt-2 mb-2 lg:text-xl text-lg text-white font-montserrat
                                         text-center font-semibold px-4'>
                                            {title}
                                        </h4>
                                    </div> 

                            </motion.div>
                        )
                    })}
                </div>
            </div>

        </section>
    );
}

export default BlocApp;