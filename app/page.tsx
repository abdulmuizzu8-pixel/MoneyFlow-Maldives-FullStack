"use client";

import { useState } from "react";
import Link from "next/link";
import LoginModal from "../components/LoginModal";

export default function Home() {
	const [loginOpen, setLoginOpen] = useState(false);

	return <main className="shell"><header className="nav" style={{ flexWrap: "wrap" }}><div className="logo">Money<span>Flow</span></div><div><button className="btn" type="button" onClick={() => setLoginOpen(true)}>Log in</button> <Link className="btn primary" href="/signup">Get started</Link></div></header><section className="hero"><div><div className="muted">Personal finance, redesigned</div><h1>Take control of <span>your money.</span></h1><p>Track spending, plan budgets, build savings goals and understand your finances in one beautiful place.</p><Link className="btn primary" href="/signup">Create your free account →</Link></div><div className="card"><div className="muted">Total balance</div><div className="balance">MVR 28,560.00</div><div className="cards"><div className="mini">Income<br/><b className="green">MVR 45,000</b></div><div className="mini">Expenses<br/><b className="red">MVR 16,440</b></div><div className="mini">Savings<br/><b>MVR 12,120</b></div></div><div style={{height:100,marginTop:20,background:"#edf5ff",borderRadius:15}}/></div></section><section className="features"><div className="feature">💳<h3>Track everything</h3><p className="muted">Cash, cards and daily expenses.</p></div><div className="feature">🎯<h3>Reach goals</h3><p className="muted">Build and monitor savings goals.</p></div><div className="feature">📊<h3>Understand spending</h3><p className="muted">Clear reports without spreadsheets.</p></div></section>{loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}</main>;
}