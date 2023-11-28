import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button2 from '../button/Button2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsByJobTitle } from '../../redux/thunk/app.thunk';
import { setfeaturedJobs } from '../../redux/slice/app.slice';
import Preloader from '../preloader';

Job07.propTypes = {};

function Job07(props) {
  const { data } = props;
  const { className } = props;
  const { featuredJobs } = useSelector((state) => state.app);
  const [title, setTitle] = useState('Physics Faculty');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setfeaturedJobs([]));
    let data = {
      UID: 65534,
      pageNo: 2,
      limit: 10,
      title: title,
    };
    dispatch(getAllJobsByJobTitle(data));
  }, [title]);

  return (
    <section className={className}>
      <Tabs className="wrap-testimonials style-1 over-flow-hidden tf-tab">
        <div className="tf-container">
          <div className="tf-title style-3 margin">
            <div className="group-title">
              <h1>Featured Jobs</h1>
              <p>Find the right career opportunity for you</p>
            </div>
            <TabList className="menu-tab">
              <Tab
                className="user-tag"
                onClick={() => setTitle('Physics Faculty')}
              >
                Physics Faculty
              </Tab>
              <Tab className="user-tag" onClick={() => setTitle('HR')}>
                HR Manager
              </Tab>
              <Tab className="user-tag" onClick={() => setTitle('')}>
                Other
              </Tab>
            </TabList>
          </div>
          <TabPanel className="row wow fadeInUp animation-tab job-tab-item min-h-[40vh]">
            {Array.isArray(featuredJobs) && featuredJobs.length > 0 ? (
              featuredJobs.map((idx) => (
                <div key={idx.id} className="col-lg-4">
                  <div className="features-job min-h-[230px]">
                    <div className="job-archive-header">
                      <div className="inner-box">
                        {/* <div className="logo-company">
                            <img src={idx.img} alt="jobtex" />
                          </div> */}
                        <div className="box-content">
                          <h4>
                            <Link>{idx.cate}</Link>
                          </h4>
                          <h3>
                            <Link> {idx.job_title} </Link>
                            <span className="icon-bolt"></span>
                          </h3>
                          <ul>
                            <li>
                              <span className="icon-map-pin"></span>
                              &nbsp;
                              {idx.process_location.slice(0, 12)}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
                              {idx.created_at}
                            </li>
                          </ul>
                          <span className="icon-heart"></span>
                        </div>
                      </div>
                    </div>
                    <div className="job-archive-footer">
                      <div className="job-footer-left">
                        <ul className="job-tag">
                          <li>
                            <Link to="#">{idx.job_type}</Link>
                          </li>
                          {/* <li>
                              <Link to="#">{idx.jobs2}</Link>
                            </li> */}
                        </ul>
                        <div className="star">
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                        </div>
                      </div>
                      <div className="job-footer-right">
                        <div className="price">
                          <span className="icon-dolar1"></span>
                          <p>{idx.salary_unit}</p>
                        </div>
                        <p className="days">{idx.apply}</p>
                      </div>
                    </div>
                    <Link className="jobtex-link-item" tabIndex="0"></Link>
                  </div>
                </div>
              ))
            ) : (
              <Preloader />
            )}
            {/* <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div> */}
          </TabPanel>
          <TabPanel className="row wow fadeInUp animation-tab job-tab-item min-h-[40vh]">
            {Array.isArray(featuredJobs) && featuredJobs.length > 0 ? (
              featuredJobs.map((idx) => (
                <div key={idx.id} className="col-lg-4">
                  <div className="features-job min-h-[230px]">
                    <div className="job-archive-header">
                      <div className="inner-box">
                        {/* <div className="logo-company">
                            <img src={idx.img} alt="jobtex" />
                          </div> */}
                        <div className="box-content">
                          <h4>
                            <Link>{idx.cate}</Link>
                          </h4>
                          <h3>
                            <Link> {idx.job_title} </Link>
                            <span className="icon-bolt"></span>
                          </h3>
                          <ul>
                            <li>
                              <span className="icon-map-pin"></span>
                              &nbsp;
                              {idx.process_location.slice(0, 12)}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
                              {idx.created_at}
                            </li>
                          </ul>
                          <span className="icon-heart"></span>
                        </div>
                      </div>
                    </div>
                    <div className="job-archive-footer">
                      <div className="job-footer-left">
                        <ul className="job-tag">
                          <li>
                            <Link to="#">{idx.job_type}</Link>
                          </li>
                          {/* <li>
                              <Link to="#">{idx.jobs2}</Link>
                            </li> */}
                        </ul>
                        <div className="star">
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                        </div>
                      </div>
                      <div className="job-footer-right">
                        <div className="price">
                          <span className="icon-dolar1"></span>
                          <p>{idx.salary_unit}</p>
                        </div>
                        <p className="days">{idx.apply}</p>
                      </div>
                    </div>
                    <Link className="jobtex-link-item" tabIndex="0"></Link>
                  </div>
                </div>
              ))
            ) : (
              <Preloader />
            )}
            {/* <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div> */}
          </TabPanel>
          <TabPanel className="row wow fadeInUp animation-tab job-tab-item min-h-[40vh]">
            {Array.isArray(featuredJobs) && featuredJobs.length > 0 ? (
              featuredJobs.map((idx) => (
                <div key={idx.id} className="col-lg-4">
                  <div className="features-job min-h-[230px]">
                    <div className="job-archive-header">
                      <div className="inner-box">
                        {/* <div className="logo-company">
                            <img src={idx.img} alt="jobtex" />
                          </div> */}
                        <div className="box-content">
                          <h4>
                            <Link>{idx.cate}</Link>
                          </h4>
                          <h3>
                            <Link> {idx.job_title} </Link>
                            <span className="icon-bolt"></span>
                          </h3>
                          <ul>
                            <li>
                              <span className="icon-map-pin"></span>
                              &nbsp;
                              {idx.process_location.slice(0, 12)}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              &nbsp;
                              {idx.created_at}
                            </li>
                          </ul>
                          <span className="icon-heart"></span>
                        </div>
                      </div>
                    </div>
                    <div className="job-archive-footer">
                      <div className="job-footer-left">
                        <ul className="job-tag">
                          <li>
                            <Link to="#">{idx.job_type}</Link>
                          </li>
                          {/* <li>
                              <Link to="#">{idx.jobs2}</Link>
                            </li> */}
                        </ul>
                        <div className="star">
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                        </div>
                      </div>
                      <div className="job-footer-right">
                        <div className="price">
                          <span className="icon-dolar1"></span>
                          <p>{idx.salary_unit}</p>
                        </div>
                        <p className="days">{idx.apply}</p>
                      </div>
                    </div>
                    <Link className="jobtex-link-item" tabIndex="0"></Link>
                  </div>
                </div>
              ))
            ) : (
              <Preloader />
            )}
            {/* <div className="col-md-12">
                <div className="wrap-button">
                  <Button2 title="See more Jobs" link="/joblist_v1" />
                </div>
              </div> */}
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default Job07;
