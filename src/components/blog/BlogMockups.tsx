"use client";

import { Users, BedDouble, CheckCircle2, LayoutDashboard, FileSpreadsheet, AlertTriangle, ArrowRight, ChevronRight } from "lucide-react";

/* ============================================================
   Blog 1 Flow: Student Application → Smart Allocation → Warden Approval → Dashboard Update
   ============================================================ */
export function Blog1FlowMockup() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-[18px] p-5 flex flex-col gap-4 overflow-hidden relative">
            {/* Flow Steps */}
            <div className="flex items-stretch gap-3 flex-1 min-h-0">
                {/* Step 1: Student Application */}
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-3 flex flex-col shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Users size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">Applications</span>
                    </div>
                    <div className="flex-1 space-y-1.5 overflow-hidden">
                        {[
                            { name: "Aryan S.", dept: "CS", yr: "3rd", status: "new" },
                            { name: "Priya M.", dept: "ECE", yr: "2nd", status: "new" },
                            { name: "Kunal R.", dept: "ME", yr: "1st", status: "reviewed" },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600 shrink-0">
                                    {s.name.charAt(0)}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-[9px] font-semibold text-slate-800 truncate">{s.name}</div>
                                    <div className="text-[8px] text-slate-400">{s.dept} · {s.yr}</div>
                                </div>
                                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.status === "new" ? "bg-blue-500" : "bg-emerald-500"}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center shrink-0">
                    <ChevronRight size={14} className="text-slate-300" />
                </div>

                {/* Step 2: Smart Allocation Engine */}
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-3 flex flex-col shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <BedDouble size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">Allocation</span>
                    </div>
                    {/* Room Grid */}
                    <div className="grid grid-cols-4 gap-1 flex-1">
                        {["A-101", "A-102", "A-103", "A-104", "B-201", "B-202", "B-203", "B-204", "C-301", "C-302", "C-303", "C-304"].map((room, i) => {
                            const occ = [0, 3, 5, 7, 9].includes(i);
                            const assigning = [1, 4].includes(i);
                            return (
                                <div
                                    key={room}
                                    className={`rounded-md text-[7px] font-bold flex items-center justify-center border transition-all ${assigning
                                        ? "bg-emerald-50 border-emerald-300 text-emerald-700 ring-1 ring-emerald-200"
                                        : occ
                                            ? "bg-slate-100 border-slate-200 text-slate-400"
                                            : "bg-white border-slate-100 text-slate-500"
                                        }`}
                                >
                                    {room}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-sm bg-emerald-100 border border-emerald-300" />
                            <span className="text-[7px] text-slate-500">Assigning</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-sm bg-slate-100 border border-slate-200" />
                            <span className="text-[7px] text-slate-500">Occupied</span>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center shrink-0">
                    <ChevronRight size={14} className="text-slate-300" />
                </div>

                {/* Step 3: Warden Approval */}
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-3 flex flex-col shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-600 flex items-center justify-center">
                            <CheckCircle2 size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">Approval</span>
                    </div>
                    <div className="flex-1 space-y-1.5 overflow-hidden">
                        {[
                            { name: "Aryan S. → A-102", action: "Approve" },
                            { name: "Priya M. → B-201", action: "Approve" },
                        ].map((req, i) => (
                            <div key={i} className="p-2 rounded-lg bg-amber-50/60 border border-amber-100">
                                <div className="text-[9px] font-semibold text-slate-700 mb-1.5">{req.name}</div>
                                <div className="flex gap-1.5">
                                    <div className="px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded-md">Approve</div>
                                    <div className="px-2 py-0.5 bg-white border border-slate-200 text-slate-500 text-[8px] font-bold rounded-md">Reject</div>
                                </div>
                            </div>
                        ))}
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                            <div className="flex items-center gap-1">
                                <CheckCircle2 size={10} className="text-emerald-500" />
                                <span className="text-[9px] font-semibold text-emerald-700">Kunal R. → C-301</span>
                            </div>
                            <span className="text-[8px] text-emerald-500 ml-3.5">Approved</span>
                        </div>
                    </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center shrink-0">
                    <ChevronRight size={14} className="text-slate-300" />
                </div>

                {/* Step 4: Dashboard Update */}
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-3 flex flex-col shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-5 h-5 rounded-md bg-purple-100 text-purple-600 flex items-center justify-center">
                            <LayoutDashboard size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">Dashboard</span>
                    </div>
                    <div className="space-y-2 flex-1">
                        <div className="p-2 rounded-lg bg-slate-50">
                            <div className="text-[8px] text-slate-400 uppercase font-semibold">Occupancy</div>
                            <div className="text-lg font-black text-slate-800">94.2%</div>
                            <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "94.2%" }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                            <div className="p-1.5 rounded-lg bg-blue-50 text-center">
                                <div className="text-[8px] text-blue-400 font-semibold">Total</div>
                                <div className="text-sm font-black text-blue-700">1,450</div>
                            </div>
                            <div className="p-1.5 rounded-lg bg-emerald-50 text-center">
                                <div className="text-[8px] text-emerald-400 font-semibold">Allotted</div>
                                <div className="text-sm font-black text-emerald-700">1,366</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flow labels at bottom */}
            <div className="flex items-center justify-center gap-2 text-[8px] text-slate-400 font-medium">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-500 font-bold">1. Apply</span>
                <ArrowRight size={10} className="text-slate-300" />
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-500 font-bold">2. Allocate</span>
                <ArrowRight size={10} className="text-slate-300" />
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-500 font-bold">3. Approve</span>
                <ArrowRight size={10} className="text-slate-300" />
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-500 font-bold">4. Confirm</span>
            </div>
        </div>
    );
}

/* ============================================================
   Blog 2 Flow: Manual Process → Disconnected Tools → Unified Platform
   ============================================================ */
export function Blog2FlowMockup() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-[18px] p-5 flex flex-col gap-4 overflow-hidden relative">
            <div className="flex items-stretch gap-3 flex-1 min-h-0">
                {/* Before: Manual Processes */}
                <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[9px] font-bold text-rose-500 uppercase tracking-widest text-center mb-1">Before</div>

                    {/* Spreadsheet mock */}
                    <div className="flex-1 bg-white rounded-xl border border-rose-200/60 p-2.5 flex flex-col shadow-sm">
                        <div className="flex items-center gap-1.5 mb-2">
                            <FileSpreadsheet size={12} className="text-rose-400" />
                            <span className="text-[9px] font-bold text-slate-600">room_allotment.xlsx</span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <table className="w-full text-[7px]">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="text-left p-1 text-slate-400 font-semibold">Room</th>
                                        <th className="text-left p-1 text-slate-400 font-semibold">Student</th>
                                        <th className="text-left p-1 text-slate-400 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { r: "A-101", s: "Aryan S.", st: "Paid" },
                                        { r: "A-102", s: "???", st: "Pending" },
                                        { r: "A-103", s: "ERROR", st: "#REF!" },
                                        { r: "B-201", s: "Priya M.", st: "Paid" },
                                    ].map((row, i) => (
                                        <tr key={i} className={`border-t border-slate-50 ${row.st === "#REF!" ? "bg-rose-50" : ""}`}>
                                            <td className="p-1 text-slate-600">{row.r}</td>
                                            <td className={`p-1 ${row.s === "???" || row.s === "ERROR" ? "text-rose-500 font-bold" : "text-slate-600"}`}>{row.s}</td>
                                            <td className={`p-1 ${row.st === "#REF!" ? "text-rose-500 font-bold" : row.st === "Pending" ? "text-amber-500" : "text-emerald-500"}`}>{row.st}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Alert */}
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-2 flex items-center gap-2">
                        <AlertTriangle size={12} className="text-rose-400 shrink-0" />
                        <span className="text-[8px] text-rose-600 font-medium">3 duplicate entries, 12 formula errors</span>
                    </div>
                </div>

                {/* Transition Arrow */}
                <div className="flex flex-col items-center justify-center shrink-0 gap-1">
                    <div className="w-px h-8 bg-slate-200" />
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <ArrowRight size={14} className="text-primary" />
                    </div>
                    <div className="w-px h-8 bg-slate-200" />
                </div>

                {/* After: Unified Platform */}
                <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest text-center mb-1">After</div>

                    {/* Modern Dashboard mock */}
                    <div className="flex-1 bg-white rounded-xl border border-emerald-200/60 p-2.5 flex flex-col shadow-sm">
                        <div className="flex items-center gap-1.5 mb-2">
                            <LayoutDashboard size={12} className="text-emerald-500" />
                            <span className="text-[9px] font-bold text-slate-600">Nest n Wings Dashboard</span>
                            <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 rounded text-[7px] font-bold text-emerald-500">
                                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Live
                            </div>
                        </div>

                        {/* Mini metrics */}
                        <div className="grid grid-cols-3 gap-1.5 mb-2">
                            {[
                                { l: "Rooms", v: "1,450", c: "blue" },
                                { l: "Allotted", v: "1,366", c: "emerald" },
                                { l: "Revenue", v: "₹18.4M", c: "purple" },
                            ].map((m, i) => (
                                <div key={i} className={`p-1.5 rounded-lg bg-${m.c}-50 text-center`}>
                                    <div className={`text-[7px] text-${m.c}-400 font-semibold`}>{m.l}</div>
                                    <div className={`text-xs font-black text-${m.c}-700`}>{m.v}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mini table */}
                        <div className="flex-1 overflow-hidden">
                            <table className="w-full text-[7px]">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="text-left p-1 text-slate-400 font-semibold">Room</th>
                                        <th className="text-left p-1 text-slate-400 font-semibold">Student</th>
                                        <th className="text-left p-1 text-slate-400 font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { r: "A-101", s: "Aryan Sharma", st: "✓ Paid" },
                                        { r: "A-102", s: "Priya Mehta", st: "✓ Paid" },
                                        { r: "B-201", s: "Kunal Roy", st: "✓ Paid" },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-slate-50">
                                            <td className="p-1 text-slate-600 font-medium">{row.r}</td>
                                            <td className="p-1 text-slate-700 font-medium">{row.s}</td>
                                            <td className="p-1 text-emerald-500 font-bold">{row.st}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Success */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                        <span className="text-[8px] text-emerald-700 font-medium">Zero errors · Real-time sync · Auto-allocated</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ============================================================
   Inline Article Flow Diagram: Student → Allocation → Approval → Confirmation
   ============================================================ */
export function AllotmentFlowDiagram() {
    const steps = [
        { icon: Users, label: "Student submits hostel application", color: "blue", detail: "Form with preferences, department, year" },
        { icon: BedDouble, label: "Smart allotment engine assigns room", color: "emerald", detail: "Rule-based algorithm matches capacity" },
        { icon: CheckCircle2, label: "Warden approves request", color: "amber", detail: "One-click approve/reject with notes" },
        { icon: LayoutDashboard, label: "Student receives room confirmation", color: "purple", detail: "Auto-email + dashboard update" },
    ];

    return (
        <div className="my-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Allotment Workflow</div>
            <div className="flex flex-col md:flex-row items-stretch gap-3">
                {steps.map((step, i) => (
                    <div key={i} className="flex-1 flex flex-col md:flex-row items-center gap-3">
                        <div className={`w-full p-4 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20 text-center`}>
                            <step.icon size={20} className={`mx-auto mb-2 text-${step.color}-400`} />
                            <div className="text-sm font-bold text-white mb-1">{step.label}</div>
                            <div className="text-xs text-slate-400">{step.detail}</div>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="hidden md:flex items-center shrink-0">
                                <ArrowRight size={16} className="text-slate-500" />
                            </div>
                        )}
                        {i < steps.length - 1 && (
                            <div className="md:hidden flex justify-center">
                                <ArrowRight size={16} className="text-slate-500 rotate-90" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
