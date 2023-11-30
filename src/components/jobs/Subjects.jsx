import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SortBuy from '../dropdown/SortBuy';
import { Layout } from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorySubjects } from '../../redux/thunk/app.thunk';

Subjects.propTypes = {};

function Subjects() {
  const location = useLocation();
  const { subjects } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const data = subjects;
  console.log('location', location, 'data', data);

  useEffect(() => {
    dispatch(
      getCategorySubjects({
        categoryId: location?.state?.categoryId,
      })
    );
  }, [location?.state?.categoryId]);

  return (
    <Layout>
      <section className="testimonials-category-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title style-2">
                <div className="group-title">
                  <h1>Browse by Job Title</h1>
                  <p>Find Thousands of Job Title To Choose Your Dream Position</p>
                </div>
              </div>
            </div>

            <div className=" col-md-12">
              <div className="group-category-job padding wow fadeInUp">
                {Array.isArray(data) &&
                  data.map((idx) => (
                    <div
                      key={idx.id}
                      className={`job-category-box ${
                        active == idx.ID ? 'active' : ''
                      } hover:scale-110 transition-all`}
                      onMouseEnter={() => setActive(idx.ID)}
                    >
                      <div className="w-[100%] h-[140px] flex justify-center items-start flex-col hover:scale-110 transition-all">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                          }}
                        >
                          {/* <img
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="img"
                            className="w-[60px] h-[60px] rounded-xl"
                          /> */}
                          <p
                            className="ml-0 font-bold"
                            style={{
                              fontSize: '20px',
                              lineHeight: '30px',
                              color: active == idx.ID ? '#a83359' : 'black',
                            }}
                            //   onClick={() =>
                            //     navigate('/subjects', {
                            //       state: { categoryId: idx.ID },
                            //     })
                            //   }
                            onKeyDown={() =>
                              console.log('Category Selected', idx.ID)
                            }
                          >
                            {idx.function}
                          </p>
                        </div>
                        <div className="w-[100%] mt-4">
                          <Link
                            className="btn-category-job"
                            //   onClick={() => navigate('/')}
                          >
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
    </Layout>
  );
}

export default Subjects;
