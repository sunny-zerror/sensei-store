import React from "react";
import ImagePops from "../effects/ImagePops";

const buttons = [
  {
    label: "Cosplay",
    img: "https://otakuindiastore.in/cdn/shop/files/451e19_921478c7134c4ebd88f0764d3d0a0f96_mv2_b6970856-8c21-4051-8415-54efc54d7344.jpg?v=1754216822&width=60",
  },
  {
    label: "Anime",
    img: "https://otakuindiastore.in/cdn/shop/files/410x0fOo59S._AC_UX679_a24385fb-19f3-4857-bc79-3c2b5e87137d.jpg?v=1754216479&width=533",
  },
  {
    label: "Katana",
    img: "https://otakuindiastore.in/cdn/shop/files/WhatsAppImage2023-04-30at05.04.05_6f956dd1-b58c-4f5a-b11e-e0ea34e82de2.jpg?v=1754216748&width=60",
  },
];

const AboutSection = () => {

  return (
    <>
      <ImagePops />

      <div className="home_aboutSection_hero background">

       <h3 className="home_aboutSection_title text-5xl">
        OUR JOURNEY <span className="rotate_animation"> ✺</span> FUELED BY PASSION FOR
        ANIME <span className="rotate_animation"> ✦</span> AND AUTHENTICITY.
      </h3>

      <p className="home_aboutSection_description text-2xl">
        From fandom to craftsmanship 😊, we bring you merch that’s more than
        just style — it’s a statement of who you are ✺. Every product is
        designed to spark joy, connect fans, and celebrate the worlds you love.
        Join the Otaku India family ✦ where your story meets your favourite
        universe.
      </p>

      <div className="home_aboutSection_buttonsWrapper">
        <div className="home_aboutSection_buttonsContainer">
          {buttons.map((btn, i) => (
            <div key={i} className="home_aboutSection_button">
              <div className="home_aboutSection_buttonAvatar">
                <img
                  className="home_aboutSection_buttonAvatarImg"
                  src={btn.img}
                  alt={btn.label}
                />
              </div>

              <div className="home_aboutSection_buttonLabelWrapper">
                <p className="home_aboutSection_buttonLabel">{btn.label}</p>
                <p className=" text-base home_aboutSection_buttonLabel home_aboutSection_buttonLabelClone">
                  {btn.label}
                </p>
                <div className="home_aboutSection_buttonUnderline"></div>
              </div>
            </div>
          ))}
        </div>
      </div> 
      </div>
    </>
  );
};

export default AboutSection;
