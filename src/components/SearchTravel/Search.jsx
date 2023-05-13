import React from "react";
import { Box, Slider } from "@mui/material";
import Options from "../Options/Options";
import "./Search.scss";

const Search = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;

  const [value, setValue] = React.useState([75, 300]);

  const handleChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };
  return (
    <>
      <div className="search_travel_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="filter_search">
                <h3>Filter Result</h3>
                <div className="border_search">
                  <div className="row">
                    <div className="col-lg-12">
                      <select>
                        <option value="">country</option>
                        <option value="">Africa</option>
                        <option value="">canada</option>
                        <option value="">USA</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <select>
                        <option value="">Travel type</option>
                        <option value="">Basic</option>
                        <option value="">Advance</option>
                        <option value="">Premium</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <span>Price range</span>
                      <Box sx={{ width: 300 }}>
                        <Slider
                          style={{ color: "#FF4A52" }}
                          getAriaLabel={() => "Minimum distance shift"}
                          value={value}
                          onChange={handleChange}
                          min={0}
                          max={600}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                        />
                      </Box>
                      <p>
                        <input type="text" readOnly />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <Options className="col-lg-6 col-md-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
