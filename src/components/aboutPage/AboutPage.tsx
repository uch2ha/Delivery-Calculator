import './AboutPage.css';
import React from 'react';
import NavBar from '../navBar/NavBar';

const AboutPage = () => {
  return (
    <div className='root-container'>
      <NavBar />
      <div className='about-container'>
        <div className='about-logo'>
          <span>Rules for calculating a delivery fee</span>
        </div>
        <div className='about-item'>
          <p>
            If the cart value is less than 10€, a small order surcharge is added
            to the delivery price. The surcharge is the difference between the
            cart value and 10€. For example if the cart value is 8.90€, the
            surcharge will be 1.10€.
          </p>
        </div>
        <div className='about-item'>
          <p>
            A delivery fee for the first 1000 meters (=1km) is 2€. If the
            delivery distance is longer than that, 1€ is added for every
            additional 500 meters that the courier needs to travel before
            reaching the destination. Even if the distance would be shorter than
            500 meters, the minimum fee is always 1€.
          </p>
          <ul>
            <li>
              <span>
                Example 1: If the delivery distance is 1499 meters, the delivery
                fee is: 2€ base fee + 1€ for the additional 500 m = 3€
              </span>
            </li>
            <li>
              <span>
                Example 2: If the delivery distance is 1500 meters, the delivery
                fee is: 2€ base fee + 1€ for the additional 500 m = 3€
              </span>
            </li>
            <li>
              <span>
                Example 3: If the delivery distance is 1501 meters, the delivery
                fee is: 2€ base fee + 1€ for the first 500 m + 1€ for the second
                500 m = 4€
              </span>
            </li>
          </ul>
        </div>
        <div className='about-item'>
          <p>
            If the number of items is five or more, an additional 50 cent
            surcharge is added for each item above and including the fifth item.
            An extra "bulk" fee applies for more than 12 items of 1,20€
          </p>
          <ul>
            <li>
              <span>
                Example 1: If the number of items is 4, no extra surcharge
              </span>
            </li>
            <li>
              <span>
                Example 2: If the number of items is 5, 50 cents surcharge is
                added
              </span>
            </li>
            <li>
              <span>
                Example 3: If the number of items is 10, 3€ surcharge (6 x 50
                cents) is added
              </span>
              <span>
                Example 4: If the number of items is 13, 5,70€ surcharge is
                added ((9 * 50 cents) + 1,20€)
              </span>
            </li>
          </ul>
        </div>
        <div className='about-item'>
          <p>
            The delivery fee can never be more than 15€, including possible
            surcharges.
          </p>
        </div>
        <div className='about-item'>
          <p>
            The delivery is free (0€) when the cart value is equal or more than
            100€.
          </p>
        </div>
        <div className='about-item'>
          <p>
            During the Friday rush (3 - 7 PM UTC), the delivery fee (the total
            fee including possible surcharges) will be multiplied by 1.2x.
            However, the fee still cannot be more than the max (15€).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
