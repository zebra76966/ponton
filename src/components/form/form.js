import React, { useEffect, useState } from "react";
import "./form.css";

const Form = () => {
  const [passerr, setPassError] = useState("");
  const [emailerr, setEmailError] = useState("");

  const [udata, setUdata] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    city: "",
    postal: "",
    address: "",
    dpimage: "",
  });

  // Checking if the fields are not empty
  const [isEmpty, setIsEmpty] = useState(false);

  const checkEmptyFields = () => {
    const isEmptyField = Object.values(udata).some((value) => value === "");
    setIsEmpty(isEmptyField);
  };

  // Call checkEmptyFields whenever udata changes
  useEffect(() => {
    checkEmptyFields();
  }, [udata]);

  function handlesubmit(e) {
    e.preventDefault();
    console.log(udata);
  }

  useEffect(() => {
    // Regular expression for password validation
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passRegex.test(udata.password) && udata.password !== "") {
      setPassError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
    } else if (passRegex.test(udata.password) && udata.password !== "") {
      setPassError("ok");
    } else {
      setPassError("");
    }
  }, [udata.password]);

  useEffect(() => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(udata.email) && udata.email !== "") {
      setEmailError("Email invalid");
    } else if (emailRegex.test(udata.email) && udata.email !== "") {
      setEmailError("ok");
    } else {
      setEmailError("");
    }
  }, [udata.email]);

  return (
    <form className="row" onSubmit={handlesubmit}>
      <div className="row column-reverse">
        <div className="col-12">
          <h2>
            <strong>Personal Information</strong>
          </h2>
        </div>
        <div className="col-9 p-0">
          <div className="form row">
            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.fname} onChange={(e) => setUdata({ ...udata, fname: e.target.value })} type="text" required autocomplete="off" id="fname" />
                <label for="fname">First Name</label>
              </div>
            </div>

            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.lname} onChange={(e) => setUdata({ ...udata, lname: e.target.value })} type="text" required autocomplete="off" id="lname" />
                <label for="lname">Last Name</label>
              </div>
            </div>

            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.city} onChange={(e) => setUdata({ ...udata, city: e.target.value })} type="text" required autocomplete="off" id="city" />
                <label for="city">City</label>
              </div>
            </div>

            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.postal} onChange={(e) => setUdata({ ...udata, postal: e.target.value })} type="text" required autocomplete="off" id="postal" />
                <label for="postal">Postal Code</label>
              </div>
            </div>

            <div className="col-12">
              <div class="inputGroup">
                <input value={udata.address} onChange={(e) => setUdata({ ...udata, address: e.target.value })} type="text" required autocomplete="off" id="address" />
                <label for="address">Address </label>
              </div>
            </div>

            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.email} onChange={(e) => setUdata({ ...udata, email: e.target.value })} type="email" required autocomplete="off" id="email" />
                <label for="email">Email Address</label>
                {emailerr == "ok" && <i className="fa fa-check-circle"></i>}
              </div>
              {emailerr !== "ok" && <p style={{ color: "#ff8282", fontSize: "14px" }}>{emailerr}</p>}
            </div>

            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.phone} onChange={(e) => setUdata({ ...udata, phone: e.target.value })} type="tel" required autocomplete="off" id="phone" />
                <label for="phone">Phone</label>
              </div>
            </div>

            <div className="col-6">
              <div class="inputGroup">
                <input value={udata.password} onChange={(e) => setUdata({ ...udata, password: e.target.value })} type="password" required autocomplete="off" id="password" />
                <label for="password">Password</label>
                {passerr == "ok" && <i className="fa fa-check-circle"></i>}
              </div>
              {passerr !== "ok" && <p style={{ color: "#ff8282", fontSize: "14px" }}>{passerr}</p>}
            </div>

            <div className="col-12">
              <p>
                Use this email to log in to your <a href="#"> resumedone.io </a> account and receive notifications.
              </p>

              <button className="btn btn-primary btn-lg" type="submit" disabled={isEmpty}>
                Save
              </button>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Show my profile to serious employers on <a href="#"> hirethesbest.io </a>for free
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image Start=========> */}
        <div className="col-3">
          <div className="dp">
            <label for="formFileLg" class="form-label">
              <img src={udata.dpimage !== "" ? udata.dpimage : "logo512.png"} className="profileimg" />
            </label>
            <input
              class="form-file"
              id="formFileLg"
              type="file"
              hidden
              onChange={(e) => {
                let reader = new FileReader();
                reader.addEventListener("load", () => {
                  // Get the Base64-encoded string from the FileReader result
                  let base64String = reader.result;

                  setUdata({ ...udata, dpimage: base64String });
                  // Do something with the Base64-encoded string, such as display it in an <img> tag
                });

                reader.readAsDataURL(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
