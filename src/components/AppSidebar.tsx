import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Col } from "react-bootstrap";

// eslint-disable-next-line react-refresh/only-export-components
const MemoizedAppSidebar = React.memo(function AppSidebar() {
  const dispatch = useDispatch();

  const sidebarShow = useSelector((state: any) => state.sidebarShow);

  return (
    <Col
      className="min-vh-100 d-flex flex-column h-100 position-absolute p-2 pe-0 border-1 border-opacity-10 border-top-0 border-start-0 border-bottom-0"
      style={{ borderColor: "#dfe6e9", minWidth: 100, width: sidebarShow ? 300 : 50, transition: "width ease .3s, box-shadow ease .8s", boxShadow: sidebarShow ? "rgb(0 0 0 / 1%) 20px 0px 20px 20px" : "none" }}
    >
      <div style={{ height: 80 }} className="d-flex justify-content-center align-items-center py-3 text-center">
        SIDEBAR LOGO
      </div>
      <div className="overflow-hidden mt-3">
        <ul className="d-flex flex-column gap-4" style={{ listStyleType: "none" }}>
          <li>
            <a href="/">{sidebarShow ? "Home" : <i className="pi pi-home fs-3"></i>}</a>
          </li>
          <li>
            <a href="/dashboard">{sidebarShow ? "Dashboard" : <i className="pi pi-star-fill fs-3"></i>}</a>
          </li>
        </ul>
      </div>
      <Col className="position-absolute bottom-0 right-0">
        <Button className="align-content-end bg-transparent border-0 text-black fs-3" onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}>
          {sidebarShow ? "<" : ">"}
        </Button>
      </Col>
    </Col>
  );
});

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(MemoizedAppSidebar);
