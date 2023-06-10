import React from "react";
import { useState } from "react";

const Form = ({ children, placeholderText = "", btnText = "" }) => {
  const [text, setText] = useState(placeholderText);

  return (
    <div>
      <aside className="single_sidebar ">
        <form>
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={text}
                onBlur={() => setText()}
                onFocus={() => setText("")}
              />
              {children}
            </div>
            <button
              className="btn rounded-0 primary-bg text-white w-100"
              style={{ background: "#1EC6B6" }}
            >
              {btnText}
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default Form;
