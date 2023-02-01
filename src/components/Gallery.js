import WSPGallery from "./Gallery/WSPGallery";

function Gallery() {

  const galleryImages = [
    {
      id: 1,
      img: 'https://ztooanalytics.web.app/images/portfolio/work-1.jpg',
      title: 'Shopify Store Analytics',
      description: 'Analyze and improve key metrics for your shopify store',
      category: 'restaurant'
    },
    {
      id: 2,
      img: "https://ztooanalytics.web.app/images/portfolio/work-8.jpg",
      title: 'Restaurant Analytics',
      description: 'Analyze POS system data to improve efficiency',
      category: 'e-commerce'
    },
    {
      id: 3,
      img: "https://ztooanalytics.web.app/images/portfolio/work-3.jpg",
      title: 'Customer Analytics',
      description: 'Discover customer behavior and trends',
      category: 'e-commerce'
    },
    {
      id: 4,
      img: "https://ztooanalytics.web.app/images/portfolio/work-2.jpg",
      title: 'Social Media Analytics',
      description: 'Analyze KPIs of Marketing Campaigns to increase revenue growth',
      category: 'restaurant'
    },
    {
      id: 5,
      img: "https://ztooanalytics.web.app/images/portfolio/work-6.jpg",
      title: 'Internet of Things',
      description: 'Industrial IOT sensor data analytics',
      category: 'iot'
    },
    {
      id: 6,
      img: "https://ztooanalytics.web.app/images/portfolio/work-5.jpg",
      title: 'Clean Energy',
      description: 'Accelerate adoption of clean energy',
      category: 'restaurant'
    },
    {
      id: 7,
      img: "https://ztooanalytics.web.app/images/portfolio/work-7.jpg",
      title: 'EV Analytics',
      description: 'Manage EV fleet and V2X capabilities',
      category: 'restaurant'
    },
    {
      id: 8,
      img: "https://ztooanalytics.web.app/images/portfolio/work-4.jpg",
      title: 'Digital Ads Analytics',
      description: 'Optimize ad spend and customer acquisition',
      category: 'restaurant'
    }
  ]

  return (
    <div>
      {/* <!-- PORTFOLIO START--> */}
      <section className="section bg-white pb-0" id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <h4 className="title-heading text-uppercase">Our Portfolio</h4>
                <p className="title-desc text-muted mt-3">We specialize in finding the needle in the haystack. Our
                  out-of-box solutions will enable you to quickly adopt data driven decisions from scratch
                  across any vertical</p>
              </div>
            </div>
          </div>

          {/* <!-- portfolio menu --> */}
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="text-center">
                <ul className="col container-filter categories-filter list-unstyled mb-0" id="filter">
                  <li><a className="categories active" data-filter="*">All</a></li>
                  <li><a className="categories" data-filter=".e-commerce">e-commerce</a></li>
                  <li><a className="categories" data-filter=".marketing">Marketing</a></li>
                  <li><a className="categories" data-filter=".restaurant">Restaurant</a></li>
                  <li><a className="categories" data-filter=".utilities">Utilities</a></li>
                  <li><a className="categories" data-filter=".iot">IOT</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End portfolio  --> */}

        </div>
      </section>
      {/* <!-- PORTFOLIO END--> */}

      {/* Gallery Starts */}

      <WSPGallery
        galleryImages={galleryImages}
      />

      {/* Gallery Ends */}
      
    </div>

  );
}

export default Gallery;
