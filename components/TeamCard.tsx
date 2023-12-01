import Image from "next/image"
import GithubIcon from "@/public/github.png"

export default function TeamCard(props: any) {
  return (
    <div className="lg:w-[48%] bg-black lg:relative lg:z-10 lg:flex lg:flex-col lg:justify-end lg:rounded-2xl">
        <div className="lg:absolute lg:w-full lg:p-4">
            <h1 className="lg:bg-white lg:max-w-max lg:py-2 lg:px-5 lg:rounded-lg lg:text-sm lg:font-semibold">{props.nama}</h1>
            <div className="lg:flex lg:justify-between lg:mt-4">
                <div className="lg:flex lg:gap-2">
                    {
                        props.title && props.title.map((element: any, index: any) => {
                            return <p key={index} className="lg:text-white lg:border-2 lg:border-white lg:my-auto lg:py-1 lg:px-4 lg:rounded-lg lg:text-sm">{element}</p>
                        })
                    }
                </div>
                <a href={props.github}>
                    <Image src={GithubIcon} alt="Github Icon" width={36} height={36} className="lg:rounded-xl"/>
                </a>
            </div>
        </div>
        <Image src={props.image} alt="Default user" className="lg:rounded-2xl"/>
    </div>
  )
}
