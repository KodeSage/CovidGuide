export const settings = {
//   centerMode: true,
  infinite: true,
//   centerPadding: "60px",
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
    initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const firstTest = {
  content:
    "The medical related staff of UNN worked effoertlessly during the the pandemic to ensure they discover a cure for the disease but we were largely limited due to lack of funds. We are happy that a vaccine has been dicovered and we advise everyone to get vaccinated",
  tname: "Dr. Chuks Williams",
  img: require('../../Images/f.jpg'),
  occupation: "Senior Lecturer, UNN",
};
export const secondTest = {
  content:
    "Medical facilities has improved all over the world to ensure that people don’t die from Covid. The biggest challenge now is ignorance. Get informed now by this site and reduce the risk of you contracting virus",
  tname: "Abigail Ndu",
  img: require('../../Images/s.jpg'),
  occupation: "Nurse/Health worker",
};
export const thirdTest = {
  content:
    "I watched people die from corona virus during the pandemic and have also seen people recover from it. Corona virus is real but it is not a death sentence.",
  tname: "Dr. Theophilus David",
  img: require('../../Images/t.jpg'),
  occupation: "Medical Doctor, Switzerland",
};
export const fourthTest = {
  content:
    "The corona virus disease is real and I am a survivor. I suffered from Covid and recovered after 2 months. Corona virus can be prevented, and this guide can aid the prevention, hence shouldnt be taken for granted.",
  tname: "Collins Tunde",
  img: require('../../Images/fo.jpg'),
  occupation: "Survivor",
};