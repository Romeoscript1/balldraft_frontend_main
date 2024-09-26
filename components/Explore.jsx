import React from 'react'
import FantasyInfo from './FantasyInfo'
import FantasyDraft from './FantasyDraft'
import Transfer from './Transfer'
import ExploreForm from './ExploreForm'

const Explore = () => {
    return (
        <section className='bg-ballgray scroll-mt-24' id='what-we-offer'>
            <div className='text-center p-[1rem]'>
                <h2 className='font-bold text-2xl text-black mb-[1rem]'>Explore Our Game Features - Unleash The Excitement</h2>
                <p>Embark on a thrilling journey through our cutting-edge gameng features</p>
                <FantasyDraft />
                <FantasyInfo />
                <ExploreForm />
                <Transfer />
            </div>
        </section>
    )
}

export default Explore
