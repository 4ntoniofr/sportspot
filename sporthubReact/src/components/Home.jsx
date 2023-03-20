import "../assets/styles/home.css";

export default function Home() {

  return (
    <div className="imagesSearch">
      <div className="container-fluid mt-3 mb-3">

        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner" id="imagesContainer">
            <div className="carousel-item active">
              <img src="https://www.hausdessports.ch/pictures/W1siZiIsIjIwMjEvMDgvMDMvNWx6bW1vdmZ1Ml9IZWFkZXJfSG9tZS5qcGciXSxbInAiLCJlbmNvZGUiLCJqcGVnIiwiLXF1YWxpdHkgODUiXV0/Header%20Home.jpeg?sha=9b9e941c8cc5becf" className="d-block w-100 h-100"/>
            </div>
            <div className="carousel-item" >
              <img src="https://img2.storyblok.com/1800x743/filters:focal():format(png)/f/115220/2400x990/244feeeb75/fightcamp-ways-to-improve-your-reflexes-for-boxing.png" className="d-block w-100 h-100" />
            </div>
            <div className="carousel-item">
              <img src="https://spunout.ie/wp-content/uploads/elementor/thumbs/surfing-q0ubkc6jrqbfnadhc7p5r5sbms3ybsqbmctk2g2u2g.jpg" className="d-block w-100 h-100" />
            </div>
          </div>

        </div>
      </div>

      <div className="p-3 mb-3 rounded bg-white">
        <h5 className="mb-3">Search what you want</h5>

          <div className="input-group mb-3">
            <input id="searchBar" type="text" className="form-control"/>
            <button id="searchButton" type="submit" className="btn btn-primary">Search</button>
          </div>

      </div>

    </div>
  );
}
