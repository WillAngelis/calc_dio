import { BiMenuAltLeft } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

export const Header = () => {
  return (
    <header className="flex text-xl justify-between w-96">
      <BiMenuAltLeft title="menu icon" size={32}/>
      <h1 className="font-bold">Calc<span className="text-red-400 font-bold">.</span></h1>
      <RiCloseLine  title="close icon" size={32}/>
    </header>
  )
}
