import React from "react";
import { KelvinToCelsius, timeConverter } from "../utils/helper";

export const Pronostico = ({ data }) => {
  if (!data) {
    return null;
  }
  const hourInfo = data.hourly;

  return (
    <>
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <strong data-testid="title1">Pronóstico por hora</strong>
                </div>
              </div>
              <div className="row">
                <div className="col s3 time-of-day time-of-day-border">
                  <h5 className="bold txt-pronostico" data-testid="title-now">
                    Ahora
                  </h5>
                  <h4 className="bold txt-pronostico" data-testid="temp1">
                    {KelvinToCelsius(hourInfo[0].temp)}º
                  </h4>
                  <img
                    data-testid="icon1"
                    src={`http://openweathermap.org/img/wn/${hourInfo[0].weather[0].icon}@2x.png`}
                    className="img-pronostico"
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon1">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia1">{hourInfo[0].pop}%</strong>
                </div>
                <div className="col s3 time-of-day time-of-day-border">
                  <h5 className="txt-pronostico" data-testid="title2">
                    {timeConverter(hourInfo[1].dt)}
                  </h5>
                  <h4 className="txt-pronostico" data-testid="temp2">
                    {KelvinToCelsius(hourInfo[1].temp)}º
                  </h4>
                  <img
                    data-testid="icon2"
                    src={`http://openweathermap.org/img/wn/${hourInfo[1].weather[0].icon}@2x.png`}
                    className="img-pronostico"
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon2">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia2">{hourInfo[1].pop}%</strong>
                </div>
                <div className="col s3 time-of-day time-of-day-border">
                  <h5 className="txt-pronostico" data-testid="title3">
                    {timeConverter(hourInfo[2].dt)}
                  </h5>
                  <h4 className="txt-pronostico" data-testid="temp3">
                    {KelvinToCelsius(hourInfo[2].temp)}º
                  </h4>
                  <img
                    data-testid="icon3"
                    src={`http://openweathermap.org/img/wn/${hourInfo[2].weather[0].icon}@2x.png`}
                    className="img-pronostico"
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon3">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia3">{hourInfo[2].pop}%</strong>
                </div>
                <div className="col s3 time-of-day">
                  <h5 className="txt-pronostico" data-testid="title4">
                    {timeConverter(hourInfo[3].dt)}
                  </h5>
                  <h4 className="txt-pronostico" data-testid="temp4">
                    {KelvinToCelsius(hourInfo[3].temp)}º
                  </h4>
                  <img
                    data-testid="icon4"
                    src={`http://openweathermap.org/img/wn/${hourInfo[3].weather[0].icon}@2x.png`}
                    className="img-pronostico"
                  ></img>
                  <br />
                  <i className="tiny material-icons" data-testid="pop-icon4">
                    invert_colors
                  </i>
                  <strong data-testid="prob-lluvia4">{hourInfo[3].pop}%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};