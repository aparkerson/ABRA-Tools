/*
Author: Anthony Silva
Date: 11/6/24
File: EnvironmentSubSelect.tsx
Description: Shows what can be viewed for an environment 
*/

import { useState } from "react";
import EnvironmentLogs from "./EnvironmentLogs";
import EnvironmentSummary from "./EnvironmentSummary";

export default function NodeSubSelect({ envData }) {

    const [selectedMenu, setSelectedMenu] = useState('Summary');

    const renderContent = () => {
        switch (selectedMenu) {
            case 'Summary':
                return <EnvironmentSummary envData={envData}/>;
            case 'Environment Log':
                return <EnvironmentLogs envData={envData}/>;
            default:
                return <EnvironmentSummary envData={envData}/>;
        }
    };

    return (
        <>
        <div>
            {/* Menu for selecting different views */}
            <div className="flex justify-around px-[10px] my-[10px] border-b-[2px]">
                <button
                    onClick={() => setSelectedMenu('Summary')}
                    className="text-md"
                    style={{fontWeight: selectedMenu === 'Summary' ? 'bold' : 'normal'}}
                >
                    Summary
                </button>

                <button
                    onClick={() => setSelectedMenu('Environment Log')}
                    className="text-md"
                    style={{fontWeight: selectedMenu === 'Environment Log' ? 'bold' : 'normal'}}
                >
                    Env Log
                </button>
            </div>

            {/* Render the selected view */}
            <div>
                {renderContent()}
            </div>
        </div>
        </>
    );
}