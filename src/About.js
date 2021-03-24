import React from 'react';
import Pledge from './Pledge.js';

const About = () => {
  return (
    <div class="about box">
      <h2>About this project</h2>
      <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
      to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
      your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
      to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      <Pledge heading="Bamboo Stand" price="$25" />
      <Pledge heading="Black Edition Stand" price="$75" />
      <Pledge heading="Mahogany Special Edition" price="$200" />
    </div>
  )
}

export default About;
