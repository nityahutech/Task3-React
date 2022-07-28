import React from "react";

function SignImg() {
  return (
    <div className="right_data mt-5" style={{ width: "100%" }}>
      <div className="sign_img mt-3">
        <img
          src={process.env.PUBLIC_URL + "emp-portal.png"}
          style={{ maxWidth: 480 }}
          alt=""
        />
      </div>
    </div>
  );
}

export default SignImg;
