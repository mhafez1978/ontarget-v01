import React from "react";

const NavigationMenu = () => {
  return (
    <>
      <form action="http://localhost:3000/api/auth/signin/github" method="POST">
        <input
          type="hidden"
          name="csrfToken"
          value="bbd7ece2be3d0c08b607ff06b545280b4e3bc32b0f0f06c63f1a13665fb4e7ed"
        />
        <input
          type="hidden"
          name="callbackUrl"
          value="http://localhost:3000/"
        />
        <button
          type="submit"
          className="button"
          style={{ backgroundColor: "greenyellow", color: "#222" }}
        >
          <img
            loading="lazy"
            height="24"
            width="24"
            id="provider-logo"
            src="https://authjs.dev/img/providers/github.svg"
            alt=""
          />
          <img
            loading="lazy"
            height="24"
            width="24"
            id="provider-logo-dark"
            src="https://authjs.dev/img/providers/github-dark.svg"
            alt=""
          />
          <span>Sign in with GitHub</span>
        </button>
      </form>
    </>
  );
};

export default NavigationMenu;
