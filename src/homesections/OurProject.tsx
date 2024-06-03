import React, { useState } from 'react'
import food1 from '/images/food1.jpg'
import food2 from '/images/food2.png'
import food3 from '/images/food3.jpg'

const Data: { id: number, heading: string, content: string }[] = [
    {
        id: 1,
        heading: "Genderless Kei - Japan’s Hot",
        content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of"
    },
    {
        id: 2,
        heading: "Better Strategy & Quality",
        content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of"
    },
    {
        id: 3,
        heading: "Genderless Kei - Japan’s Hot",
        content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of"
    }
]


const OurProject = () => {
    const [id, setId] = useState<number>(1)

    console.log(id);
    return (
        <section className='pt-20 max-w-7xl  mx-auto '>
            <h1 className='text-center text-primary-100 uppercase font-medium text-2xl'>Our Project</h1>
            <h2 className='text-5xl font-semibold text-center pt-6 uppercase'>Our Latest Projects</h2>
            <main className='flex items-center flex-col max-md:px-4 md:grid grid-cols-1  md:grid-cols-10 lg:grid-cols-12 sm:pr-8 mt-14 gap-10'>
                <div className='md:col-span-6 lg:col-span-8 h-[500px] order-2 md:order-1'>
                    {id === 1 ? <img src={food1} alt="" className='w-full h-full object-cover' /> : id === 2 ? <img src={food2} className='w-full h-full object-cover' alt="" /> : id === 3 ? <img src={food3} alt="" className='w-full h-full object-cover' /> : null}
                </div>
                <div className='col-span-4 bg-secondary-300 flex items-center flex-col h-full justify-between order-1 md:order-2'>
                    {
                        Data.map((item, i) => {
                            const active = item.id === id
                            return (
                                <article key={item.id} className={`p-7 cursor-pointer ${active && "bg-primary-100 text-white"}`} onClick={() => setId(i + 1)}>
                                    <h1 className='text-lg font-medium'>{item.heading}</h1>
                                    <p className='text-base pr-10 pt-4'>
                                        {item.content}
                                    </p>
                                </article>
                            )
                        })
                    }
                </div>

            </main>
        </section>
    )
}

export default OurProject