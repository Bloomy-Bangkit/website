import Image from "next/image"
import ImgTensorflow from "@/public/tensorflow.jpg"
import imgGCP from "@/public/gcp.png"
import imgAndroid from "@/public/android.png"

export default function Teknologi() {
  return (
    <div id="Teknologi" className="lg:w-full lg:h-auto lg:mt-20 lg:pt-20 lg:px-14 py-10 px-4">
      <div className="lg:w-[1200px] lg:mx-auto">
        <h1 className="lg:w-full font-bold text-4xl text-center lg:mb-20 mb-10">Teknologi Yang Digunakan</h1>
        <div className="flex flex-col gap-8 lg:gap-14">
            <div className="lg:flex lg:flex-row lg:gap-12 flex flex-col gap-2">
                <Image src={ImgTensorflow} alt="Tensorflow" className="lg:w-6/12 w-full"/>
                <div className="lg:w-6/12 flex flex-col lg:gap-8 gap-4 lg:my-auto ">
                    <h1 className="text-4xl font-bold">Tensorflow Keras</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam officia minima temporibus sapiente suscipit libero iusto perferendis, corporis modi error? Nulla aliquam itaque nobis iusto dolor nostrum velit fuga tempore quibusdam!</p>
                    <a href="" className="font-semibold">Learn More →</a>
                </div>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-12 flex flex-col-reverse gap-4">
                <div className="lg:w-6/12 flex flex-col lg:gap-8 gap-4 lg:my-auto">
                    <h1 className="text-4xl font-bold">Google Cloud Platform</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam officia minima temporibus sapiente suscipit libero iusto perferendis, corporis modi error? Nulla aliquam itaque nobis iusto dolor nostrum velit fuga tempore quibusdam!</p>
                    <a href="" className="font-semibold">Learn More →</a>
                </div>
                <Image src={imgGCP} alt="Tensorflow" className="lg:w-6/12"/>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-12 flex flex-col gap-0">
                <Image src={imgAndroid} alt="Android" className="lg:w-6/12 w-full"/>
                <div className="lg:w-6/12 flex flex-col lg:gap-8 gap-4 lg:my-auto ">
                    <h1 className="text-4xl font-bold">Android</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam officia minima temporibus sapiente suscipit libero iusto perferendis, corporis modi error? Nulla aliquam itaque nobis iusto dolor nostrum velit fuga tempore quibusdam!</p>
                    <a href="" className="font-semibold">Learn More →</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
