"use client";

import { useMemo, useState } from "react";

type Module = "overview"|"wallet"|"send"|"receive"|"payments"|"cards"|"qr"|"business"|"crypto"|"fx"|"security";

const txns = [
  {name:"Island Coffee", type:"Merchant payment", amount:"- MVR 185.00", status:"Completed"},
  {name:"Aminath", type:"Wallet transfer", amount:"+ USD 250.00", status:"Completed"},
  {name:"Ocean Store", type:"QR payment", amount:"- MVR 720.00", status:"Completed"},
  {name:"USD → MVR", type:"FX conversion", amount:"+ MVR 1,530.00", status:"Completed"},
];

const modules = [
  ["wallet","Wallet","Multi-currency balances"],
  ["send","Send money","Wallet-to-wallet transfers"],
  ["receive","Receive","QR, links and requests"],
  ["payments","Payments","Checkout, invoices, subscriptions"],
  ["cards","Cards","Virtual and physical cards"],
  ["qr","QR Pay","Scan and merchant QR"],
  ["business","Business","Teams, payroll and approvals"],
  ["crypto","Digital assets","Crypto and stablecoins"],
  ["fx","FX","Currency exchange"],
  ["security","Security","KYC, limits and protection"],
] as const;

export default function Home(){
  const [active,setActive]=useState<Module>("overview");
  const [balance]=useState(28560);
  const [toast,setToast]=useState("");
  const [showAll,setShowAll]=useState(false);
  const visibleTxns=useMemo(()=>showAll?txns:txns.slice(0,3),[showAll]);
  function action(label:string){setToast(label+" opened");window.setTimeout(()=>setToast(""),1800)}
  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">M</div><div>Money<span>Flow</span><small>Digital Wallet</small></div></div>
      <nav>
        <button className={active==="overview"?"nav-item active":"nav-item"} onClick={()=>setActive("overview")}>Overview</button>
        {modules.slice(1).map(([id,label])=><button key={id} className={active===id?"nav-item active":"nav-item"} onClick={()=>setActive(id)}>{label}</button>)}
      </nav>
      <div className="side-bottom"><div className="status-dot"/> Systems operational<div className="legal-note">Wallet-to-wallet core. Bank transfers are not part of the core network.</div></div>
    </aside>
    <section className="main">
      <header className="topbar">
        <div><div className="eyebrow">PERSONAL WALLET</div><h1>{active==="overview"?"Good afternoon, Abdul":modules.find(m=>m[0]===active)?.[1]}</h1></div>
        <div className="top-actions"><button className="icon-btn" onClick={()=>action("Notifications")}>●</button><button className="avatar">AM</button></div>
      </header>
      {active==="overview" ? <Overview balance={balance} action={action} visibleTxns={visibleTxns} showAll={showAll} setShowAll={setShowAll}/> : <ModulePanel id={active} action={action}/>}
    </section>
    <nav className="mobile-nav">
      <button className={active==="overview"?"active":""} onClick={()=>setActive("overview")}>Home</button>
      <button onClick={()=>setActive("send")}>Send</button>
      <button onClick={()=>setActive("receive")}>Receive</button>
      <button onClick={()=>setActive("wallet")}>Wallet</button>
      <button onClick={()=>setActive("security")}>More</button>
    </nav>
    {toast && <div className="toast">{toast}</div>}
  </main>
}

