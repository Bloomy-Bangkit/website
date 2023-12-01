import Image from "next/image"
import ImgTensorflow from "@/public/tensorflow.jpg"
import imgGCP from "@/public/gcp.png"
import imgAndroid from "@/public/android.png"

export default function Teknologi() {
  return (
    <div className="lg:w-full lg:h-auto lg:mt-20 lg:pt-20 lg:px-14">
      <div className="lg:w-[1200px] lg:mx-auto">
        <h1 className="lg:w-full lg:font-bold lg:text-4xl lg:text-center lg:mb-20">Teknologi Yang Digunakan</h1>
        <div className="lg:flex lg:flex-col lg:gap-14">
            <div className="lg:flex lg:gap-12">
                <Image src={ImgTensorflow} alt="Tensorflow" className="lg:w-6/12"/>
                <div className="lg:w-6/12 lg:flex lg:flex-col lg:gap-8 lg:my-auto">
                    <h1 className="lg:text-4xl lg:font-bold">Tensorflow Keras</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam officia minima temporibus sapiente suscipit libero iusto perferendis, corporis modi error? Nulla aliquam itaque nobis iusto dolor nostrum velit fuga tempore quibusdam!</p>
                    <a href="" className="lg:font-semibold">Learn More →</a>
                </div>
            </div>

            <div className="lg:flex lg:gap-12">
                <div className="lg:w-6/12 lg:flex lg:flex-col lg:gap-8 lg:my-auto">
                    <h1 className="lg:text-4xl lg:font-bold">Google Cloud Platform</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam officia minima temporibus sapiente suscipit libero iusto perferendis, corporis modi error? Nulla aliquam itaque nobis iusto dolor nostrum velit fuga tempore quibusdam!</p>
                    <a href="" className="lg:font-semibold">Learn More →</a>
                </div>
                <Image src={imgGCP} alt="Tensorflow" className="lg:w-6/12"/>
            </div>

            <div className="lg:flex lg:gap-12">
                <Image src={imgAndroid} alt="Tensorflow" className="lg:w-6/12"/>
                <div className="lg:w-6/12 lg:flex lg:flex-col lg:gap-8 lg:my-auto">
                    <h1 className="lg:text-4xl lg:font-bold">Android</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam officia minima temporibus sapiente suscipit libero iusto perferendis, corporis modi error? Nulla aliquam itaque nobis iusto dolor nostrum velit fuga tempore quibusdam!</p>
                    <a href="" className="lg:font-semibold">Learn More →</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
