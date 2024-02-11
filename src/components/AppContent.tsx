import React, { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import routes, { IRoutes } from "../routes/routes";

const MemoizedAppContent = React.memo(function AppContent() {
  return (
    <Container fluid className="p-0">
      <Suspense fallback={<Spinner color="primary" />}>
        <Routes>
          {routes.map((rt: IRoutes) => (
            <Route path={rt.path} element={rt.element} />
          ))}
          {/*  */}
          <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
      </Suspense>
    </Container>
  );
});

export default MemoizedAppContent;
