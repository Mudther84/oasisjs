import './oasis.css';
import img from './cooker.jpg';
function Slow() {
    return (
        <div>
        <section id="history">
        <div className="container">
          <h2>Our History</h2>
          <p>
            Established in 1995, our restaurant has been serving delicious,
            homemade dishes crafted with the finest ingredients and a passion for
            tradition. Originally a small family-owned eatery, we quickly became a
            local favorite, known for our warm atmosphere and authentic recipes
            passed down through generations. Over the years, we've expanded to
            serve more guests but remain committed to the same quality and
            hospitality that made us a beloved community spot. Join us and
            experience a taste of our history in every bite.
          </p>
          <img src={img} alt="" style={{width: "40%"}}/>
        </div>
      </section>
      <hr />
      </div>
    );
  }
  export default Slow;