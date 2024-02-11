import { useSelector } from "react-redux";
import MemoizedAppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";

const DefaultLayout = () => {
  const sidebarShow = useSelector((state: any) => state.sidebarShow);
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader sidebarShow={sidebarShow} />
        <div className="body flex-grow-1 p-3 align-self-end" style={{ width: sidebarShow ? "calc(100% - 300px)" : "calc(100% - 100px)", transition: "width ease .4s" }}>
          <MemoizedAppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
