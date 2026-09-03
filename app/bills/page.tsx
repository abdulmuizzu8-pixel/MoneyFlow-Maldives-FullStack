 "use client";
import {useState} from "react";
export default function Bills(){
 const [file,setFile]=useState<File|null>(null),[preview,setPreview]=useState(""),[msg,setMsg]=useState("");
 function choose(e:any){const f=e.target.files?.[0];if(!f)return;setFile(f);setPreview(URL.createObjectURL(f));setMsg("Bill captured. Review the extracted details before saving.");}
 return <main className="shell">
  <header className="nav"><div className="logo">Money<span>Flow</span></div><a className="btn" href="/dashboard">← Dashboard</a></header>
  <div className="card" style={{marginTop:25}}>
   <div className="muted">Bill scanner</div><h1>Scan a bill or receipt</h1>
   <p className="muted">Upload a photo/PDF or use your phone camera. MoneyFlow can prepare merchant, date, total, GST and category fields for review.</p>
   <label className="btn primary" style={{cursor:"pointer",display:"inline-block"}}>📷 Scan / Upload<input type="file" accept="image/*,.pdf" capture="environment" onChange={choose} style={{display:"none"}}/></label>
   {file&&<div style={{marginTop:20}}><b>{file.name}</b>{preview&&file.type.startsWith("image/")&&<img src={preview} style={{display:"block",maxWidth:"100%",maxHeight:320,marginTop:12,borderRadius:14}}/>}<div className="features" style={{marginTop:18}}>
    <div className="feature"><span className="muted">Merchant</span><h3>RedWave Supermart</h3></div>
    <div className="feature"><span className="muted">Total</span><h3>MVR 450.00</h3></div>
    <div className="feature"><span className="muted">GST</span><h3>MVR 36.00</h3></div>
   </div><button className="btn primary" onClick={()=>setMsg("Saved to Bills. In production, OCR results will be stored with the original file in secure cloud storage.")}>Save bill</button></div>}
   {msg&&<p style={{marginTop:18,color:"#1677ff"}}>{msg}</p>}
  </div>
 </main>
}