import { useState } from "react";
import Portfolio from "./Gallery/Portfolio";

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      img: 'https://storage.googleapis.com/ztoo-assets/portfolio/work-1.jpg',
      title: 'Shopify Store Analytics',
      description: 'Analyze and improve key metrics for your shopify store',
      category: 'e-commerce'
    },
    {
      id: 2,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-8.jpg",
      title: 'Restaurant Analytics',
      description: 'Analyze POS system data to improve efficiency',
      category: 'restaurant'
    },
    {
      id: 3,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-3.jpg",
      title: 'Customer Analytics',
      description: 'Discover customer behavior and trends',
      category: 'e-commerce marketing restaurant'
    },
    {
      id: 4,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-2.jpg",
      title: 'Social Media Analytics',
      description: 'Analyze KPIs of Marketing Campaigns to increase revenue growth',
      category: 'marketing'
    },
    {
      id: 5,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-6.jpg",
      title: 'Internet of Things',
      description: 'Industrial IOT sensor data analytics',
      category: 'iot'
    },
    {
      id: 6,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-5.jpg",
      title: 'Clean Energy',
      description: 'Accelerate adoption of clean energy',
      category: 'utilities iot'
    },
    {
      id: 7,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-7.jpg",
      title: 'EV Analytics',
      description: 'Manage EV fleet and V2X capabilities',
      category: 'utilities iot'
    },
    {
      id: 8,
      img: "https://storage.googleapis.com/ztoo-assets/portfolio/work-4.jpg",
      title: 'Digital Ads Analytics',
      description: 'Optimize ad spend and customer acquisition',
      category: 'e-commerce marketing'
    }
  ]

  const [filter, setFilter] = useState('all')

  const handleClick = (filter) => {
    setFilter(filter)
  }
  //  let galleryImages1 = galleryImages.filter((data) => {

  //     if (data.category === filter) {
  //       return data
  //     }
  //     else if (filter === 'all') {
  //       return data
  //     }

  // })
  let galleryImages1 = []
  let count
  galleryImages.forEach((item) => {
    count = 0
    item.category.split(' ').forEach((element) => {
      count = count + 1
      if (element === filter) {
        galleryImages1.push(item)
      }
      else if (filter === 'all' && count === 1) {
        galleryImages1.push(item)
      }
    })
  })


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
                  <li>
                    <button
                      className={filter === 'all' ? 'btnActive categories' : 'categories'}
                      data-filter="*"
                      onClick={(e) => handleClick("all")}>
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      className={filter === 'e-commerce' ? 'btnActive categories' : 'categories'}
                      data-filter=".e-commerce"
                      onClick={(e) => handleClick("e-commerce")}>
                      e-commerce
                    </button>
                  </li>
                  <li>
                    <button
                      className={filter === 'marketing' ? 'btnActive categories' : 'categories'}
                      data-filter=".marketing"
                      onClick={(e) => handleClick("marketing")}>
                      Marketing
                    </button>
                  </li>
                  <li><button
                    className={filter === 'restaurant' ? 'btnActive categories' : 'categories'}
                    data-filter=".restaurant"
                    onClick={(e) => handleClick("restaurant")}>
                    Restaurant
                  </button>
                  </li>
                  <li><button
                    className={filter === 'utilities' ? 'btnActive categories' : 'categories'}
                    data-filter=".utilities"
                    onClick={(e) => handleClick("utilities")}>
                    Utilities
                  </button>
                  </li>
                  <li>
                    <button
                      className={filter === 'iot' ? 'btnActive categories' : 'categories'}
                      data-filter=".iot"
                      onClick={(e) => handleClick("iot")}>
                      IOT
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End portfolio  --> */}

        </div>
      </section>
      {/* <!-- PORTFOLIO END--> */}

      {/* Gallery Starts */}

      <Portfolio
        galleryImages={galleryImages1}
        filter={filter}
      />

      {/* Gallery Ends */}

    </div>

  );
}

export default Gallery;