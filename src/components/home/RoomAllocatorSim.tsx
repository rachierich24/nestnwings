"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BedDouble, Zap, ShieldCheck, Settings2, Play, RefreshCcw, CheckCircle2 } from "lucide-react";

export function RoomAllocatorSim() {
    const [students, setStudents] = useState<number>(450);
    const [rooms, setRooms] = useState<number>(120); // Each room holds 2-4 students typically, but let's assume 4 for max capacity 480

    // Simulation States
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Grid generation (Visual representation of rooms)
    const [grid, setGrid] = useState<string[]>(Array(120).fill('empty')); // 'empty', 'processing', 'filled', 'overbooked'

    // Stats
    const [stats, setStats] = useState({ allocated: 0, waitlist: 0, time: "0.00s" });

    const handleRunSimulation = () => {
        if (isRunning) return;

        setIsRunning(true);
        setIsComplete(false);
        setProgress(0);
        setGrid(Array(rooms).fill('empty'));
        setStats({ allocated: 0, waitlist: 0, time: "0.00s" });

        const totalCapacity = rooms * 4; // Assume 4 students per room on average
        const toAllocate = Math.min(students, totalCapacity);
        const waitlisted = Math.max(0, students - totalCapacity);

        // Needed rooms calculation
        const neededRooms = Math.ceil(toAllocate / 4);

        let currentProgress = 0;
        let iteration = 0;
        const totalIterations = 40; // 2 seconds at 50ms intervals

        const interval = setInterval(() => {
            iteration++;
            currentProgress = Math.min(100, (iteration / totalIterations) * 100);
            setProgress(currentProgress);

            // Visual grid filling pulse
            setGrid(prev => {
                const newGrid = [...prev];
                // Randomly assign 'processing' to some empty, 'filled' to others based on progress ratio
                const fillTarget = Math.floor((currentProgress / 100) * neededRooms);

                for (let i = 0; i < rooms; i++) {
                    if (i < fillTarget) {
                        newGrid[i] = 'filled';
                    } else if (i === fillTarget) {
                        newGrid[i] = 'processing';
                    } else {
                        newGrid[i] = 'empty';
                    }
                }
                return newGrid;
            });

            // Intermediate Stats Update
            setStats({
                allocated: Math.floor((currentProgress / 100) * toAllocate),
                waitlist: 0,
                time: (iteration * 0.05).toFixed(2) + "s"
            });

            if (iteration >= totalIterations) {
                clearInterval(interval);
                setIsRunning(false);
                setIsComplete(true);

                // Finalize grid
                setGrid(prev => {
                    const finalGrid = [...prev];
                    for (let i = 0; i < rooms; i++) {
                        finalGrid[i] = (i < neededRooms) ? 'filled' : 'empty';
                    }
                    return finalGrid;
                });

                setStats({ allocated: toAllocate, waitlist: waitlisted, time: "1.84s" });
            }
        }, 50);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsComplete(false);
        setProgress(0);
        setGrid(Array(rooms).fill('empty'));
        setStats({ allocated: 0, waitlist: 0, time: "0.00s" });
    };

    // Rebuild grid if slider changes
    useEffect(() => {
        if (!isRunning && !isComplete) {
            setGrid(Array(rooms).fill('empty'));
        }
    }, [rooms]);

    return (
        <section className="py-24 md:py-32 bg-[#020617] relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-6xl">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">
                        <Zap size={14} /> Live Engine Demo
                    </div>
                    <h2 className="font-heading text-4xl md:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
                        Try the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Smart Allocator</span>
                    </h2>
                    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
                        Watch our algorithmic engine process complex parameters—gender, course year, and roommate preferences—to assign hundreds of beds in milliseconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left side: Configuration Panel */}
                    <div className="lg:col-span-4 bg-[#0d1424] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-2xl">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                <Settings2 size={20} className="text-slate-400" />
                                Parameters
                            </h3>
                            <p className="text-sm text-slate-400">Adjust the inputs for the simulation.</p>
                        </div>

                        {/* Sliders */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center text-sm font-bold text-white">
                                    <span className="flex items-center gap-2"><Users size={16} className="text-blue-400" /> New Applications</span>
                                    <span className="bg-white/10 px-3 py-1 rounded-md">{students}</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="1000"
                                    step="10"
                                    value={students}
                                    onChange={(e) => { setStudents(parseInt(e.target.value)); handleReset(); }}
                                    disabled={isRunning}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center text-sm font-bold text-white">
                                    <span className="flex items-center gap-2"><BedDouble size={16} className="text-indigo-400" /> Available Rooms</span>
                                    <span className="bg-white/10 px-3 py-1 rounded-md">{rooms}</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="400"
                                    step="10"
                                    value={rooms}
                                    onChange={(e) => { setRooms(parseInt(e.target.value)); handleReset(); }}
                                    disabled={isRunning}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                            </div>

                            {/* Applied Rules Mock */}
                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mt-2">
                                <ul className="text-xs font-semibold text-slate-400 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Match by Gender & Course</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Prioritize Seniority</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> Optimize Block Density</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-2">
                            {isComplete ? (
                                <button
                                    onClick={handleReset}
                                    className="w-full h-14 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center gap-2"
                                >
                                    <RefreshCcw size={18} /> Reset Simulation
                                </button>
                            ) : (
                                <button
                                    onClick={handleRunSimulation}
                                    disabled={isRunning}
                                    className="w-full h-14 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                                >
                                    {isRunning ? (
                                        <>Running Algorithms... <Zap size={18} className="animate-pulse" /></>
                                    ) : (
                                        <>Run Allocation Engine <Play size={18} fill="currentColor" /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right side: The Visualizer grid */}
                    <div className="lg:col-span-8 bg-[#0B1120] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden h-full flex flex-col min-h-[500px]">

                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <div className="text-sm font-bold text-white flex gap-2"><span className="w-4 h-4 rounded bg-slate-800"></span> Empty</div>
                                <div className="text-sm font-bold text-white flex gap-2"><span className="w-4 h-4 rounded bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"></span> Allotted</div>
                            </div>

                            <div className="text-right">
                                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Compute Time</div>
                                <div className="text-xl font-mono text-cyan-400 font-bold">{stats.time}</div>
                            </div>
                        </div>

                        {/* Progress Bar during run */}
                        <div className="w-full h-1 bg-slate-800 mb-8 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear", duration: 0.1 }}
                            />
                        </div>

                        {/* Smart Grid Representation */}
                        <div className="flex-grow bg-[#050812] border border-slate-900 rounded-2xl p-4 md:p-6 overflow-hidden relative">
                            {isRunning && (
                                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none animate-pulse" />
                            )}

                            <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-16 gap-1 md:gap-2 auto-rows-max overflow-y-auto h-full pr-2 custom-scrollbar">
                                {grid.map((status, i) => (
                                    <motion.div
                                        key={i}
                                        initial={false}
                                        animate={{
                                            backgroundColor: status === 'filled' ? '#6366f1' : status === 'processing' ? '#0ea5e9' : '#1e293b',
                                            scale: status === 'processing' ? 1.2 : 1,
                                            boxShadow: status === 'filled' ? '0 0 10px rgba(99,102,241,0.4)' : status === 'processing' ? '0 0 15px rgba(14,165,233,0.8)' : 'none',
                                            borderColor: status === 'filled' ? '#818cf8' : 'transparent'
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="aspect-square rounded.sm md:rounded-md border border-slate-800"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Under-grid stats panel that slides up on complete */}
                        <div className="h-20 shrink-0 mt-4 relative">
                            <AnimatePresence>
                                {isComplete && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex items-center justify-between"
                                    >
                                        <div className="flex gap-8">
                                            <div>
                                                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Successfully Matched</div>
                                                <div className="text-2xl font-black text-white">{stats.allocated} <span className="text-sm font-medium text-slate-500">students</span></div>
                                            </div>
                                            {stats.waitlist > 0 && (
                                                <div>
                                                    <div className="text-xs text-amber-500 uppercase tracking-wider font-bold mb-1">Waitlisted (Capacity Full)</div>
                                                    <div className="text-2xl font-black text-amber-400">{stats.waitlist} <span className="text-sm font-medium text-amber-500/50">students</span></div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="hidden md:flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 border border-emerald-500/20 rounded-lg font-bold text-sm">
                                            <ShieldCheck size={18} /> Zero Conflicts Detected
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
