/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/jmmcover.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/jmmtrans.png").default}
            ></img>
            <h1 className="h1-seo">JM Motorsports.</h1>
            <h3>Automotive Repairs and Performance Builds.</h3>
          </div>
          <h6 className="category category-absolute" style={{background: "#000000bf", borderRadius:"30px"}}>
            Designed by{" "}
            <a href="https://altnetix.com" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/altlogo.png").default}
              ></img>
            </a>
            ltnetix&reg;
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
