import React from "react";

import '../Styles/Pages/LandingPage.scss';

import Restaurant from '../img/restaurant.jpg';
import Steak from '../img/steak.jpeg';
import Meal1 from '../img/meal1.jpg';
import Meal2 from '../img/meal2.jpg';
import Meal3 from '../img/meal3.jpg';


const LandingPage = () => {

    return(
        <div className='landing-page-wrapper'>
            <div className='landing-page-top pt-3' style={{ backgroundImage: `url(${Restaurant})`}}>
                <div className='nav-wrapper columns'>
                    <div className='column has-text-light is-size-3 title'>Home</div>
                    <div className='column has-text-light is-size-3 title' >About</div>
                    <div className='column has-text-light is-size-3 title' >Order</div>
                    <div className='column has-text-light is-size-3 title' >Login</div>
                    <div className='column has-text-light is-size-3 title' >Signup</div>
                    
                </div>
            </div>
            <div>
                <div className='ladning-page-middle-1 py-6'>
                   <div className='card-wrapper columns'>
                        <div className='card column mx-3 ml-6'>
                            <div className='card-image'>
                                <figure className="image is-3by2">
                                    <img src={Meal1} alt='Steak' />
                                </figure>
                            </div>
                            <div className='card-content'>
                                <div className='title is-size-2 has-text-info has-text-centered'>Lorem ipsum dolor sit amet</div>
                                <p className='mb-6 has-text-justified has-letter-spacing-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium orci. Mauris placerat imperdiet lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium orci. Mauris placerat imperdiet lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis."</p>
                                <button className='button is-medium is-fullwidth is-primary has-text-light'>Lorem ipsum</button>
                            </div>
                        </div>
                        <div className='card column mx-3'>
                        <div className='card-image'>
                                <figure className="image is-3by2">
                                    <img src={Meal2} alt='Steak' />
                                </figure>
                            </div>
                            <div className='card-content'>
                                <div className='title is-size-2 has-text-info has-text-centered'>Lorem ipsum dolor sit amet</div>
                                <p className='mb-6 has-text-justified has-letter-spacing-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium orci. Mauris placerat imperdiet lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium orci. Mauris placerat imperdiet lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis."</p>
                                <button className='button is-medium is-fullwidth is-primary has-text-light'>Lorem ipsum</button>
                            </div>
                        </div>
                        <div className='card column mx-3 mr-6'>
                        <div className='card-image'>
                                <figure className="image is-3by2">
                                    <img src={Meal3} alt='Steak' />
                                </figure>
                            </div>
                            <div className='card-content'>
                                <div className='title is-size-2 has-text-info has-text-centered'>Lorem ipsum dolor sit amet</div>
                                <p className='mb-6 has-text-justified has-letter-spacing-1'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium orci. Mauris placerat imperdiet lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium orci. Mauris placerat imperdiet lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis."</p>
                                <button className='button is-medium is-fullwidth is-primary has-text-light'>Lorem ipsum</button>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='container ladning-page-middle-2 my-6'>
                    <figure className='image is-128by128 p-4'>
                        <img src={Steak} alt='steak' />
                    </figure>
                    <p className='has-text-justified is-size-4 is-family-primary has-text-dark'>
                        <span className='is-size-1 has-text-info is-family-secondary'>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mollis sem. Quisque tincidunt eu diam id consectetur. Phasellus rutrum facilisis tortor, ac dapibus nisi volutpat non. Proin mi arcu, faucibus sit amet lectus nec, eleifend tincidunt risus. Donec vulputate felis nulla, eget interdum enim fringilla luctus. Integer a gravida orci, vel aliquet est. Pellentesque eget aliquet ligula, a tempor magna. Etiam quis euismod nunc. Nullam justo tellus, tristique in diam id, sodales dignissim est. Nulla facilisi. Cras eget pharetra ligula. Aenean a venenatis quam. Aliquam ornare convallis enim in vehicula. Phasellus non nulla egestas nunc bibendum suscipit vitae dapibus quam.
                        Ut rutrum at augue ut bibendum. Phasellus placerat ultricies finibus. Sed aliquet, arcu suscipit maximus placerat, mi orci laoreet felis, a lacinia est magna ac sapien. Integer a tempor orci. Etiam maximus diam ante, non imperdiet mi lobortis ac. Phasellus a urna facilisis, ultrices odio ac, tempus libero. Maecenas vel consequat est. Etiam eleifend condimentum urna sit amet tempus. Duis eu arcu non dui interdum dapibus. Etiam feugiat hendrerit magna eu efficitur. Vestibulum turpis massa, condimentum vitae rhoncus eget, consectetur vitae nulla
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;