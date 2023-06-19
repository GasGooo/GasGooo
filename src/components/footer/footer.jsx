import { TextField } from '@mui/material'
import React from 'react'
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {
    return (
        <footer className="container">

            <div className="social">
                <div className='item'>
                    <a href='https://www.linkedin.com/in/eliazonta' className='element' target="blank">
                        Zonta Elia<LinkedInIcon className='linkedin' />
                    </a></div>

                <div className="item">
                    <a href='https://www.linkedin.com/in/lorenzo-pattaro-zonta-3044091ba/' className="element" target="blank">
                        Pattaro Lorenzo<LinkedInIcon className='linkedin' />
                    </a></div>
            </div>

            <hr className='linebreak' />

            <div className='base_text'>
                made with ❤️ by Elia & Lorenzo {/*&#169; */}
            </div>
        </footer>
    )
}

export default Footer