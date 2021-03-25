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
                        />
                        <div className='TextAbout'>dasda</div>
                        <CardItem
                            src='Images/F2.gif'
                        />
                        <div className='TextAbout'>sdhad</div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;