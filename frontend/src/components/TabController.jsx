import { useState } from "react";

import HideTab from "./Hide secret/HideTab";
import RevealTab from "./Reveal Secret/RevealTab";

export default function TabController(){

    const [activeTab, setActiveTab] = useState('hide');


    function switchTab(tab) {
        return (
            <div className="tab-buttons">
                <button onClick={() => setActiveTab('hide')}>Hide Secret</button>
                <button onClick={() => setActiveTab('show')}>Reveal Secret</button>
            </div>
        );
    }

    return (
        <div>
            {switchTab()}
            {activeTab === 'hide' ? <HideTab /> : <RevealTab />}
        </div>
    );
}
