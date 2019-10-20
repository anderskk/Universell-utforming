import React from 'react';
import barbie from './images/barbie-pose.jpg';


const Home = () => (
    <div className="home">
        <div className="big-text">Hei bloggen</div>
            <hr />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu sem, rutrum eu ex eu, convallis molestie quam.
            Aliquam vulputate odio nec pulvinar placerat. Integer ultrices lectus est, sit amet posuere enim viverra cursus.
            Nullam feugiat faucibus justo, ultrices porttitor mi consectetur vehicula. Proin at nulla vehicula, rhoncus magna quis, placerat nunc.
            <hr />
            Suspendisse rhoncus, lacus non placerat molestie, quam lectus pharetra urna, id suscipit justo diam et libero.
            Praesent porta commodo ante vitae ornare. Nunc eget tincidunt tellus. Curabitur sit amet malesuada diam, sed egestas sem.
            Integer eu libero blandit nisi vehicula ornare.
            <hr />
            <img src={ barbie } />
    </div>
);

export default Home;
