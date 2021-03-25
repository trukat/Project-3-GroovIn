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
                        <h1>Vision</h1>
                        <h4>Create opportunities and build connections by bringing talent together in your local area.</h4>
                        <CardItem
                            src='Images/F1.gif'
                        />

                    </div>
                    <div className='col-sm-6'>
                        <CardItem
                            src='Images/F2.gif'
                        />
                        <h1>Features</h1>
                        <h4>Music, Networking, Local Events & More</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;