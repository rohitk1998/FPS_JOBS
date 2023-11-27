import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import avt from '../../assets/images/user/avatar/image-01.jpg';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getCategorySubjects,
} from '../../redux/thunk/app.thunk';
import { setCategories, setSubjects } from '../../redux/slice/app.slice';
import { setUserToken } from '../../redux/slice/auth.slice';

Header2.propTypes = {};

function Header2({ clname = '', handleMobile }) {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const { categories, subjects } = useSelector((state) => state.app);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  console.log('subjects', subjects);

  return (
    <header
      id="header"
      className={`header header-default ${scroll ? 'is-fixed is-small' : ''}`}
    >
      <div className="tf-container ct2">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div
                className="header-ct-left "
                onMouseEnter={() => dispatch(setSubjects([]))}
              >
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src="/logo.png"
                      alt="Image"
                    />
                  </Link>
                </div>
                <div className="categories">
                  <Link to="#">
                    <span className="icon-grid"></span>Categories
                  </Link>
                  <div className="sub-categorie">
                    <ul className="pop-up">
                      {Array.isArray(categories) &&
                        categories.map((category) => {
                          return (
                            <li>
                              <Link
                                to="#"
                                onMouseEnter={() =>
                                  dispatch(
                                    getCategorySubjects({
                                      categoryId: category.ID,
                                    })
                                  )
                                }
                              >
                                <div className="flex items-center justify-start">
                                  <img
                                    src={category.image}
                                    alt={category.category}
                                    className="w-[40px] h-[40px]"
                                  />
                                  <p className="text-[14px] ml-10">
                                    {category.category}
                                  </p>
                                </div>
                              </Link>
                              {subjects?.length > 0 && (
                                <div className="flex-wrap absolute top-[0%] left-[100%] bg-white w-[100%] h-[100%] min-w-[300px] overflow-y-scroll">
                                  {Array.isArray(subjects) &&
                                    subjects.map((subject) => {
                                      return (
                                        <div className="mt-3 ml-5">
                                          <p className="text-[13px] font-normal text-gray-700 font-md">
                                            {subject.function}
                                          </p>
                                        </div>
                                      );
                                    })}
                                </div>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-ct-center">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu">
                      <li>
                        <Link to="/">Home </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/jobs">Find jobs </Link>
                      </li>

                      {/* <li className="menu-item menu-item-has-children sub3">
                        <Link to="#">Employers</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Employers Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v1">
                                  List Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v3">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v4">
                                  Grid Sidebar
                                </NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/employers_v5">Full width</NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/employers_v6">Top Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v7">Half Map</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <NavLink to="/employersingle_v1">
                              Employers Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav3">
                            <NavLink to="/employersingle_v2">
                              Employers Single - V2
                            </NavLink>
                          </li>

                          <li className="nav-sub subnav4">
                            <NavLink to="/employerreview">
                              Employers Reviews
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav5">
                            <NavLink to="/employernotfound">
                              Employers Not Found
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="menu-item menu-item-has-children sub4">
                        <Link to="#">Candidates</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Candidates Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v1">
                                  List Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v3">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v4">Top Map</NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v5">Half Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v6">
                                  No Available - V1
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v7">
                                  No Available - V2
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <Link to="#">
                              Sample CV
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/samplecv">Sample CV</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvdetails">
                                  CV Details
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvslidebar">
                                  Sample CV Sidebar
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav3">
                            <NavLink to="/candidatesingle_v1">
                              Candidate Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav4">
                            <NavLink to="/candidatesingle_v2">
                              Candidate Single - V2
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="menu-item menu-item-has-children sub5">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Blog Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item subitem1">
                                <Link to="/blog_v1">Blog List </Link>
                              </li>
                              <li className="nav-menu-item subitem2">
                                <Link to="/blog_v2">Blog Grid</Link>
                              </li>
                              <li className="nav-menu-item subitem3">
                                <Link to="/blog_v3">Blog Masonry</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <Link to="#">
                              Blog Details
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item subitem1">
                                <Link to="/blogsingle_v1">
                                  Blog Details - V1
                                </Link>
                              </li>
                              <li className="nav-menu-item subitem2">
                                <Link to="/blogsingle_v2">
                                  Blog Details - V2
                                </Link>
                              </li>
                              <li className="nav-menu-item subitem3">
                                <Link to="/blogsingle_v3">
                                  Blog Details Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="menu-item menu-item-has-children sub6">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Shop
                              <span className="icon-keyboard_arrow_right"></span>{" "}
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item subitem1">
                                <Link to="/shop">Shop List</Link>
                              </li>
                              <li className="nav-menu-item subitem2">
                                <Link to="/shopsingle">Shop Single</Link>
                              </li>
                              <li className="nav-menu-item subitem3">
                                <Link to="/shoppingcart">Shopping Cart</Link>
                              </li>
                              <li className="nav-menu-item subitem4">
                                <Link to="/checkout">Checkout</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <Link to="/aboutus">About Us</Link>
                          </li>
                          <li className="nav-sub subnav3">
                            <Link to="/faqs">FAQS</Link>
                          </li>
                          <li className="nav-sub subnav4">
                            <Link to="/termsofuse">Terms Of Use</Link>
                          </li>
                          <li className="nav-sub subnav5">
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li className="nav-sub subnav6">
                            <Link to="/login">Login</Link>
                          </li>
                          <li className="nav-sub subnav7">
                            <Link to="/createaccount">Create Account</Link>
                          </li>
                          <li className="nav-sub subnav8">
                            <Link to="/contactus">Contact Us</Link>
                          </li>
                        </ul>
                      </li> */}
                      {!userToken && (
                        <li className="menu-item">
                          <Link to="/createAccount">SignUp </Link>
                        </li>
                      )}
                      {!userToken && (
                        <li className="menu-item">
                          <Link to="/login">Login </Link>
                        </li>
                      )}
                      {userToken && (
                        <li className="menu-item">
                          <Link to={'/login'} onClick={() => dispatch(setUserToken(false))}>
                            <span className='text-gray-500 text-md'>Logout</span>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header2;
