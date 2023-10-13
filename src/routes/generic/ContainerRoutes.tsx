import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Content from "../../pages/content/Content";
import Interface from "../../pages/interface/Interface";

export function ContainerRoutes() {
  return (
      <Routes>
        {/* <Route path="" element={<Home />} /> */}

        <Route path="" element={<Interface dataQuestion={{ text: "25 -  ~ ( p v ~ r ) , p v q , r -> s , q ^ s -> t ^ s ⊢ s ^ t\r\n", id: "0" }} />} />
        <Route path="content" element={<Content />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
  );
}
