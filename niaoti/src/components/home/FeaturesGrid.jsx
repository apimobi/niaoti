import useGradientUpdater from "../../hooks/useGradientUpdater";
import { FEATURES_GRID_DATA } from "../../data/mockData";
import {motion} from 'framer-motion';


const FeaturesGrid = () => {
    const gradientRefs = useGradientUpdater();

    const featuredGridSettings = [
        {
            cardImgPadding: "px-5 pt-5",
            cardContentPadding: "py-6 pb-10",
            cardColSpan: "lg:col-span-1 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absoulte before:w-[200px] before:h-[200px] before:bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
            cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absoulte after:w-[213px] after:h-[213px] after:top-[10%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            

        },
        {
            cardImgPadding: "px-12 pt-6",
            cardContentPadding: "py-6 pb-10",
            cardColSpan: "lg:col-span-2 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absoulte before:w-[200px] before:h-[200px] before:bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
            cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absoulte after:w-[217px] after:h-[217px] after:top-[5%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            

        },
        {
            cardImgPadding: "px-12 pt-6",
            cardContentPadding: "py-6 pb-10",
            cardColSpan: "lg:col-span-2 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absoulte before:w-[200px] before:h-[200px] before:bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
            cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absoulte after:w-[217px] after:h-[217px] after:top-[5%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            

        },
        {
            cardImgPadding: "px-12 pt-6",
            cardContentPadding: "py-6 pb-10",
            cardColSpan: "lg:col-span-2 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absoulte before:w-[200px] before:h-[200px] before:bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
            cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absoulte after:w-[217px] after:h-[217px] after:top-[5%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            

        },
        {
            cardImgPadding: "px-12 pt-6",
            cardContentPadding: "py-6 pb-10",
            cardColSpan: "lg:col-span-2 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absoulte before:w-[200px] before:h-[200px] before:bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
            cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absoulte after:w-[217px] after:h-[217px] after:top-[5%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            

        },
        {
            cardImgPadding: "px-12 pt-6",
            cardContentPadding: "py-6 pb-10",
            cardColSpan: "lg:col-span-2 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientBefore: "before:content-[''] before:bg-grad-theme-135 before:absoulte before:w-[200px] before:h-[200px] before:bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
            cardGradientAfter: "after:content-[''] after:bg-grad-theme-135 after:absoulte after:w-[217px] after:h-[217px] after:top-[5%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            

        }
    ]

    return (
        <section id="generator"  className="py-[65px] text-white px-4">
            <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold
            foint-montserrat max-w-[986px] mx-auto">
                BLBNALBALABLABLABA
            </h2>
            <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10">
                <div className="grid grid-cols-3 xxl-gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt10">
                    {
                        FEATURES_GRID_DATA?.map(({id, title, description, image}, index) => {
                            console.log(index)
                            return (
                                <motion.div 
                                    key ={id}
                                    className={
                                        `bg-grad-theme-135 rounded-3xl overflow-hidden p-[3px] md:min-h-[444px] min-h-auto
                                        ${featuredGridSettings[index].cardColSpan}
                                    `}
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
                                    <div className={`rounded-3xl overflow-hidden bg-jet flex relative 
                                     ${featuredGridSettings[index].cardFlexCol} ${featuredGridSettings[index].cardGradientAfter} 
                                     ${featuredGridSettings[index].cardGradientBefore}`}>
                                     justify-between
                                     items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4`}>
                                        <img src={image} alt={title} className="z-10 relative" />
                                        <div className="gap-y-2 flex flex-col items-center text-center">
                                            <h4 className="lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold">
                                                {title}
                                            </h4>
                                            <p className="text-white lg:text-base text-sm">
                                                {description}
                                            </p>
                                        </div>
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

export default FeaturesGrid;