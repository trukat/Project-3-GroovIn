import { React } from 'react';
import './Cards.css';
import CardItem from './CardsItem';


function Cards() {
    return (

        <div className='Cards'>
            <h1>Featured</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='Images/F1.gif'
                            text='About GroovIn 
                            Vision
                            Create economic opportunity for every member of the global workforce.
                            Mission
                            The mission of GroovIn is simple: 
                            connect the world’s professional Musicians to make them 
                            more productive and successful.
                            Who are we?
                            Blah blah.
                            
                            '
                            path='/Register'
                        />
                        <CardItem
                            src='Images/F2.gif'
                            text='Featured Playlist, Network, Concert near you,
                            music & More'
                            path='/Register'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;