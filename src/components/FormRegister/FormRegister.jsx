import * as React from "react";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./FormRegister.scss";

const FormRegister = () => {
  const [option, setOption] = useState("Travel type");

  const changeOption = (newOption) => {
    setOption(newOption);
  };

  const handleClick = (e) => {
    e.preventDefault();
    changeOption(e.target.value);
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="name-form">Where you want to go?</div>
            </div>
            <div className="col-lg-9">
              <div className="form_input">
                <form className="search_form" action="">
                  <div className="input_field">
                    <input type="text" placeholder="Where to go?" />
                  </div>
                  <div className="input_field">
                    <div className="wrapper">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Basic date picker" />
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="input_field">
                    <div className="nice-select dropdown">
                      <span
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                        onChange={changeOption}
                      >
                        {option}
                      </span>
                      <ul
                        className=" list dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <button
                            className="item-list"
                            value="Travel type"
                            onClick={handleClick}
                          >
                            Travel type
                          </button>
                        </li>
                        <li>
                          <button
                            className="item-list"
                            value="Some option"
                            onClick={handleClick}
                          >
                            Some option
                          </button>
                        </li>
                        <li>
                          <button
                            className="item-list"
                            value="Another option"
                            onClick={handleClick}
                          >
                            Another option
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="btn_search">
                    <button className="box-btn" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormRegister;
