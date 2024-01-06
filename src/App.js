import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/header_components/Header";
import Body from "./components/body_components/Body";
import Footer from "./components/footer_components/Footer"

const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App/>);