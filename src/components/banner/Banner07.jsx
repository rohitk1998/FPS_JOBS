import React, { useContext, useEffect, useState } from "react";
import SelectLocation from "../dropdown";
import { apiHandler } from "../../services/api";
import { getLocations } from "../../services/api/constants";
import { CMSModal } from "../../context";

Banner07.propTypes = {};

function Banner07(props) {
  const [locations, setLocations] = useState([]);
  const { setLoading } = useContext(CMSModal);
  useEffect(() => {
    fetchLocations();
  }, []);
  const fetchLocations = async () => {
    setLoading(true);
    const res = await apiHandler(`${getLocations}`, "GET");
    console.log(res.data, "res");
    if (res.data.status === "success") {
      setLocations(res.data.cities);
      setLoading(false);
    }
  };
  return (
    <section className="tf-slider sl5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="heading text-center">
                <h2 className="text-white">Find the job that fits your life</h2>
                <p className="text-white">
                  Resume-Library is a true performance-based job board. Enjoy
                  custom hiring products and access to up to 10,000 new resume
                  registrations daily, with no subscriptions or user licences.
                </p>
              </div>
              <div className="icon ic1 ani3">
                <img
                  src={require("../../assets/images/review/icon6.png")}
                  alt="images"
                />
              </div>
              <div className="icon ic2 ani6">
                <img
                  src={require("../../assets/images/review/icon5.png")}
                  alt="images"
                />
              </div>
              <div className="form-sl">
                <form action="/job-list-sidebar">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-search search-job"></span>
                      <input
                        type="text"
                        className="input-filter-search"
                        placeholder="Job title, key words or company"
                      />
                    </div>
                    <div className="form-group-2">
                      <span className="icon-map-pin"></span>
                      {locations && <SelectLocation locations={locations} />}
                    </div>
                    <div className="form-group-4">
                      <button type="submit" className="btn btn-find">
                        Find Jobs
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner07;
