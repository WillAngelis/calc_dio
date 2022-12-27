import { BiMenuAltLeft } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

export const Header = () => {
    return (
        <header className="flex text-base justify-between w-80 bg-[#151515] p-4 py-6 rounded-t-3xl">
            <BiMenuAltLeft
                color="white"
                title="menu icon"
                size={24}
                cursor="pointer"
            />
            <h1 className="font-bold text-white">
                Calc<span className="text-primary font-bold">.</span>
            </h1>
            <RiCloseLine
                color="white"
                title="close icon"
                size={24}
                cursor="pointer"
            />
        </header>
    );
};
