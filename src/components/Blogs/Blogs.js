import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2> what is semantic tag?</h2>
            <p> Semantic tag is meaning ful html tag. semantic tag provide website is more accessible. help to irregular persone to oparate the website. improve developer readablity for devloping website. Helps in SEO , screen reader, proper customise. some semantic tag are : section, article, aside, nav, h1, h2, h3, h4, h5, h6,head, header, footer,summary, title, time etc.
            </p>
            <br />
            <br />
            <h2> what is inline, inlineblock, block element?</h2>
            <p> Inline element: Inline element is not start from a newline always start from one by one on the basics of alignment. height and width is not set . it is the generic behavior.
                <br /> Inline-block element: Inline-block element is not start from a newline always start from one by one on the basics of alignment. height and width is set but dont move they can take height and width but seat on the same place  . it is the generic behavior.
                <br /> Block element: Block element is start from a newline always start from new line on the basics of alignment. height and width is set but dont move they can take height and width from a new line. it is the generic behavior.

            </p>
        </div>
    );
};

export default Blogs;