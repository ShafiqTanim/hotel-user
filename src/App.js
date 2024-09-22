import React from "react";

function App() {
  return (
<>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="author" content="Untree.co"/>
  <link rel="shortcut icon" href="favicon.png"/>

  <meta name="description" content="" />
  <meta name="keywords" content="" />

    <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,500i,700|Roboto:300,400,500,700&display=swap" rel="stylesheet"/>

    <link rel="stylesheet" href="css/vendor/icomoon/style.css"/>
    <link rel="stylesheet" href="css/vendor/owl.carousel.min.css"/>
    <link rel="stylesheet" href="css/vendor/aos.css"/>
    <link rel="stylesheet" href="css/vendor/animate.min.css"/>
    <link rel="stylesheet" href="css/vendor/bootstrap.css"/>

    {/* Theme Style */}
    <link rel="stylesheet" href="css/style.css"/>

    <title>LuxuryHotel Free HTML Template by Untree.co</title>
  </head>
  <body>

    <div id="untree_co--overlayer"></div>
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>

    <nav className="untree_co--site-mobile-menu">
      <div className="close-wrap d-flex">
        <a href="#" className="d-flex ml-auto js-menu-toggle">
          <span className="close-label">Close</span>
          <div className="close-times">
            <span className="bar1"></span>
            <span className="bar2"></span>
          </div>
        </a>
      </div>
      <div className="site-mobile-inner"></div>
    </nav>


    <div className="untree_co--site-wrap">

      <nav className="untree_co--site-nav js-sticky-nav">
        <div className="container d-flex align-items-center">
          <div className="logo-wrap">
            <a href="index.html" className="untree_co--site-logo">LuxuryHotel</a>
          </div>
          <div className="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul className="site-nav-ul js-clone-nav">
              <li className="active"><a href="index.html">Home</a></li>
              <li className="has-children">
                <a href="rooms.html">Rooms</a>
                <ul className="dropdown">
                  <li className="has-children">
                    <a href="#">King Bedroom</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">King Bedroom</a>
                      </li>
                      <li>
                        <a href="#">Queen &amp; Double Bedroom</a>
                      </li>
                      <li>
                        <a href="#">Le Voila Suite</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Queen &amp; Double Bedroom</a>
                  </li>
                  <li>
                    <a href="#">Le Voila Suite</a>
                  </li>
                </ul>
              </li>
              <li><a href="amenities.html">Amenities</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="icons-wrap text-md-right">

            <ul className="icons-top d-none d-lg-block">
              <li className="mr-4">
                <a href="#" className="js-search-toggle"><span className="icon-search2"></span></a>
              </li>
              <li>
                <a href="#"><span className="icon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span className="icon-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span className="icon-instagram"></span></a>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <a href="#" className="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </nav>

      <div className="untree_co--site-main">
        

        <div className="owl-carousel owl-hero">

          <div className="untree_co--site-hero overlay" style={{backgroundImage: "url('images/slider_2.jpg')"}}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-8">
                  <div className="site-hero-contents text-center" data-aos="fade-up">
                    <h1 className="hero-heading">LuxuryHotel by Untree.co</h1>
                    <div className="sub-text">
                      <p>Another free awesome templates for Hotels and any kind of website by <a href="https://untree.co/" target="_blank" className="text-white font-weight-bold">Untree.co</a>. See our <a href="https://untree.co/license/" className="text-white font-weight-bold">license page</a> for more usage details</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="untree_co--site-hero overlay"  style={{backgroundImage: "url('images/slider_1.jpg')"}}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7">
                  <div className="site-hero-contents text-center" data-aos="fade-up">
                    <h1 className="hero-heading">Enjoy Your Stay</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="untree_co--site-hero overlay" style={{backgroundImage: "url('images/room_1_a.jpg')"}}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-10">
                  <div className="site-hero-contents text-center" data-aos="fade-up">
                    <h1 className="hero-heading">Away from the Hustle and Bustle of City Life</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="untree_co--site-section float-left pb-0 featured-rooms">

          <div className="container pt-0 pb-5">
            <div className="row justify-content-center text-center">  
              <div className="col-lg-6 section-heading" data-aos="fade-up">
                <h3 className="text-center">Featured Rooms</h3>
              </div>
            </div>
          </div>

          <div className="container-fluid pt-5">
            <div className="suite-wrap overlap-image-1">

              <div className="suite">
                <div className="image-stack">
                  <div className="image-stack-item image-stack-item-top" data-jarallax-element="-50">
                    <div className="overlay"></div>
                    <img src="images/room_1_a.jpg" alt="Image" className="img-fluid pic1"/>
                  </div>
                  <div className="image-stack-item image-stack-item-bottom">
                    <div className="overlay"></div>
                    <img src="images/room_1_b.jpg" alt="Image" className="img-fluid pic2"/>
                  </div>
                </div>
              </div> {/* .suite */}

              <div className="suite-contents" data-jarallax-element="50">
                <h2 className="suite-title">King Bedroom</h2>
                <div className="suite-excerpt">
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger.</p>
                  <p><a href="#" className="readmore">Room Details</a></p>
                </div>
              </div>
            </div>

            <div className="suite-wrap overlap-image-2">

              <div className="suite">
                <div className="image-stack">
                  <div className="image-stack-item image-stack-item-top">
                    <div className="overlay"></div>
                    <img src="images/room_2_a.jpg" alt="Image" className="img-fluid pic1"/>
                  </div>
                  <div className="image-stack-item image-stack-item-bottom" data-jarallax-element="-50">
                    <div className="overlay"></div>
                    <img src="images/room_2_b.jpg" alt="Image" className="img-fluid pic2"/>
                  </div>
                </div>
              </div>

              <div className="suite-contents" data-jarallax-element="50">
                <h2 className="suite-title">Queen &amp; Double Bedroom</h2>
                <div className="suite-excerpt pr-5">
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger</p>
                  <p><a href="#" className="readmore">Room Details</a></p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="untree_co--site-section">
          <div className="container">
            <div className="container pt-0 pb-5">
            <div className="row justify-content-center text-center">  
              <div className="col-lg-6 section-heading" data-aos="fade-up">
                <h3 className="text-center">Hotel Amenities</h3>
              </div>
            </div>
          </div>
            <div className="row custom-row-02192 align-items-stretch">
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                <div className="media-29191 text-center h-100">
                  <div className="media-29191-icon">
                    <img src="images/svg/parking.svg" alt="Image" className="img-fluid"/>
                  </div>
                  <h3>Free Self-Parking</h3>
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                  <p><p><a href="#" className="readmore reverse">Read More</a></p></p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="media-29191 text-center h-100">
                  <div className="media-29191-icon">
                    <img src="images/svg/internet.svg" alt="Image" className="img-fluid"/>
                  </div>
                  <h3>High speed Internet access</h3>
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                  <p><p><a href="#" className="readmore reverse">Read More</a></p></p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                <div className="media-29191 text-center h-100">
                  <div className="media-29191-icon">
                    <img src="images/svg/wifi.svg" alt="Image" className="img-fluid"/>
                  </div>
                  <h3>Complimentary WiFi in public areas</h3>
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                  <p><p><a href="#" className="readmore reverse">Read More</a></p></p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="media-29191 text-center h-100">
                  <div className="media-29191-icon">
                    <img src="images/svg/elevator.svg" alt="Image" className="img-fluid"/>
                  </div>
                  <h3>Elevators</h3>
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                  <p><p><a href="#" className="readmore reverse">Read More</a></p></p>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                <div className="media-29191 text-center h-100">
                  <div className="media-29191-icon">
                    <img src="images/svg/partners.svg" alt="Image" className="img-fluid"/>
                  </div>

                  <h3>Meeting rooms</h3>
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                  <p><p><a href="#" className="readmore reverse">Read More</a></p></p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="media-29191 text-center h-100">
                  <div className="media-29191-icon">
                    <img src="images/svg/washing-machine.svg" alt="Image" className="img-fluid"/>
                  </div>
                  <h3>Laundry and Valet service</h3>
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
                  <p><p><a href="#" className="readmore reverse">Read More</a></p></p>
                </div>
              </div>

            </div>
          </div>
        </div>
        

        
        

        <div className="untree_co--site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 section-heading" data-aos="fade-up">
                <h3 className="text-left">News &amp; Events</h3>
                <div className="w-75">
                  <p>A hotel is an establishment that provides paid lodging on a short-term basis.</p>
                  </div>
                <p><a href="#" className="readmore">All Posts</a></p>
              </div>
              <div className="col-md-4">
                <div className="post-entry" data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="thumb"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                  <div className="post-entry-contents">
                    <h3><a href="#">How algorithms shape our world</a></h3>
                    <div className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div>
                    <p>A hotel is an establishment that provides paid lodging on a short-term basis.</p>
                    <p><a href="#" className="readmore">Read more</a></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="post-entry" data-aos="fade-up" data-aos-delay="200">
                  <a href="#" className="thumb"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                  <div className="post-entry-contents">
                    <h3><a href="#">How algorithms shape our world</a></h3>
                    <div className="date">December 20, 2019 &bullet; by <a href="#">Joefrey Mahusay</a></div>
                    <p>A hotel is an establishment that provides paid lodging on a short-term basis.</p>
                    <p><a href="#" className="readmore">Read more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="untree_co--site-section py-5 bg-body-darker cta">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="m-0 p-0">If you have any special requests, please feel free to call us. <a href="tel://+123456789012">+12.345.678.9012</a></h3>
              </div>
            </div>
          </div>
        </div>


      </div>
      <footer className="untree_co--site-footer">

        <div className="container">
          <div className="row">
            <div className="col-md-4 pr-md-5">
              <h3>About Us</h3>
              <p>A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a modest-quality.</p>
              <p><a href="#" className="readmore">Read more</a></p>
            </div>
            <div className="col-md-8 ml-auto">
              <div className="row">
                <div className="col-md-3">
                  <h3>Navigation</h3>
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Amenities</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="col-md-9 ml-auto">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <h3>Address</h3>
                      <address>273 South Riverview Rd. <br/> New York, NY 10011</address>
                    </div>
                    <div className="col-md-6">
                      <h3>Telephone</h3>
                      <p>
                        <a href="#">+1 234 5678 910</a> <br/>
                        <a href="#">+2 234 5678 910</a>
                      </p>
                    </div>
                  </div>

                  <h3 className="mb-0">Join our newsletter</h3>
                  <p>Be the first to know our latest updates and news!</p>
                  <form action="#" method="" className="form-subscribe">
                    <div className="form-group d-flex">
                      <input type="email" className="form-control mr-2" placeholder="Enter your email"/>
                      <input type="submit" value="Subscribe" className="btn btn-black px-4 text-white"/>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5 align-items-center">
            <div className="col-md-6 text-md-left">
              {/* Link back to Untree.co can't be removed. Template is licensed under CC BY 3.0. If you purchased a license you can remove this. */}
              <p>
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> <a href="index.html">Untree.co</a>. All Rights Reserved. Design by <a href="https://untree.co/" target="_blank" className="text-primary">Untree.co</a>
              </p>
            {/* Link back to Untree.co can't be removed. Template is licensed under CC BY 3.0. If you purchased a license you can remove this. */}
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="icons-top icons-dark">
              <li>
                <a href="#"><span className="icon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span className="icon-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span className="icon-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span className="icon-tripadvisor"></span></a>
              </li>
            </ul>

            </div>
          </div>
        </div>
        
      </footer>
    </div>

    {/* Search */}
    <div className="search-wrap">
      <a href="#" className="close-search js-search-toggle">
        <span>Close</span>
      </a>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-12">
            <form action="#">
              <input type="search" name="s" id="s" placeholder="Type a keyword and hit enter..."  autocomplete="false"/>
            </form>    
          </div>
        </div>
      </div>
    </div>

    <script src="js/vendor/jquery-3.3.1.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>

    <script src="js/vendor/owl.carousel.min.js"></script>
    
    <script src="js/vendor/jarallax.min.js"></script>
    <script src="js/vendor/jarallax-element.min.js"></script>
    <script sr c="js/vendor/ofi.min.js"></script>

    <script src="js/vendor/aos.js"></script>

    <script src="js/vendor/jquery.lettering.js"></script>
    <script src="js/vendor/jquery.sticky.js"></script>

    <script src="js/vendor/TweenMax.min.js"></script>
    <script src="js/vendor/ScrollMagic.min.js"></script>
    <script src="js/vendor/scrollmagic.animation.gsap.min.js"></script>
    <script src="js/vendor/debug.addIndicators.min.js"></script>


    <script src="js/main.js"></script>
  </body>
</>
  );
}

export default App;
