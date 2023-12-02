"use client"

import * as React from 'react'

export default function Footer() {

    const [faqs, setFaqs] = React.useState([
        {ques: 'Hello FAQ1', ans: 'Answer from FAQ1'},
        {ques: 'Hello FAQ2', ans: 'Answer from FAQ2'},
        {ques: 'Hello FAQ3', ans: 'Answer from FAQ3'},
        {ques: 'Hello FAQ4', ans: 'Answer from FAQ4'},
        {ques: 'Hello FAQ5', ans: 'Answer from FAQ5'},
        {ques: 'Hello FAQ6', ans: 'Answer from FAQ6'},
    ])

    const [answer, setAnswer] = React.useState('Answer from FAQ1')

    const faqHandlerChange = async(element: any) => {
        console.log(element)
        console.log(element.target)
        setAnswer(element.target.value)
    }

    return (
        <div className="w-full lg:h-[50rem] h-[76rem] lg:mt-32 mt-52 lg:pt-20 lg:pb-32 bg-black text-white">
            <div className="lg:w-[1200px] lg:mx-auto relative">
                <div className="lg:w-full absolute lg:z-10 top-[-10rem] lg:top-[-14rem] h-[38rem]">
                    <div className="bg-white text-black border-4 lg:p-10 border-black lg:mx-0 mx-4 rounded-xl p-4 flex lg:flex-row flex-col lg:justify-between gap-8 w-full">
                        <div className="lg:w-1/2 flex flex-col w-full">
                        <h1 className="lg:w-1/2 w-full font-semibold lg:text-4xl text-3xl mb-4 lg:mb-8">FAQs.</h1>
                            <ul className="flex flex-col gap-2 w-full">
                                {
                                    faqs && faqs.map((faq:any, index:any) => {
                                        return <button key={index} value={faq.ans} onClick={e => faqHandlerChange(e)} className="w-full bg-[#eee] lg:py-4 py-3 px-5 text-left border-2 border-[#ccc] rounded-lg cursor-pointer">{faq.ques}</button>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="lg:w-1/2 lg:flex lg:flex-col">
                            <h1 className="lg:w-1/2 w-full font-semibold lg:text-4xl text-3xl mb-4 lg:mb-8">Ans.</h1>
                            <div className="w-full h-full bg-yellow-400 rounded-lg lg:p-7 p-5">
                            <p>{answer}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-24 mt-12 mx-4">
                        <div className="flex lg:flex-row flex-col gap-y-8 w-full">
                            <div className="lg:w-8/12 flex flex-col lg:gap-3 gap-2 w-full">
                                <h1 className="text-5xl">CH2-PS086</h1>
                                <p className="font-light">Bloomy : Solusi Nelayan Naik Kelas</p>
                            </div>
                            <div className="lg:w-2/12 flex flex-col lg:gap-2 gap-1 w-full">
                                <h1 className="text-xl mb-3">Project Bloomy</h1>
                                <p>Dashboard</p>
                                <p>Fitur</p>
                                <p>Teknologi</p>
                                <p>Team</p>
                                <p>Download</p>
                            </div>
                            <div className="lg:w-2/12 flex flex-col lg:gap-2 gap-1 w-full">
                                <h1 className="text-xl mb-3">Follow Kami</h1>
                                <p>Github</p>
                                <p>Instagram</p>
                                <p>Twitter</p>
                                <p>Linkedin</p>
                            </div>
                        </div>
                        <p className="py-10">&copy;Bloomy 2023. Hak Cipta Dilindungi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
