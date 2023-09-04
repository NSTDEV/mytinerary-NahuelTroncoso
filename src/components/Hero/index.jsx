import './style.css'
import { Link as Anchor } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <section id='hero-container'>
                <div id='hero-info'>
                    <div id='hero-text'>
                        <h2 id='hero-title'>My Tinerary</h2>
                        <h3 id='hero-subtitle'>Find your perfect trip, designed by insiders who know and love their cities!</h3>
                    </div>

                    <div id='call-to-action'>
                        <i className="fa-solid fa-suitcase-rolling" id='hero-icon'></i>
                        <Anchor to={'/cities'} className={'animation'} id={'hero-button'}>Explore!</Anchor>
                    </div>
                </div>
            </section>
        </>
    );
};
