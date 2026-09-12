import { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { ITech } from "../Type/techType";

interface TechProps {
    technologiPromise: Promise<ITech[]>;
}

const Technologies = ({ technologiPromise }: TechProps) => {
    const technologies = use(technologiPromise);
    const [selectedTechs, setSelectedTechs] = useState<ITech[]>([]);

    const handleAddStack = (tech: ITech) => {
        const isAlreadyAdded = selectedTechs.some((item) => item.id === tech.id);

        if (isAlreadyAdded) {
            toast.error(`${tech.name} is already in your stack!`);
            return;
        }

        setSelectedTechs([...selectedTechs, tech]);
        toast.success(`${tech.name} added to your stack!`)};

    const handleRemoveSingle = (id: string | number) => {
        const updated = selectedTechs.filter((item) => item.id !== id);
        setSelectedTechs(updated);
        toast.info("Technology removed!")};

    const handleRemoveAll = () => {
        if (selectedTechs.length === 0) return;
        setSelectedTechs([]);
        toast.warn("Cleared all technologies from stack!")};

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <ToastContainer position="top-right" autoClose={2000} />

            <div className="mb-10 text-left">
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                    Pick your favorite technologies to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => {
                        const isAdded = selectedTechs.some((item) => item.id === tech.id);

                        return (
                            <div
                                key={tech.id}
                                className="card bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between" >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                                        <span className={`badge ${tech.badgeColor} border-0 text-xs px-2.5 py-1 rounded-full`}>
                                            {tech.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{tech.name}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                                        {tech.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">
                                            {tech.category}
                                        </span>
                                        <span className="text-gray-400">{tech.level}</span>
                                        <span className="ml-auto font-semibold text-amber-500 flex items-center gap-1"> ★ {tech.rating}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleAddStack(tech)}
                                        disabled={isAdded}
                                        className={`btn btn-sm w-full rounded-lg font-medium border-0 ${isAdded ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800 text-white" }`} >
                                        {isAdded ? "Added to Stack" : "Add to Stack"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="lg:col-span-1 border border-gray-100 bg-white rounded-2xl p-5 h-fit shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800">Your Stack</h3>
                    <p className="text-xs text-gray-400 mb-4">
                        {selectedTechs.length} Technology Selected
                    </p>

                    <div className="space-y-3 mb-6">
                        {selectedTechs.length === 0 ? (
                            <p className="text-xs text-gray-400 text-center py-4">
                                No technology added yet.
                            </p>
                            ) : (
                            selectedTechs.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border border-gray-100 p-3 rounded-xl shadow-2xs"  >
                                    <div className="flex items-center gap-3">
                                        <img src={item.icon} alt={item.name} className="w-7 h-7" /> 

                                        <div>
                                            <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                                            <p className="text-[10px] text-gray-400">{item.category}</p>
                                        </div>

                                    </div>

                                    <button
                                        onClick={() => handleRemoveSingle(item.id)}
                                        className="text-gray-400 hover:text-red-500 font-bold text-sm px-1" >
                                        ✕
                                    </button>
                                </div>

                            ))
                        )}
                    </div>

                    <button
                        onClick={handleRemoveAll}
                        disabled={selectedTechs.length === 0}
                        className="btn btn-outline btn-error btn-sm w-full rounded-lg text-xs font-semibold disabled:border-gray-200 disabled:text-gray-300" >
                        Remove All
                    </button>

                </div>

            </div>

        </div>
        
    );
};

export default Technologies; 