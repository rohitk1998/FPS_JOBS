import { useEffect, useState } from "react";
import "./index.css";
import { setToast } from "../../redux/slice/toast.slice";
import { useDispatch } from "react-redux";
// import * as Common from "../../../Common/index";

export function CustomToast({ message, success, error }) {
  const [onfocus, setFocus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId = "";
    if (message !== "") {
        timeoutId = setTimeout(() => {
          clearToast();
        }, 3000);
    }
  }, [message, success, error, onfocus]);

  function clearToast() {
    dispatch(setToast({ message: "", success: false, error: false }));
  }

  return (
    <div>
      {success == true && message !== "" && (
        <div
          id="snackbarSuccess"
          className={"show"}
        >
          <div className="main-container">
            {/* <div className="snak-icon">
              <Common.Lib.FontAwesomeIcon
                size={"1x"}
                icon={Common.Lib.faCircleCheck}
                color="white"
              />
            </div> */}
            <div className="snak-message">
              <p>{message}</p>
            </div>
            <div className="close-btn" onClick={() => clearToast()}>
              CLOSE
            </div>
          </div>
        </div>
      )}
      {error == true && message !== "" && (
        <div id="snackbarError" className={"show"}>
          <div className="main-container">
            {/* <div className="snak-icon">
              <Common.Lib.FontAwesomeIcon
                size={"1x"}
                icon={Common.Lib.faCircleExclamation}
                color="white"
              />
            </div> */}
            <div className="snak-message">
              <p>{message}</p>
            </div>
            <div className="close-btn" onClick={() => clearToast()}>
              CLOSE
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
