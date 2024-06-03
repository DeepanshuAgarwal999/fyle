import React, { useState, useEffect } from 'react';
import c1 from '/images/c1.png';
import c2 from '/images/c2.png';
import c3 from '/images/c3.png';
import dot from '/images/dot.svg'
import activedot from '/images/activedot.svg'
const WhatWeDo = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goNext();
        }, 10000);

        return () => clearInterval(interval);
    }, [counter]);


    const goNext = () => {
        setCounter((prevCounter) => (prevCounter === 2 ? 0 : prevCounter + 1));
    };
    console.log(Array(3).map((_, i) => (
        <button onClick={() => setCounter(i)} className='bg-red-500 h-10 mt-20'>set image</button>
    )));
    return (
        <section className='bg-primary-300 py-10 my-20 '>
            <div className='pt-20 max-w-7xl px-4 sm:px-10 mx-auto relative'>
                <header>
                    <h1 className='uppercase text-primary-100 text-xl font-semibold'>What we Do</h1>
                    <div className='grid md:grid-cols-2 justify-between gap-10 mt-10'>
                        <h1 className='text-2xl sm:text-3xl lg:text-[45px] font-bold uppercase leading-[3.75rem] tracking-wider md:pr-10'>
                            Services provide for you
                        </h1>
                        <p className='text-base leading-8 font-medium'>
                            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
                        </p>
                    </div>
                </header>
                <main className='flex items-center mt-20 gap-5 relative h-[80vh] overflow-hidden'>
                    <div className={` ease-in-out absolute transition-transform duration-1000 ${counter === 0 ? 'left-0 translate-x-0' : 'left-full translate-x-full'}`}>
                        <div className='flex items-center gap-10'>
                            <img src={c1} alt='' />
                            <img src={c2} alt='' />
                            <img src={c3} alt='' />
                        </div>
                    </div>
                    <div className={` ease-in-out absolute transition-transform duration-1000 ${counter === 1 ? 'left-0 translate-x-0' : 'left-full translate-x-full'}`}>
                        <div className='flex items-center gap-10'>
                            <img src={c2} alt='' />
                            <img src={c3} alt='' />
                            <img src={c1} alt='' />
                        </div>
                    </div>
                    <div className={` ease-in-out absolute transition-transform duration-1000 ${counter === 2 ? 'left-0 translate-x-0' : 'left-full translate-x-full'}`}>
                        <div className='flex items-center gap-10'>
                            <img src={c3} alt='' />
                            <img src={c1} alt='' />
                            <img src={c2} alt='' />
                        </div>
                    </div>

                </main>

                <div className="flex gap-4 mt-2">
                    <button><img src={counter === 0 ? activedot : dot} alt="" onClick={() => setCounter(0)} /></button>
                    <button><img src={counter === 1 ? activedot : dot} alt="" onClick={() => setCounter(1)} /></button>
                    <button><img src={counter === 2 ? activedot : dot} alt="" onClick={() => setCounter(2)} /></button>
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;
