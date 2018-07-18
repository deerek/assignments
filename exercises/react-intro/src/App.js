import React from "react";

//import components
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Navigation from "./Navigation.js";
import Info from "./Info.js";


function App() {
    return (
        <div>
            <Header />
            <Navigation />
            <Info />
            <Content />
            <Footer />
        </div>
    )
}

export default App;