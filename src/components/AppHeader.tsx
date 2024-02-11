import { BreadCrumb } from "primereact/breadcrumb";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const AppHeader = ({ sidebarShow }: any) => {
  const url = useLocation();
  const items: any = [];
  const home = { icon: "pi pi-home", url: "/" };

  useEffect(() => {
    items.length = 0;
    url.pathname.split("/").map((path) => {
      path && items.push({ label: path });
    });
  }, []);

  return (
    <Col className="align-self-end border-1 border-opacity-10 border-top-0 border-start-0 border-end-0 border-black ps-0 p-3" style={{ maxHeight: 80, width: sidebarShow ? "calc(100% - 300px)" : "calc(100% - 100px)", transition: "width ease .4s" }}>
      <Row>
        <BreadCrumb className="bg-transparent border-0 ps-0 " model={items} home={home} />
      </Row>
    </Col>
  );
};

export default AppHeader;