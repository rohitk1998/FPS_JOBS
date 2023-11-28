import Reac, { useState } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/bundle';
import { Link, useNavigate } from 'react-router-dom';

Category07.propTypes = {};

function Category07(props) {
  const { data } = props;
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  return (
    <section className="testimonials-category-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title style-2">
              <div className="group-title">
                <h1>Browse by category</h1>
                <p>Recruitment Made Easy in 100 seconds</p>
              </div>
            </div>
          </div>

          <div className=" col-md-12">
            <div className="group-category-job padding wow fadeInUp">
              {data.map((idx) => (
                <div
                  key={idx.id}
                  className={`job-category-box ${
                    active == idx.ID ? 'active' : ''
                  } hover:scale-110 transition-all`}
                  onMouseEnter={() => setActive(idx.ID)}
                >
                  <div className="w-[100%] h-[140px] flex justify-between items-start flex-col hover:scale-110 transition-all" >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={idx.image}
                        alt="img"
                        className="w-[60px] h-[60px]"
                      />
                      <p
                        className="ml-5 font-bold"
                        style={{
                          fontSize: '20px',
                          lineHeight: '30px',
                          color: active == idx.ID ? '#a83359' : 'black',
                        }}
                      >
                        {idx.category}
                      </p>
                    </div>
                    <div className="w-[100%] mt-4">
                      <Link className="btn-category-job" onClick={()=> navigate('/')}>
                        Explore Jobs
                        <span className="icon-keyboard_arrow_right"></span>
                      </Link>
                    </div>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category07;
