import Image from "next/image"
const Slider=()=>(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image
        src="/film.jpg"
        alt="us working"
        width={1000}
        height={350}
       
      />
       <div className="carousel-caption d-none d-md-block">
    <h5>Control Room</h5>
    <p>State of the Art Modern Television Set</p>
  </div>
    </div>
    <div className="carousel-item">
    <Image
        src="/Radio.jpg"
        alt="us working"
        width={1000}
        height={350}
        className="d-block w-100" 
       
      />
      
      <h5>Radio Broadcasting</h5>
    <p>The voice that goes beyond the borders</p>
    </div>
    <div className="carousel-item">
    <Image
        src="/film.jpg"
        alt="us working"
        width={1000}
        height={350}
        className="d-block w-100" 
       
      />
      
      <h5>Film Products</h5>
    <p></p>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
)
export default Slider;
