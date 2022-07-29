import { useState } from 'react';
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return(
    <header className='fixed top-0 w-full z-[11]'>
    <nav className="w-[80%] mx-auto flex items-center mt-4">
        <h2 className="text-4xl font-logo">Dinakar</h2>
        <ul className="mx-auto md:flex justify-center items-center gap-10 hidden">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <li key={index} className="uppercase"><a href={`#${item}`}>{item}</a></li>
        ))}
        </ul>
        {!openMenu ? 
        <FiMenu className="md:hidden scale-150 ml-auto z-20 cursor-pointer" onClick={() => setOpenMenu(!openMenu)}/> 
        : <GrClose className='md:hidden scale-150 ml-auto z-20 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}/>
    }
        
    </nav>
    {/* JSX element type 'FiMenu' does not have any construct or call signatures. */}
    <div className={`md:hidden bg-primary p-1  z-10 absolute h-screen w-screen top-0 transition-all ${!openMenu ? 'custom-clip-path' : 'increase-clip-path'}`}>
    <ul className='flex flex-col h-full w-full justify-center items-center gap-10'>
    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <li key={index} className="uppercase text-white text-xl"><a href={`#${item}`}>{item}</a></li>
    ))}
    </ul>
</div>
</header>
  )
};

export default Navbar;
