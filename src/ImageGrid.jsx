import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ImageGrid = () => {
  let i = 0;
  const instaLinks = [
    "https://www.instagram.com/lakshay_1908/",
    "https://www.instagram.com/edc_tiet/",
    "https://www.instagram.com/shreya.goyal1/",
    "https://www.instagram.com/mohit_dwivedi_03/",
    "https://www.instagram.com/am__none_/",
    "https://www.instagram.com/edc_tiet/",
    "https://www.instagram.com/mr.curio_/",
    "https://www.instagram.com/priyanshuhuria/",
    "https://www.instagram.com/vanshtejwani/",
    "https://www.instagram.com/me.diksha20/",
    "https://www.instagram.com/theabhinavgarg/",
    "https://www.instagram.com/saumyak2682/",
    "https://www.instagram.com/agrim.gupta_/",
    "https://www.instagram.com/edc_tiet/",
    "https://www.instagram.com/adityaa_jainnn/",
  ];
  const linkedinLinks = [
    "https://www.linkedin.com/in/lakshay-gupta-709030159/",
    "https://www.linkedin.com/school/entrepreneurship-development-cell-thapar-university/",
    "https://www.linkedin.com/in/shreya-g-1b4761213/",
    "https://www.linkedin.com/in/mohit-dwivedi-/",
    "https://www.linkedin.com/in/anmol-830357230/",
    "https://www.linkedin.com/in/aditya-narayan-tyagi-169399227/",
    "https://www.linkedin.com/in/aaryan-tandon-64a9b6227/",
    "https://www.linkedin.com/in/priyanshu-huria-a5a531233/",
    "https://www.linkedin.com/in/vansh-tejwani-66a682226/",
    "https://www.linkedin.com/in/dikshajain6991/",
    "https://www.linkedin.com/in/abhinav-garg-40a327282/",
    "https://www.linkedin.com/in/saumya-katiyar-b885a121a/",
    "https://www.linkedin.com/in/aditya-jain-5177a8229/",
    "https://www.linkedin.com/school/entrepreneurship-development-cell-thapar-university/",
    "https://www.linkedin.com/in/connectagrimgupta/",
  ];
  const images = [
    "src/images/Img1.jpg",
    "src/images/Img2.jpg",
    "src/images/Img3.jpg",
    "src/images/Img4.jpg",
    "src/images/Img5.jpg",
    "src/images/Img6.jpg",
    "src/images/Img7.jpg",
    "src/images/Img8.jpg",
    "src/images/Img9.jpg",
    "src/images/Img10.jpg",
    "src/images/Img11.jpg",
    "src/images/Img12.jpg",
    "src/images/Img13.jpg",
    "src/images/Img14.jpg",
    "src/images/Img15.jpg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
      {Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="group relative">
          <img
            src={images[index % images.length]}
            alt={`Img${index + 1}`}
            className="w-auto h-auto transition-transform transform scale-100 group-hover:scale-110"
          />
          <a href={instaLinks[index % instaLinks.length]} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className=" text-white font-bold bg-black rounded-full p-2 m-5 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl" />
          </a>
          <a href={linkedinLinks[index % linkedinLinks.length]} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className=" text-white font-bold bg-black rounded-full p-2 m-5 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl"/>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;