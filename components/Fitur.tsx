import FiturCard from '@/components/FiturCard'

export default function Fitur() {
  return (
    <div className="lg:w-full lg:h-auto lg:pt-32 lg:px-14">
        <div className='lg:w-[1200px] lg:mx-auto'>
            <h1 className="lg:w-full lg:font-bold lg:text-4xl lg:text-center lg:mb-20">Fitur Aplikasi</h1>
            <div className="lg:flex lg:flex-wrap lg:justify-between lg:gap-20">
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
