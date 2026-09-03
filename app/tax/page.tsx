import Link from "next/link";
export default function TaxPage(){
  return <main className="shell">
    <header className="nav"><div className="logo">Money<span>Flow</span></div><Link className="btn" href="/dashboard">← Dashboard</Link></header>
    <div className="card" style={{marginTop:25}}>
      <div className="muted">Maldives tax centre</div><h1>Tax reports & deadlines</h1>
      <p className="muted">Prepare your figures from MoneyFlow transactions before submitting the official return through MIRAconnect.</p>
    </div>
    <div className="features" style={{marginTop:18}}>
      <div className="feature"><div style={{fontSize:28}}>🧾</div><h3>GST — General</h3><p className="muted">MIRA 205 preparation: sales, zero-rated, exempt, out-of-scope, output tax, input tax and GST liability.</p><b>Current general GST: 8%</b></div>
      <div className="feature"><div style={{fontSize:28}}>🏝️</div><h3>GST — Tourism</h3><p className="muted">MIRA 206 preparation for tourism goods and services, with USD reporting support.</p><b>Current tourism GST: 17%</b></div>
      <div className="feature"><div style={{fontSize:28}}>📑</div><h3>Income Tax</h3><p className="muted">Organise annual income, expenses and supporting records for the MIRA 604 income tax return.</p><b>Export-ready report</b></div>
    </div>
    <div className="card" style={{marginTop:18}}>
      <h2>GST period summary</h2>
      <div className="statgrid">
        <div className="stat"><span className="muted">Taxable sales</span><b>MVR 125,000</b></div>
        <div className="stat"><span className="muted">Output tax</span><b>MVR 10,000</b></div>
        <div className="stat"><span className="muted">Input tax</span><b>MVR 4,200</b></div>
        <div className="stat"><span className="muted">Estimated GST payable</span><b className="red">MVR 5,800</b></div>
      </div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:18}}>
        <button className="btn primary">Generate report</button><button className="btn">Export CSV</button><button className="btn">Export PDF</button>
      </div>
      <p className="muted" style={{marginTop:18}}>MoneyFlow does not submit a tax return automatically. Review the report and submit through the official MIRA process.</p>
    </div>
  </main>
}