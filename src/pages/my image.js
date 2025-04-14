import img1 from './my/img1.jpg';
import img2 from './my/img2.jpg';
import char from './my/Charity1.jpg';
function News() {
    return (
   <>
       <section id="news">
      <div class="container">
        <h2>Latest News</h2>
        <div class="news-item">
          <img src={img1} alt="New Menu Launch" />
          <div class="news-content">
            <h3>New Menu Launch</h3>
            <span class="date">October 15, 2024</span>
            <p>
              We’re excited to unveil our new fall menu, featuring seasonal
              ingredients and innovative dishes crafted by our chefs. Come try
              our new offerings!
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src={img2} alt="Award Announcement" />
          <div class="news-content">
            <h3>Voted Best Local Restaurant</h3>
            <span class="date">September 30, 2024</span>
            <p>
              Thank you to our loyal patrons! We’re honored to have been voted
              Best Local Restaurant for 2024. We couldn’t have done it without
              you!
            </p>
          </div>
        </div>

        <div class="news-item">
          <img src={char} alt="Charity Event" />
          <div class="news-content">
            <h3>Charity Event Success</h3>
            <span class="date">September 10, 2024</span>
            <p>
              Our charity event was a huge success! Together, we raised over
              $5,000 for local food banks. Thank you to everyone who
              participated.
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
    );
  }
  export default News;