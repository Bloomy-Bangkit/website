import Image from 'next/image'
import LogoHeader from '@/public/bloomy-hp.png'

export default function Header() {
  return (
    <div className="lg:w-full lg:h-auto lg:pt-10 lg:px-14">
      <div className='lg:w-[1200px] lg:mx-auto lg:flex lg:justify-between lg:gap-10'>
        <div className='lg:w-6/12 lg:flex lg:flex-col lg:gap-8 lg:mt-28'>
          <h1 className='lg:text-[6rem] lg:font-bold lg:text-[#133C55] lg:leading-none'>Bloomy : Solusi Nelayan Naik Kelas</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, quis! Ratione, praesentium accusamus eius error laudantium facere aliquam est, eum, dolorem expedita ad. Quos ex unde commodi, similique quis blanditiis exercitationem rem!</p>
          <button className='lg:max-w-max lg:bg-blue-500 lg:py-3 lg:px-10 lg:text-xl lg:font-semibold lg:text-white lg:rounded-md'>Download</button>
        </div>
        <div className='lg:w-5/12'>
          <Image src={LogoHeader} alt='Logo Header' width={500}/>
        </div>
      </div>
    </div>
  )
}
