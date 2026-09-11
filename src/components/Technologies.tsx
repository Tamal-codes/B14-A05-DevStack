import { use } from "react";
import type { ITech } from "../Type/techType";

interface TechProps {
    technologiPromise: Promise<ITech[]>;
}

const Technologies = ({ technologiPromise }: TechProps) => {
    const technologies = use(technologiPromise);

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            {/* 1. Header Text Section */}
            <div className="mb-10 text-left">
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Explore the<span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* 2. Main Responsive Grid (Cards + Your Stack Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Left Side: Tech Cards Grid (Large Screen-এ 3 Column) */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                        <div key={tech.id} className="card bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                                    <span className={`badge ${tech.badgeColor} border-0 text-xs px-2.5 py-1 rounded-full`}>
                                        {tech.badge}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2">{tech.name}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6">{tech.description}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">
                                        {tech.category}
                                    </span>
                                    <span className="text-gray-400">{tech.level}</span>
                                    <span className="ml-auto font-semibold text-amber-500 flex items-center gap-1">
                                        ★ {tech.rating}
                                    </span>
                                </div>

                                <button className="btn bg-slate-900 hover:bg-slate-800 text-white btn-sm w-full rounded-lg font-medium border-0">
                                    Add to Stack
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Your Stack Sidebar Section */}
                <div className="lg:col-span-1 border border-gray-100 bg-white rounded-2xl p-5 h-fit shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800">Your Stack</h3>
                    <p className="text-xs text-gray-400 mb-4">0 Technology Selected</p>

                    <div className="space-y-3 mb-6">
                        <p className="text-xs text-gray-400 text-center py-4">No technology added yet.</p>
                    </div>

                    <button className="btn btn-outline btn-error btn-sm w-full rounded-lg text-xs font-semibold">
                        Remove All
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Technologies;