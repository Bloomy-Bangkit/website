import Image from 'next/image'
import Logo from '@/public/logo-bloomy-biru.png'

export default function Navbar() {
  return (
    <div className='lg:w-full lg:h-auto lg:border-b-4 lg:border-b-slate-200'>
        <div className='lg:w-[1200px] lg:mx-auto lg:flex lg:justify-between lg:py-5 lg:px-10'>
            <div>
                <Image src={Logo} alt='Logo Bloomy' className='w-[10rem]'/>
            </div>
            <ul className='lg:flex lg:gap-8 lg:my-auto lg:py-2 lg:font-medium'>
                <li>
                    <a href="#fitur">Fitur</a>
                </li>
                <li>
                    <a href="#teknologi">Teknologi</a>
                </li>
                <li>
                    <a href="#team">Bloomy Team</a>
                </li>
                <li>
                    <a href="#download">Download</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
