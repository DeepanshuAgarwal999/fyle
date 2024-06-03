import React from 'react'
import heart from '/images/heart.png'
import clock from '/images/clock.png'
import time from '/images/time.png'
import correct from '/images/correct.png'

const Data = [
    {
        image: heart,
        heading: "199 +",
        content: "Staticfied Customers"
    },
    {
        image: clock,
        heading: "1591 +",
        content: "Days Of Operation"
    }, {
        image: time,
        heading: "283 +",
        content: "Complete Project"
    }, {
        image: correct,
        heading: "75+",
        content: "Win Awards"
    },
]
const Card = ({ img, heading, content }: {
    img: string, heading: string, content: string
}) => {
    return (
        <article className='cursor-pointer w-[200px] p-4 bg-white flex flex-col items-center gap-2 hover:scale-125 ease-in-out duration-200 hover:shadow-cardHoverShadow '>
            <img src={img} alt="" className='self-center' />
            <h1 className='text-4xl font-medium'>
                {heading}
            </h1>
            <p className='text-base'>
                {content}
            </p>
        </article>
    )
}
const ExpertGrowth = () => {
    return (
        <section className='mt-20 py-20 max-w-7xl px-4 sm:px-10 mx-auto bg-secondary-200 '>
            <h1 className='text-center text-primary-100 uppercase font-medium text-2xl'>Expert GROWTHS</h1>
            <h2 className='text-5xl font-semibold text-center pt-6 uppercase'>Our Company Growth</h2>
            <div className='grid  justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20  gap-10 '>
                {
                    Data.map((item) => (
                        <Card content={item.content} heading={item.heading} img={item.image} key={item.heading} />
                    ))
                }
            </div>
        </section>
    )
}

export default ExpertGrowth