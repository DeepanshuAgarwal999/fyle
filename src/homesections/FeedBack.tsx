import React from 'react'
import feedbackimg from '/images/feedback.svg'
const FeedBack = () => {
    return (
        <section className='py-20 max-w-7xl px-4 sm:px-10 mx-auto'>
            <h1 className='text-center text-primary-100 uppercase font-medium text-2xl'>client's feedback</h1>
            <h2 className='text-5xl font-semibold text-center pt-6 uppercase'>people say's about us !</h2>
            <div className='pt-14 max-w-3xl mx-auto text-lg relative z-10'>
                <p className='font-medium relative z-10 ' >
                    Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.
                </p>
                <img src={feedbackimg} alt="" className='absolute top-9 -left-4 z-0' />
                <p className='pt-10'>
                    <span className='text-primary-100 font-bold uppercase'>
                        Jannat Tumpa
                    </span>
                    <span className='text-[#808080]'> - COO, AMERIMAR ENTERPRISES, INC.</span>
                </p>
            </div>
        </section>
    )
}

export default FeedBack