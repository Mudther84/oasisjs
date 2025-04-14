import food1 from './food1.png';
import food7 from './food7.jpeg';
import food2 from './food2.png';
import food5 from './food5.png';
import food9 from './food9.jpeg';
import food3 from './food3.png' ;
import food4 from './food4.png';
import orange from './orange juice.jpg';
function  Pizza() {
  return (
    <div>
    <main>
      <div
        className="container-fluid bg-trasparent my-4 p-3"D
        style={{position: "relative"}}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={food1} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-primary"
                    >LASAL CHEESE</span>
                  <span className="float-end price-hp">120.00EGY</span>
                </div>
                <h5 className="card-title">
                  salatuna with tust bread and some garlick sauce
                </h5>
                <div className="text-center my-4">
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={food7} className="card-img-top" alt="..." style={{borderRadius: "50%"}} />
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">240.00EGY</span>
                  <span className="float-end"><a href="cart.html" class="small text-muted">Reviews</a></span>
                </div>
                <h5 className="card-title">
                  Charcoal grilled Kofta with vegitables salad and tahini salad
                </h5>
                <div className="d-grid gap-2 my-4">
                  <a href="cart.html" className="btn btn-warning">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={food2} className="card-img-top" alt="..." />
              <div className="label-top shadow-sm">JUMBO CRAB SHRIMP</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success"
                    >310.00EGY</span>
                  <span className="float-end"></span>
                </div>
                <h5 className="card-title">
                  Sea shrimp best and fresh taste With cheese and tartar salad
                </h5>
                <div className="text-center my-4">
                  <a href="cart.html" className="btn btn-warning">Add to cart</a>
                </div>
                <div className="clearfix mb-1">
                  <span className="float-start"><i className="far fa-question-circle"></i></span>
                  <span className="float-end"><i className="fas fa-plus"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={food3} className="card-img-top" alt="..." />
              <div className="label-top shadow-sm">BEET JUCIE</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start price-hp">55.00EGY</span>
                  <span className="float-end"><a className="text-muted small" href="cart.html">Reviews</a></span>
                </div>
                <h5 className="card-title">
                  Beetrot juice helps to boots fatand metabolism
                </h5>
                <div className="text-center my-4">
                  <a href="cart.html" className="btn btn-warning">Check offer</a>
                </div>
                <div className="clearfix mb-1">
                  <span className="float-start"><i className="far fa-question-circle"></i></span>
                  <span className="float-end"><i className="fas fa-plus"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <br />
    <main>
      <div className="container-fluid bg-trasparent my-4 p-3" style={{position: "relative"}}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={food4} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-primary">CAPO STEAK</span>
                  <span className="float-end price-hp">320.00EGY</span>
                </div>
                <h5 className="card-title">
                  Mixed grill on charcoal with vegetables
                </h5>
                <div className="text-center my-4">
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={food5} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success"
                    >12354.00&euro;</span>
                  <span className="float-end"></span>
                </div>
                <h5 className="card-title">
                  Mixed donuts plate our special desert dish
                </h5>
                <div className="d-grid gap-2 my-4">
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={food9}
                className="card-img-top"
                alt="..."
                style={{borderRadius: "50%"}}
              />
              <div className="label-top shadow-sm">Fruit pancakes</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">190.00EGY</span>
                  <span className="float-end">Oasis</span>
                </div>
                <h5 className="card-title">
                  Fruit pancakes for healthey breakfast
                </h5>
                <div className="text-center my-4">
                  <a href="cart.html" class="btn btn-warning">Check offer</a>
                </div>
                <div className="clearfix mb-1">
                  <span className="float-start"><i className="far fa-question-circle"></i></span>
                  <span className="float-end"><i class="fas fa-plus"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <img src={orange} className="card-img-top" alt="..."/>
              <div className="label-top shadow-sm">Orange juice</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start price-hp">60.00EGY</span>
                  <span className="float-end"></span>
                </div>
                <h5 className="card-title">Fresh orange&Lemon juice</h5>
                <div className="text-center my-4">
                  <a href="cart.html" class="btn btn-warning">Check offer</a>
                </div>
                <div className="clearfix mb-1">
                  <span className="float-start">
                    <i className="far fa-question-circle"></i>
                </span>
                  <span className="float-end"><i className="fas fa-plus"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <i className="fa-solid fa-plane" style={{color: "white"}}></i>
    </div>
);
}
export default Pizza;