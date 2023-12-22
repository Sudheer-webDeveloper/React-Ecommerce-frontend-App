import React from "react";
import {BsTwitter,BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      {/* <hr className="hr-2"/> */}
      <div className="first-2">
        <div>
          <h4>Categories</h4>
          <p>Women</p>
          <p>Men</p>
          <p>Accessiors</p>
          <p>Shoes</p>
          <p>NewCollection</p>
        </div>
        <div>
          <h4>Links</h4>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Store</p>
          <p>Compare</p>
          <p>Cookies</p>
        </div>
        <div>
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            iste mollitia quia vero ea cum cupiditate sint consequatur aperiam
            dolorum ab tenetur, placeat labore, expedita veniam necessitatibus
            quo. Laboriosam, praesentium!
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            assumenda magni deserunt repudiandae voluptatem molestiae
            necessitatibus quia possimus. Eligendi ex repellendus culpa autem
            maxime repudiandae, mollitia accusantium dolorum at odio.
          </p>
        </div>
      </div>
       
      <div className="second-2">
        <h3>Fashion Store</h3>
        <p>Created by on 29/09/23. Copyright © 2023 . All rights reserved.</p>
        <div className="links-2">
          <BsTwitter className="twitter"/>
          <BsInstagram className="insta"/>
          <BsFacebook className="facebook"/>
          <BsWhatsapp className="whatsapp"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
