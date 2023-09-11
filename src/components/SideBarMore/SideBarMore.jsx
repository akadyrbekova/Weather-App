import React, { useState } from "react";
import "./SideBarMore.css";

const SideBarMore = ({ dataWeather }) => {
  return (
    <>
      <div className="col-md-8 container sideBarMore">
        <div className="celsius-fahrenheit container d-flex justify-content-end mt-5 w-75">
          <div className="celsius">C</div>
          <div className="fahrenheit">F</div>
        </div>
        <div className="w-75 m-auto">
          <h2 className="descr-txt mt-3">Прогноз погоды на сегодня</h2>
          <div className="row mt-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Текущая</h5>
                  <p className="card-grade">
                    15 <span className="card-ed">C</span>
                  </p>
                  <p className="btn-primary">
                  <i class="fal fa-sun" style={{color:'yellow'}}></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Минимальная</h5>
                  <p className="card-grade">
                    7 <span className="card-ed">C</span>
                  </p>
                  <p>
                  <i class="fad fa-temperature-low" style={{color:'red'}}></i>
 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <p className=" btn-primary">
                    Максимальная
                  </p>
                  <h5 className="card-title">
                    <i
                      class="fad fa-temperature-hot"
                      style={{ color: "blue" }}
                    ></i>
                  </h5>
                  <p className="card-grade">
                    39 <span className="card-ed">C</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">По ощущениям</h5>
                  <p className="card-grade">
                    <span className="card-ed">35C</span>
                  </p>
                  <p className=" btn-primary">
                  <i class="fas fa-temperature-high" style={{ color: "blue" }}></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMore;
