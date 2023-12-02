import TeamCard from '@/components/TeamCard'
import FotoUser from "@/public/user.jpg"

export default function Team() {
  return (
    <div id='Team' className="lg:w-full lg:h-auto lg:mt-20 lg:pt-20 lg:pb-32 lg:px-14 px-4 my-12 py-8">
        <div className="lg:w-[1200px] lg:mx-auto">
            <h1 className="w-full font-bold text-4xl text-center lg:mb-16 mb-10">Bloomy Team</h1>
            <div className="flex lg:flex-row flex-col lg:flex-wrap lg:justify-between lg:gap-12 gap-4">
                <TeamCard nama="Aditya Bayu | Universitas Muhammadiyah Cirebon" title={["Teknik Informatika", "Cloud Computing"]} github="https://www.github.com/iniadittt" image={FotoUser} />
                <TeamCard nama="Aditya Bayu | Universitas Muhammadiyah Cirebon" title={["Teknik Informatika", "Cloud Computing"]} github="https://www.github.com/iniadittt" image={FotoUser} />
                <TeamCard nama="Aditya Bayu | Universitas Muhammadiyah Cirebon" title={["Teknik Informatika", "Cloud Computing"]} github="https://www.github.com/iniadittt" image={FotoUser} />
                <TeamCard nama="Aditya Bayu | Universitas Muhammadiyah Cirebon" title={["Teknik Informatika", "Cloud Computing"]} github="https://www.github.com/iniadittt" image={FotoUser} />
                <TeamCard nama="Aditya Bayu | Universitas Muhammadiyah Cirebon" title={["Teknik Informatika", "Cloud Computing"]} github="https://www.github.com/iniadittt" image={FotoUser} />
                <TeamCard nama="Aditya Bayu | Universitas Muhammadiyah Cirebon" title={["Teknik Informatika", "Cloud Computing"]} github="https://www.github.com/iniadittt" image={FotoUser} />
            </div>
        </div>
    </div>
  )
}
