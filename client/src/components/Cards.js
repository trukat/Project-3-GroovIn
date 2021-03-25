import { React } from 'react';
import './Cards.css';
import CardItem from './CardsItem';
import reportWebVitals from '../reportWebVitals';


function Cards() {
    return (

        <div className='Cards'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h3>Vision:</h3>
                        <p>Create opportunities and build connections by bringing talent together in your local area.</p>
                        <CardItem
                            src='Images/F1.gif'
                        />

                    </div>
                    <div className='col-sm-6'>
                        <CardItem
                            src='Images/F2.gif'
                        />
                        <h3>Features:</h3>
                        <p>Music, Networking, Local Events & More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;