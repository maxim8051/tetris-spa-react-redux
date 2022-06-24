import React from 'react';
import {GridBoardComponent} from "./components/GridBoard/GridBoardComponent";
import {NextBlockComponent} from "./components/NextBlock/NextBlockComponent";
import {InfoBoardComponent} from "./components/InfoBoard/InfoBoardComponent";
import {ControlsComponent} from "./components/Controls/ControlsComponent";
import {MessageComponent} from "./components/Message/MessageComponent";


function App() {
    return (
        <div className="App">

            <GridBoardComponent />
            <NextBlockComponent />
            <InfoBoardComponent />
            <ControlsComponent />
            <MessageComponent />
        </div>
    );
}

export default App;
