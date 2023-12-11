import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SortBuy from '../dropdown/SortBuy';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSuccess } from '../../redux/slice/job.slice';
import { singleJob } from '../../redux/thunk/job.thunk';

JobSec1.propTypes = {};

function JobSec1(props) {
  const { data } = props;

  const { isSuccess } = useSelector((state)=> state.job)


  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=> {
    if(isSuccess){
     navigate('/job')
     dispatch(setIsSuccess(false))
    }
   },[isSuccess])

  return (
    <section className="inner-jobs-section">
      <div className="tf-container">
        <div className="row min-h-[450px]">
          <Tabs className="col-lg-12 tf-tab">
            {/* {Array.isArray(data) && data.length > 0 && ( */}
              <div className="wd-meta-select-job">
                <div className="wd-findjob-filer">
                  <div className="group-select-display">
                    <p className="nofi-job">
                      <span>{Array.isArray(data) && data.length}</span> jobs
                      recommended for you
                    </p>
                  </div>
                  <SortBuy />
                </div>
              </div>
            {/* )} */}
            <div className="content-tab">
              <TabPanel className="inner">
                {Array.isArray(data) &&
                  data.length > 0 &&
                  data.slice(0, 10).map((idx) => (
                    <div key={idx.id} className="features-job style-3" onClick={()=> dispatch(singleJob({ jobId : idx.jobID }))}>
                      <div className="inner-box">
                        <div className="company">
                          {/* <div className="logo-company">
                          <img src={idx.img} alt="Jobtex" />
                        </div> */}
                          <div className="box-content">
                            <h4>
                              <Link to="/jobSingle">{idx.cate}</Link>
                            </h4>
                            <h3>
                              <Link to="/jobSingle">{idx.job_title}</Link>
                              &nbsp;
                              <span className="icon-bolt"></span>
                            </h3>
                            <div className="star">
                              <span className="icon-star-full"></span>
                              <span className="icon-star-full"></span>
                              <span className="icon-star-full"></span>
                              <span className="icon-star-full"></span>
                              <span className="icon-star-full"></span>
                            </div>
                          </div>
                        </div>
                        <ul className="info">
                          <li>
                            <span className="icon-map-pin"></span>
                            {idx.process_location.slice(0, 30)}
                          </li>
                          <li>{idx.time}</li>
                        </ul>
                        <div className="category">
                          <ul className="job-tag">
                            <li>
                              <Link to="#">{idx.job_type}</Link>
                            </li>
                            {/* <li>
                            <Link to="#"> Hybrid</Link>
                          </li> */}
                          </ul>
                        </div>
                        <div className="salary">
                          {/* <span className="icon-dolar1"></span> */}
                          {/* <span className="WebRupee">Rs.</span> */}
                          <i className="mt-1 mr-1 text-lg fa fa-inr"></i>
                          <p>
                            <span className="year">
                              <p className="text-sm font-semibold">
                                {idx.salary_unit}
                              </p>
                            </span>
                          </p>
                        </div>
                        <div className="group-btn">
                          <span className="icon-heart"></span>
                          <div className='w-[100px] flex  text-white font-semibold rounded-md items-center justify-center shadow-md h-[50px] bg-[#a83359] hover:bg-[#ce406d]'>Apply</div>
                        </div>
                      </div>
                      {/* <Link
                        to="/jobSingle"
                        className="jobtex-link-item"
                        tabIndex="0"
                      ></Link> */}
                    </div>
                  ))}

                {Array.isArray(data) && data.length > 0 && (
                  <ul className="pagination-job padding">
                    <li>
                      <Link to="#">
                        <i className="icon-keyboard_arrow_left"></i>
                      </Link>
                    </li>
                    <li className="current">
                      <Link to="#">1</Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-keyboard_arrow_right"></i>
                      </Link>
                    </li>
                  </ul>
                )}

                {Array.isArray(data) && data.length == 0 && (
                 <div className='h-[350px] p-4'>
                   <h2 className="mt-4 mb-5 text-lg font-bold text-center text-black">
                    No Job Avialable
                  </h2>
                 </div>
                )}
              </TabPanel>
              <TabPanel className="inner">
                <div className="group-col-3">
                  {data.map((idx) => (
                    <div key={idx.id} className="features-job cl3">
                      <div className="job-archive-header">
                        <div className="inner-box">
                          <div className="logo-company">
                            <img src={idx.img} alt="jobtex" />
                          </div>
                          <div className="box-content">
                            <h4>
                              <Link to="/jobSingle">{idx.cate}</Link>
                            </h4>
                            <h3>
                              <Link to="/jobSingle"> {idx.title} </Link>
                              <span className="icon-bolt"></span>
                            </h3>
                            <ul>
                              <li className="bg-rose-300">
                                <span className="icon-map-pin"></span>
                                {idx.map &&
                                  idx.map.replace(/(<([^>]+)>)/gi, '')}
                              </li>
                              <li>
                                <span className="icon-calendar"></span>
                                {idx.time}
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
                              <Link to="#">{idx.jobs1}</Link>
                            </li>
                            <li>
                              <Link to="#">{idx.jobs2}</Link>
                            </li>
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
                            <p>
                              {idx.price}
                              <span className="year">/year</span>
                            </p>
                          </div>
                          <p className="days">{idx.apply}</p>
                        </div>
                      </div>
                      <Link
                        to="/jobSingle"
                        className="jobtex-link-item"
                        tabIndex="0"
                      ></Link>
                    </div>
                  ))}
                </div>

                <ul className="pagination-job padding">
                  <li>
                    <Link to="#">
                      <i className="icon-keyboard_arrow_left"></i>
                    </Link>
                  </li>
                  <li className="current">
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-keyboard_arrow_right"></i>
                    </Link>
                  </li>
                </ul>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default JobSec1;
