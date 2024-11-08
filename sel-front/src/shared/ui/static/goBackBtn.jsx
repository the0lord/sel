import { findNonSerializableValue } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
    const navigate = useNavigate();
    return <button
        onClick={() => navigate(-1)}
        className="group relative h-auto w-auto py-2 px-6 overflow-hidden rounded bg-slate-400 text-sm font-bold text-white">
        Go back
        <div className="absolute inset-0 h-full w-full scale-0 rounded transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
    </button>
}

export default GoBackBtn;