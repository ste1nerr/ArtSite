import FPC from './FirstPageContent.module.scss'
import React from 'react'

const FirstPageContent = () => {
    return (
        <div className='container'>


            <div className={FPC.content_container}>
                <p className={FPC.up_subtitle}>Ceramics</p>
                <h1 className={FPC.under_title}>Your Vision of art</h1>
                <p className={FPC.under_subtitle}>Handmade</p>
                <button>First Class</button>
            </div>


        </div>
    )
}

export default FirstPageContent