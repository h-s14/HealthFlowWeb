import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi impedit
          molestiae aperiam, minus obcaecati incidunt nemo vel adipisci
          laboriosam quisquam pariatur et quod praesentium architecto saepe enim
          illum ut. Dignissimos corrupti placeat, pariatur blanditiis nesciunt
          quis dolorum neque aut laboriosam necessitatibus maxime rem ea veniam
          totam ad laudantium exercitationem magni.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          odio corporis optio provident magnam et quisquam iure amet, sunt
          aperiam ipsam autem ipsa beatae eveniet! Doloremque possimus
          laudantium voluptatibus dolorum accusantium. Amet deserunt voluptas
          dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          molestiae. Consequuntur, quibusdam!
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
