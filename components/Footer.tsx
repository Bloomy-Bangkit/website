
export default function Footer() {
  return (
    <div className="lg:w-full lg:h-[50rem] lg:mt-36 lg:pt-20 lg:pb-32 lg:px-14 lg:bg-black lg:text-white">
        <div className="lg:w-[1200px] lg:mx-auto lg:relative">
            <div className="lg:w-full lg:absolute lg:z-10 lg:top-[-14rem] lg:h-[38rem]">
                
                <div className="lg:bg-white lg:text-black lg:border-4 lg:p-10 lg:border-black lg:rounded-xl">
                    <div className="lg:flex lg:justify-between lg:mb-8 lg:gap-10">
                        <h1 className="lg:w-1/2 lg:font-semibold lg:text-4xl">FAQs.</h1>
                        <h1 className="lg:w-1/2 lg:font-semibold lg:text-4xl">Ans.</h1>
                    </div>
                    <div className="lg:flex lg:justify-between lg:gap-10">
                        <ul className="lg:flex lg:flex-col lg:gap-2 lg:w-1/2">
                            <li className="lg:w-full lg:bg-[#eee] lg:py-4 lg:px-5 lg:border-2 lg:border-[#ccc] lg:rounded-lg lg:cursor-pointer">What</li>
                            <li className="lg:w-full lg:bg-[#eee] lg:py-4 lg:px-5 lg:border-2 lg:border-[#ccc] lg:rounded-lg lg:cursor-pointer">Where</li>
                            <li className="lg:w-full lg:bg-[#eee] lg:py-4 lg:px-5 lg:border-2 lg:border-[#ccc] lg:rounded-lg lg:cursor-pointer">When</li>
                            <li className="lg:w-full lg:bg-[#eee] lg:py-4 lg:px-5 lg:border-2 lg:border-[#ccc] lg:rounded-lg lg:cursor-pointer">Who</li>
                            <li className="lg:w-full lg:bg-[#eee] lg:py-4 lg:px-5 lg:border-2 lg:border-[#ccc] lg:rounded-lg lg:cursor-pointer">Why</li>
                            <li className="lg:w-full lg:bg-[#eee] lg:py-4 lg:px-5 lg:border-2 lg:border-[#ccc] lg:rounded-lg lg:cursor-pointer">How</li>
                        </ul>
                        <div className="lg:w-1/2 lg:bg-yellow-400 lg:rounded-lg lg:p-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores neque eveniet voluptatibus aliquam minima blanditiis ratione rem odio tempora voluptates amet nam fuga, maxime rerum molestiae perferendis? Maxime dolorem corrupti quibusdam?
                        </div>
                    </div>
                </div>
                <div className="lg:mt-24">
                    <div className="lg:flex lg:w-full">
                        <div className="lg:w-8/12 lg:flex lg:flex-col lg:gap-3">
                            <h1 className="lg:text-5xl">CH2-PS086</h1>
                            <p className="lg:font-light">Bloomy : Solusi Nelayan Naik Kelas</p>
                        </div>
                        <div className="lg:w-2/12 lg:flex lg:flex-col lg:gap-2">
                            <h1 className="lg:text-xl lg:mb-3">Project Bloomy</h1>
                            <p>Dashboard</p>
                            <p>Fitur</p>
                            <p>Teknologi</p>
                            <p>Team</p>
                            <p>Download</p>
                        </div>
                        <div className="lg:w-2/12 lg:flex lg:flex-col lg:gap-2">
                            <h1 className="lg:text-xl lg:mb-3">Follow Kami</h1>
                            <p>Github</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                    <p className="lg:py-8">&copy;Bloomy 2023. Hak Cipta Dilindungi</p>
                </div>
            </div>
        </div>
    </div>
  )
}
