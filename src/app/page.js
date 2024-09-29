import Image from 'next/image';
import Logo from "../../public/assest/logo.png"
import Banner1 from "../../public/assest/the social project 1.png"
import Banner2 from "../../public/assest/TSP Homepage Image.png"

import "./index.css"
export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="heading">
        <h2 className="HeadingMain">The Social Project</h2>
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Get Involved</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <button className="nav-btn">Donate</button>
            <Image  src={Logo} className="logoImg" ></Image>
          </ul>
        </div>
        
      </nav>
      <section className='header-section'>
        <div className="header-section-left">
        <div>
        <h2>SET THE CHANGES IN MOTION</h2>
        <h1>Secure her path in a brighter future...</h1>
        <div class="input-container">
        <input type="text" />
        <button class="join-btn">Join us today</button>
        </div>
        </div>
        </div>
        <div className="header-section-right">
          <Image src={Banner1} className='headerImg1'></Image>
          <Image src={Banner2} className='headerImg2'></Image>
        </div>
      </section>
    </div>
  );
}
