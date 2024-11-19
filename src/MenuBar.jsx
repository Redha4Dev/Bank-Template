import { useState } from "react";
import SimpleButton from "./Components/SimpleButton";
import { AlignJustify } from "lucide-react";
import { motion } from 'framer-motion';

const MenuBar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const HandleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <div className="w-full bg-[#12121b] text-white font-medium flex md:px-16 item-center justify-between py-2 px-4">
                <div className="flex h-12 items-center">
                    <h1 className="text-2xl font-semibold">
                        XENON
                    </h1>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex h-full items-center gap-6">
                        {['Home', 'Products', 'Features', 'How To Apply', 'Tools', 'More'].map((item, index) => (
                            <li key={index} className="relative group">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden md:block">
                    <SimpleButton text='APPLY NOW'/>
                </div>
                <div className="text-lg p-4 block md:hidden hover:bg-zinc-800 rounded-full text-green-500"
                    onClick={HandleClick}>
                    <AlignJustify />
                </div>
            </div>
            <hr className="block md:hidden" />
            <motion.div animate={{ y: isClicked ? 0 : -800 }} className={`${isClicked ? "block" : "hidden"}`}
                        transition={{ ease: "linear", delay: 2 }}>
                <nav className="block md:hidden bg-[#1B1212] text-white font-IBM font-semibold">
                    <ul className="flex flex-col h-full py-4 items-center gap-6">
                        {['Home', 'Products', 'Features', 'How To Apply', 'Tools', 'More'].map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </>
    );
}

export default MenuBar;
