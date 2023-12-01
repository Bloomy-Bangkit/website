import TeamCard from '@/components/TeamCard'
import FotoUser from "@/public/user.jpg"

export default function Team() {
  return (
    <div className="lg:w-full lg:h-auto lg:mt-20 lg:pt-20 lg:pb-32 lg:px-14">
        <div className="lg:w-[1200px] lg:mx-auto">
            <h1 className="lg:w-full lg:font-bold lg:text-4xl lg:text-center lg:mb-16">Bloomy Team</h1>
            <div className="lg:flex lg:flex-wrap lg:justify-between lg:gap-12">
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
