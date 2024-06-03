import React from 'react'
import brands from '/images/brands.png'

const Footer = () => {
    return (
        <footer className='bg-footerBg bg-cover bg-no-repeat w-full px-10 py-20 sm:p-20'>
            <div className='max-w-7xl mx-auto'>
                <img src={brands} alt="" className='min-w-[300px]'/>
            </div>
        </footer>
    )
}

export default Footer