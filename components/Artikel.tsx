import ArtikelCard from '@/components/ArtikelCard'

export default function Artikel() {
  return (
    <div className="lg:w-full lg:h-auto lg:mt-20 lg:pt-20 lg:pb-32 lg:px-14 bg-[#2693C9] p-4 py-8 mt-10">
      <div className="lg:w-[1200px] lg:mx-auto">
        <h1 className="lg:text-[5rem] text-center font-semibold text-white text-4xl lg:mb-32 mb-10">Kenapa Bloomy?</h1>
        <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:gap-32 flex flex-col gap-10">
          <ArtikelCard title="lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam accusantium deleniti fugiat enim ut corrupti voluptates molestiae assumenda illum, totam cumque blanditiis sequi?"/>
          <ArtikelCard title="lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam accusantium deleniti fugiat enim ut corrupti voluptates molestiae assumenda illum, totam cumque blanditiis sequi?"/>
          <ArtikelCard title="lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam accusantium deleniti fugiat enim ut corrupti voluptates molestiae assumenda illum, totam cumque blanditiis sequi?"/>
          <ArtikelCard title="lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam accusantium deleniti fugiat enim ut corrupti voluptates molestiae assumenda illum, totam cumque blanditiis sequi?"/>
          <ArtikelCard title="lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam accusantium deleniti fugiat enim ut corrupti voluptates molestiae assumenda illum, totam cumque blanditiis sequi?"/>
          <ArtikelCard title="lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima numquam accusantium deleniti fugiat enim ut corrupti voluptates molestiae assumenda illum, totam cumque blanditiis sequi?"/>
        </div>
      </div>
    </div>
  )
}
