import React from "react";
import Tab from "./components/Tabs";
import Liverate from "./components/Forexapi/Liverate";
import Supportedsymbol from "./components/Forexapi/Supportedsymbol";
import Historialrate from "./components/Forexapi/Historialrate";
import Changequery from "./components/Forexapi/Changequery";
import Changeconvert from "./components/Forexapi/Changeconvert";

const tabsData = [
    { label: "Supported Symbols", content: < Supportedsymbol / > },
    { label: "Live Rates", content: < Liverate / > },
    { label: "Historical Rates", content: < Historialrate / > },
    { label: "Change Query", content: < Changequery / > },
    { label: "Change Converter", content: < Changeconvert / > },
];

const App = () => {
    return ( <
        div >
        <
        h1 style = {
            { textAlign: "center", marginTop: "40px" }
        } > Forex Rate API < /h1> <
        Tab tabs = { tabsData }
        /> < /
        div >
    );
};

export default App;