import React from 'react'
import icon1 from '/images/1.svg'
import icon2 from '/images/2.png'
import icon3 from '/images/3.png'
import icon4 from '/images/4.png'

const Data = [
    {
        image: icon1,
        heading: "Clarified Vision & Target",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    },
    {
        image: icon2,
        heading: "High Performance",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    }, {
        image: icon3,
        heading: "Maintain Security",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    }, {
        image: icon4,
        heading: "Better Strategy & Quality",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
    },
]
const Card = ({ img, heading, content }: {
    img: string, heading: string, content: string
}) => {
    return (
        <article className='flex flex-col gap-4'>
            <img src={img} alt="" className='self-start w-16 h-16' />
            <h1 className='text-lg font-medium pt-2'>
                {heading}
            </h1>
            <p className='text-base'>
                {content}
            </p>
        </article>
    )
}

const WhyChooseUs = () => {

    return (
        <section className='pt-20 max-w-7xl px-4 sm:px-10 mx-auto'>
            <h1 className='text-center text-primary-100 uppercase font-medium text-2xl'>Why Choose Us</h1>
            <h2 className='text-5xl font-semibold text-center pt-6'>WHY WE ARE BEST</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10  mt-14'>

                {Data.map((item) => (
                    <Card content={item.content} img={item.image} heading={item.heading} key={item.heading} />
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUs