import FiturCard from '@/components/FiturCard'

export default function Fitur() {
  return (
    <div id='Fitur' className="lg:w-full lg:h-auto lg:pt-32 lg:px-14 py-12 px-4">
        <div className='lg:w-[1200px] lg:mx-auto'>
            <h1 className="lg:w-full font-bold text-4xl text-center lg:mb-20 mb-10">Fitur Aplikasi</h1>
            <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-20 flex flex-col gap-10">
                <FiturCard title="Machine" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio minus error maxime eaque! Molestiae iste enim perferendis? Nemo, sint."/>
                <FiturCard title="Machine" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio minus error maxime eaque! Molestiae iste enim perferendis? Nemo, sint."/>
                <FiturCard title="Machine" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio minus error maxime eaque! Molestiae iste enim perferendis? Nemo, sint."/>
                <FiturCard title="Machine" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio minus error maxime eaque! Molestiae iste enim perferendis? Nemo, sint."/>
                <FiturCard title="Machine" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio minus error maxime eaque! Molestiae iste enim perferendis? Nemo, sint."/>
                <FiturCard title="Machine" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates distinctio minus error maxime eaque! Molestiae iste enim perferendis? Nemo, sint."/>
            </div>
        </div>
    </div>
    
  )
}
