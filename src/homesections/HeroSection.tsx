import React, { useState } from 'react'
import heroImg from '/images/hero.png'
import Modal from '../components/Modal'
import ContactUsForm from '../components/ContactUsForm'
const HeroSection = () => {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const setModelOpen = () => setIsModelOpen(true)
    const setModelClose = () => setIsModelOpen(false)
    return (
        <section className='pt-20 max-w-7xl  px-4 lg:px-0 flex items-center mx-auto gap-4 '>
            <div className='space-y-8 md:w-[43%] '>
                <h2 className='text-primary-100 font-semibold text-3xl'>AWARD WINNING</h2>
                <h1 className='font-poppins font-bold text-5xl'>
                    DIGITAL MARKETING AGENCY
                </h1>
                <p className='leading-8 font-poppins text-base'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
                <button className='mt-4 h-12 bg-primary-100 hover:bg-[#FF3366] ease-in-out duration-150 text-white px-8 text-base active:scale-95' onClick={() => setModelOpen()}>
                    CONTACT US
                </button>
            </div>
            <div className='hidden md:block w-[35%]'>
                <img src={heroImg} alt="" className='w-full h-full' />
            </div>
            <Modal isOpen={isModelOpen} onClose={setModelClose}>
                <ContactUsForm />
            </Modal>
        </section>
    )
}

export default HeroSection