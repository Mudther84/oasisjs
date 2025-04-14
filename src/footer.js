function Footer() {
  return (
    <div class="footer-area" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-box about-widget">
              <h2 class="widget-title">About us</h2>
              <p>
                When a restaurant is popular, you can usually make a reservation
                to avoid waiting when you get there. This means you’ll have a
                table waiting for you at a certain time. All you have to do is
                show up!.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box get-in-touch">
              <h2 class="widget-title">Get in Touch</h2>
              <ul>
                <li>Dokki Yathreb S.t from sudan s.t</li>
                <li>mu2oasis@gmail.com</li>
                <li>+00 111 222 3333</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box pages">
              <h2 class="widget-title">Pages</h2>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="cart.html">Shop</a></li>
                <li><a href="News.html">News</a></li>
                <li><a href="contackt.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-box subscribe">
              <h2 class="widget-title">Subscribe</h2>
              <p>Subscribe to our mailing list to get the latest updates.</p>
              <form action="index.html">
                <input type="email" placeholder="Email" />
                <button type="submit" value="">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;