function Overview({balance,action,visibleTxns,showAll,setShowAll}:{balance:number;action:(x:string)=>void;visibleTxns:any[];showAll:boolean;setShowAll:(x:boolean)=>void}){
 return <div className="content">
   <section className="hero-grid">
     <div className="balance-card">
       <div className="balance-head"><span>Available balance</span><span className="verified">● Verified</span></div>
       <div className="big-balance">MVR {balance.toLocaleString("en-US",{minimumFractionDigits:2})}</div>
       <div className="sub-balances"><span>USD 1,840.00</span><span>EUR 420.00</span><span>USDT 650.00</span></div>
       <div className="balance-actions"><button onClick={()=>action("Add money")}>Add money</button><button onClick={()=>action("Withdraw")}>Withdraw</button><button onClick={()=>action("Exchange")}>Exchange</button></div>
     </div>
     <div className="security-card"><div className="eyebrow">ACCOUNT HEALTH</div><h3>Protected and ready</h3><p>Identity verified. Two-factor authentication enabled.</p><div className="progress"><span/></div><small>Security score 92 / 100</small><button className="text-btn" onClick={()=>action("Security settings")}>Review security →</button></div>
   </section>
   <section className="quick-grid">
    <button onClick={()=>action("Send money")}><b>↗</b><span>Send money</span><small>Wallet-to-wallet</small></button>
    <button onClick={()=>action("Request money")}><b>↙</b><span>Request money</span><small>Link or QR</small></button>
    <button onClick={()=>action("Scan QR")}><b>▦</b><span>Scan QR</span><small>Pay a merchant</small></button>
    <button onClick={()=>action("Payment link")}><b>↗</b><span>Payment link</span><small>Get paid online</small></button>
   </section>
   <section className="section-head"><div><div className="eyebrow">RECENT ACTIVITY</div><h2>Transactions</h2></div><button className="text-btn" onClick={()=>setShowAll(!showAll)}>{showAll?"Show less":"View all"} →</button></section>
   <section className="transactions">{visibleTxns.map((t,i)=><div className="txn" key={i}><div className="txn-icon">{i===0?"▣":i===1?"↗":i===2?"▦":"↔"}</div><div className="txn-main"><b>{t.name}</b><span>{t.type}</span></div><div className="txn-right"><b className={t.amount.startsWith("+")?"positive":""}>{t.amount}</b><span>{t.status}</span></div></div>)}</section>
   <section className="section-head"><div><div className="eyebrow">PLATFORM</div><h2>Everything in one wallet</h2></div></section>
   <section className="module-grid">{modules.slice(1,7).map(([id,label,desc])=><button key={id} onClick={()=>action(label)}><div className="module-icon">{label[0]}</div><div><b>{label}</b><span>{desc}</span></div><i>→</i></button>)}</section>
 </div>
}

function ModulePanel({id,action}:{id:Module;action:(x:string)=>void}){
 const data:Record<string,{eyebrow:string;title:string;desc:string;items:string[]}> = {
  wallet:{eyebrow:"WALLET CORE",title:"Multi-currency wallet",desc:"One account for supported fiat and digital assets.",items:["MVR • 28,560.00","USD • 1,840.00","EUR • 420.00","USDT • 650.00","Statements & ledger history"]},
  send:{eyebrow:"TRANSFER",title:"Send money instantly",desc:"Move value directly between supported wallet accounts.",items:["Username / phone / email","Amount + currency","FX quote when required","Risk & compliance checks","2FA confirmation"]},
  receive:{eyebrow:"COLLECTIONS",title:"Receive and get paid",desc:"Share a wallet identity, QR code or payment link.",items:["Personal QR","Payment request","Payment link","Invoice","Merchant checkout"]},
  payments:{eyebrow:"PAYMENTS",title:"Payment platform",desc:"Stripe-style tools for businesses and creators.",items:["Checkout","Payment links","Invoices","Subscriptions","Refunds & disputes"]},
  cards:{eyebrow:"CARDS",title:"Wallet cards",desc:"Control virtual and physical card products through an issuing partner.",items:["Virtual cards","Physical cards","Freeze / unfreeze","Spending limits","Card transaction history"]},
  qr:{eyebrow:"QR PAY",title:"QR payments",desc:"Scan to pay or let customers scan to pay you.",items:["Personal QR","Merchant QR","Dynamic QR","Scan & pay","Payment history"]},
  business:{eyebrow:"BUSINESS",title:"Business wallet",desc:"Team permissions, approvals and merchant operations.",items:["Business wallet","Roles & permissions","Payroll","Approvals","Reports"]},
  crypto:{eyebrow:"DIGITAL ASSETS",title:"Crypto & stablecoins",desc:"A separate digital-asset layer connected to the wallet.",items:["BTC","ETH","USDT","USDC","Blockchain activity"]},
  fx:{eyebrow:"FOREIGN EXCHANGE",title:"Exchange currencies",desc:"Convert between supported balances with a live quote.",items:["Currency quote","Rate lock","Fee disclosure","Conversion history","Multi-currency balances"]},
  security:{eyebrow:"TRUST & SAFETY",title:"Security center",desc:"Identity, account protection, transaction monitoring and limits.",items:["KYC / identity","2FA / passkeys","Device controls","Transaction limits","Fraud monitoring"]}
 };
 const d=data[id]||data.wallet;
 return <div className="content"><section className="module-hero"><div><div className="eyebrow">{d.eyebrow}</div><h2>{d.title}</h2><p>{d.desc}</p><button className="primary-btn" onClick={()=>action("New "+d.title)}>Open {d.title}</button></div><div className="module-visual"><div className="ring">MF</div><span>Automated workflow</span><small>Request → Risk → Ledger → Receipt</small></div></section><section className="feature-list">{d.items.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b><i>✓</i></div>)}</section><div className="notice"><b>Production architecture</b><p>This interface is ready for the wallet product. Real-money movement, custody, card issuing, crypto services and regulated payment operations must be connected to licensed or approved providers before production activation.</p></div></div>
}