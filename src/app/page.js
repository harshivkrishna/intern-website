
import "./index.css"
export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="HeadingMain">The Social Project</h2>
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
          </ul>
          <img src="./assest/logo.png" alt="" className="logoImg" />
        </div>
      </nav>
    </div>
  );
}
