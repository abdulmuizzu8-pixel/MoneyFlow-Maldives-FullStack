"use client";

import Link from "next/link";

const features = [
  ["Wallet", "Multi-currency balances and wallet-to-wallet transfers."],
  ["Payments", "Checkout, payment links, invoices, refunds and subscriptions."],
  ["Business", "Teams, approvals, expenses, payroll and merchant tools."],
  ["Digital assets", "Crypto and stablecoin accounts with separate asset ledgers."],
  ["Security", "KYC, 2FA, device controls, risk rules and audit trails."],
  ["Developer", "APIs, webhooks, test mode and integration controls."],
];

export default function Website() {
  return <main className="site">
    <header className="site-nav">
      <Link href="/" className="site-brand"><span>MF</span> MoneyFlow</Link>
      <nav><a href="#features">Features</a><a href="#business">Business</a><a href="#security">Security</a><Link href="/login">Sign in</Link><Link href="/signup" className="nav-cta">Create account</Link></nav>
    </header>
    <section className="site-hero">
      <div className="hero-copy">
        <span className="pill">GLOBAL DIGITAL WALLET</span>
        <h1>One wallet for your digital money.</h1>
        <p>Receive, hold, send, exchange and manage supported currencies and digital assets from one account. Built around wallet-to-wallet movement, with banking rails kept outside the core network.</p>
        <div className="hero-actions"><Link href="/signup" className="primary-btn">Create your wallet</Link><Link href="/login" className="secondary-btn">Open dashboard</Link></div>
        <div className="trust-row"><span>Multi-currency</span><span>Wallet-to-wallet</span><span>Business-ready</span></div>
      </div>
      <div className="hero-card">
        <div className="mock-top"><span>MoneyFlow</span><span>Verified</span></div>
        <div className="mock-label">TOTAL BALANCE</div><div className="mock-balance">MVR 28,560.00</div>
        <div className="mock-currencies"><span>MVR 28,560</span><span>USD 1,840</span><span>USDT 650</span></div>
        <div className="mock-actions"><b>Send</b><b>Receive</b><b>Exchange</b></div>
        <div className="mock-line"><span>Ocean Store</span><strong>- MVR 720</strong></div>
        <div className="mock-line"><span>Aminath</span><strong className="positive">+ USD 250</strong></div>
      </div>
    </section>
    <section id="features" className="site-section"><div className="section-kicker">PLATFORM</div><h2>Everything around the wallet.</h2><p className="section-lead">A modular foundation for consumer payments, merchant collections and business finance.</p><div className="feature-cards">{features.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
    <section id="business" className="dark-section"><div><div className="section-kicker">FOR BUSINESS</div><h2>Run payments and operations from one workspace.</h2><p>Manage customers, products, checkout, invoices, subscriptions, staff permissions, approvals and reporting without putting a bank in the core transfer path.</p><Link href="/" className="secondary-btn light">Explore workspace</Link></div><div className="workflow"><div>Customer payment</div><i>↓</i><div>Risk + compliance</div><i>↓</i><div>Wallet ledger</div><i>↓</i><div>Receipt + reporting</div></div></section>
    <section id="security" className="site-section security-section"><div className="section-kicker">SECURITY BY DESIGN</div><h2>Controls before money movement.</h2><div className="security-grid">{["Double-entry ledger","Idempotent transactions","KYC / KYB workflows","AML and sanctions screening","Fraud and velocity rules","Audit logs and role controls"].map(x=><div key={x}><b>✓</b><span>{x}</span></div>)}</div></section>
    <footer className="site-footer"><div><b>MoneyFlow</b><p>Digital wallet platform interface.</p></div><div><span>Core network: wallet-to-wallet</span><span>Bank transfers: excluded from core</span><span>Production rails: provider integrations required</span></div></footer>
  </main>
}