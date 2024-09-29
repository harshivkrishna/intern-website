import Image from 'next/image';
import Logo from "../../public/assest/logo.png"
import Banner1 from "../../public/assest/the social project 1.png"
import Banner2 from "../../public/assest/TSP Homepage Image.png"
import Whatwedo from "../../public/assest/whatwedo.png"
import Typesimg from "../../public/assest/types.png"
import TypeBg from "../../public/assest/typesbg.png"
import JointSponser from "../../public/assest/jointprogram.png"
import Narrative from "../../public/assest/narrative.png"

import card1 from "../../public/assest/card1img.png"
import card2 from "../../public/assest/card2img.png"
import card3 from "../../public/assest/card3img.png"
import card4 from "../../public/assest/card4img.png"
import card5 from "../../public/assest/card5img.png"

import 'remixicon/fonts/remixicon.css'
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
            <button className="btn">Donate</button>
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
      <section className="descp">
        <h1>EMPOWERING COMMUNITIES: OVERCOMING THE CYCLE OF POVERTY AD INEQUALITY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat eligendi consequatur quasi asperiores beatae architecto dicta corporis et fugiat aperiam alias praesentium, recusandae, doloribus eos, aliquid assumenda ipsa? Id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo qui inventore tempora necessitatibus mollitia quisquam odit ut iste quia, ullam aliquid, ratione voluptatem modi exercitationem sed, unde autem non!</p>
        <br />
        <p>Our mission is to provide essential support accross various areas:</p>
        <ul>
          <li>Education: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda recusandae ullam mollitia maiores harum ratione quisquam ea tempore. Quas iste distinctio eaque, consequuntur rerum velit modi ad quibusdam fuga a, neque quisquam impedit! Doloribus numquam illo ullam adipisci cumque mollitia!</li>
          <li>Women Empowerment: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur rem suscipit consequatur mollitia consectetur temporibus ea nostrum vel dolorum obcaecati, est modi, fugiat sed excepturi nobis, totam facere pariatur ab fugit dicta. Placeat quidem, quibusdam quo officiis ad nobis?</li>
          <li>Health and Awareness: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem debitis, ea deleniti aliquid tempora quod tenetur totam quam corrupti odit neque possimus autem. Aperiam quia quisquam ex eveniet sapiente velit necessitatibus ratione inventore obcaecati, impedit veniam recusandae fugit alias pariatur?</li>
        </ul>
        <p>Community Support: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laudantium voluptas voluptate, possimus ducimus assumenda adipisci numquam molestias eveniet</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum doloribus doloremque saepe? Voluptates maiores sunt sed assumenda, exercitationem natus totam deserunt nostrum qui atque aliquam suscipit, dignissimos doloremque at illo nemo non quaerat distinctio provident quasi a numquam nisi. Explicabo facere eligendi id perspiciatis veritatis inventore quo expedita culpa voluptatibus ea nesciunt excepturi aut rerum ipsum consequatur placeat unde ratione quos voluptates, itaque molestias, quasi officiis nemo est? Maxime, itaque?</p>
        <div className="container-btn">
          <button className='btn'>Donate</button>
        </div>
      </section>


      <section className="types">

        <h1>A MODEL BRINGING IMPACT IN THE SOCIETY</h1>
        <h3>Can transform lives for ever...</h3>

        <div className="types-container">
          <div className="types-left">
              <h4>Love and Care</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil natus laboriosam at nisi magnam, quam mollitia? Ipsum, earum deserunt. Libero molestiae rem neque tenetur eius molestias culpa ut veritatis?</p>
              <br />
              <h4>Awareness</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum at earum cum itaque quibusdam animi rem est eum possimus veniam? Est eum nobis laborum minus similique quae non error repellat?</p>
              <br />
              <h4>Education</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga ducimus temporibus consectetur labore rem, sapiente ullam error tenetur distinctio ipsa perspiciatis deleniti provident tempora eos id ipsam, inventore natus.</p>

          </div>

          <div className="types-center">
              <Image src={Typesimg} className='types-image'></Image>
          </div>

          <div className="types-right">
          <h4>Love and Care</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil natus laboriosam at nisi magnam, quam mollitia? Ipsum, earum deserunt. Libero molestiae rem neque tenetur eius molestias culpa ut veritatis?</p>
              <br />
  
              <h4>Education</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fuga ducimus temporibus consectetur labore rem, sapiente ullam error tenetur distinctio ipsa perspiciatis deleniti provident tempora eos id ipsam, inventore natus.</p>
          </div>
        </div>
      </section>

      <section className="contribution">
        <h1>Donate Now</h1>
        <div className="contribute-cards">
          <div className="card">
            <h4>EmpowerHER</h4>
            <p><span className='price'>₹2,000</span><span>/month</span></p>
            <Image src={card1} className='card-image'></Image>
            <div className="title-container">
                <p>Sponser a girl child</p>
                <i class="ri-arrow-right-up-line"></i>
            </div>
            <div className="list-container">
              <ul>
                <li>Educational Support</li>
                <li>Personel Mentorship</li>
              </ul>
              <hr />
              <ul>
                <li>Health and Nutrition</li>
                <li>Hygiene and sanitation</li>
              </ul>
              <hr />
              <ul>
                <li>Medical care</li>
                <li>Imparting Ethics and values and more...</li>
              </ul>
            </div>
            <div className="button-container">
            <button className='donate-btn'>Donate</button>
            </div>
          </div>

          <div className="card">
            <h4>KnowLEDGE</h4>
            <p><span className='price'>₹1,800</span><span>/month</span></p>
            <Image src={card2} className='card-image'></Image>
            <div className="title-container">
                <p>Educate a Child</p>
                <i class="ri-arrow-right-up-line"></i>
            </div>
            <div className="list-container">
              <ul>
                <li>Girl or Boy Child's School Education</li>
                
              </ul>
              <hr />
              <ul>
                <li>Imparting Ethics and Values</li>
                <li>Awareness programs</li>
              </ul>
              <hr />
              <ul>
                <li>Imparting Ethics and values</li>
                <li>Medical camps and more...</li>
              </ul>
            </div>
            <div className="button-container">
            <button className='donate-btn'>Donate</button>
            </div>
          </div>

          <div className="card">
            <h4>HouseHOLD</h4>
            <p><span className='price'>₹2,200</span><span>/month</span></p>
            <Image src={card3} className='card-image'></Image>
            <div className="title-container">
                <p>Support a family</p>
                <i class="ri-arrow-right-up-line"></i>
            </div>
            <div className="list-container">
              <ul>
                <li>Basic Necessities</li>
                <li>Child Education</li>
              </ul>
              <hr />
              <ul>
                <li>Health and wellbeing </li>
                <li>Emergency support</li>
              </ul>
              <hr />
              <ul>
                <li>Skill development</li>
                <li>Medical camps and more...</li>
              </ul>
            </div>
            <div className="button-container">
            <button className='donate-btn'>Donate</button>
            </div>
          </div>

          <div className="card">
            <h4>ProVISION</h4>
            <p><span className='price'>₹2,000</span><span>/month</span></p>
            <Image src={card4} className='card-image'></Image>
            <div className="title-container">
                <p>Support a project</p>
                <i class="ri-arrow-right-up-line"></i>
            </div>
            <div className="list-container">
              <ul>
                <li>Education </li>
                <li>Self-Sustainablity</li>
              </ul>
              <hr />
              <ul>
                <li>Mentorship</li>
                <li>Women empowerment</li>
              </ul>
              <hr />
              <ul>
                <li>Medical care</li>
                <li>Communtiy development and more...</li>
              </ul>
            </div>
            <div className="button-container">
            <button className='donate-btn'>Donate</button>
            </div>
          </div>

          <div className="card">
            <h4>One time Donation</h4>
            <p><span className='price'>₹2,000</span><span>/month</span></p>
            <Image src={card5} className='card-image'></Image>
            <div className="title-container">
                <p>Any project</p>
                <i class="ri-arrow-right-up-line"></i>
            </div>
            <div className="list-container">
              <ul>
                <li>Education</li>
                <li>Self sustainability</li>
              </ul>
              <hr />
              <ul>
                <li>Mentorship</li>
                <li>Women empowerment</li>
              </ul>
              <hr />
              <ul>
                <li>Medical care</li>
                <li>Imparting Ethics and values and more...</li>
              </ul>
            </div>
            <div className="button-container">
            <button className='donate-btn'>Donate</button>
            </div>
          </div>
        </div>
      </section>

      <section className="joint-sponsership-program">
        <Image src={JointSponser} className='jointImg'></Image>
      </section>

      <section className="impact-narratives">
          <h2 className="impact-heading">Impact Narratives</h2>
          <div className="impact-container">
          <div className="narratives-container">
              <div className="narratives-left">
                <Image src={Narrative} className='narrativesimage'></Image>
                <div className="left-text-container">
                  <p>"This shop had everything I was looking for plus so much more."</p>
                  <br />
                  <p>From the minute I walked in, everyone made me feel so incredible welcome. I will definitely be back."</p>
                  <br />
                  <p>-Nadia L.</p>
                </div>
              </div>
              <div className="right-text-container">
                  <h2>JOIN HANDS WITH US TO MAKE MANY MORE DREAMS COME TRUE.</h2>
              </div>
          </div>
          </div>
      </section>

    </div>
  );
}
