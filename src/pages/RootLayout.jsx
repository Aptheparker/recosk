import { Outlet } from "react-router-dom";
import { SelectedListProvider } from "../context/SelectedList";

function RootLayout() {


  
  return (
    <SelectedListProvider>
      <Outlet />
    </SelectedListProvider>

  );
}

export default RootLayout;
