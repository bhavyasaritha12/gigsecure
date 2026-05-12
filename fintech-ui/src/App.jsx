import { useState } from "react";

const C = {
  purple:      "#7B2FBE",
  purpleLight: "#9B4FDE",
  lavender:    "#F0EBF8",
  lavenderMid: "#E4D9F2",
  white:       "#FFFFFF",
  dark:        "#1A1A2E",
  text:        "#1A1A2E",
  textMuted:   "#666680",
  textLight:   "#999AB0",
  inputBg:     "#EDE8F5",
  border:      "#DDD5EC",
};

const plans = [
  { id:1, num:"01", name:"Basic Shield",   type:"Accident",    coverage:"₹50,000",   premium:"₹99/mo",  icon:"🛡️" },
  { id:2, num:"02", name:"Health Guard",   type:"Health",      coverage:"₹1,00,000", premium:"₹199/mo", icon:"🏥" },
  { id:3, num:"03", name:"Life Secure",    type:"Life",        coverage:"₹5,00,000", premium:"₹299/mo", icon:"❤️" },
  { id:4, num:"04", name:"Income Protect", type:"Income Loss", coverage:"₹2,00,000", premium:"₹149/mo", icon:"💼" },
];

const PurpleBtn = ({ children, onClick, style = {}, outline = false }) => (
  <button onClick={onClick} style={{
    background: outline ? "transparent" : C.purple,
    color: outline ? C.purple : C.white,
    border: `2px solid ${C.purple}`,
    padding: "12px 28px", borderRadius: 6,
    fontFamily: "'Inter', sans-serif", fontWeight: 700,
    fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
    cursor: "pointer", transition: "all 0.2s", ...style
  }}>{children}</button>
);

function DField({ label, value, setter, type = "text", placeholder = "" }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{label}</label>
      <input type={type} value={value}
        onChange={e => setter(type === "number" ? Number(e.target.value) : e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }}
      />
    </div>
  );
}

// ── NAV PAGE MODAL ────────────────────────────────────────────────────────────
function NavModal({ page, onClose }) {
  const content = {
    Home: {
      title: "Welcome to GigSecure",
      subtitle: "Insurance built for the gig economy",
      body: (
        <div>
          <div style={{ background: `linear-gradient(135deg, ${C.dark}, #2d1b6e)`, borderRadius: 14, padding: 32, marginBottom: 24, color: C.white }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🛡️</div>
            <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 10 }}>What is GigSecure?</h3>
            <p style={{ color: "#bbb", lineHeight: 1.7, fontSize: 14 }}>
              GigSecure is India's first micro-insurance platform built exclusively for gig workers — delivery partners, cab drivers, freelancers, and daily wage earners. We offer affordable, flexible insurance plans starting from just ₹99/month.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
            {[
              { icon: "⚡", title: "Instant Coverage", desc: "Get covered in under 2 minutes with zero paperwork" },
              { icon: "💰", title: "₹99/month", desc: "Micro-plans designed to fit gig worker budgets" },
              { icon: "📱", title: "Digital First", desc: "Manage everything from your phone, anytime" },
              { icon: "🤝", title: "Fast Claims", desc: "AI-powered claims processing in 24–48 hours" },
            ].map((f, i) => (
              <div key={i} style={{ background: C.lavender, borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
                <div style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.purple + "11", border: `1px solid ${C.purple}33`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, color: C.purple }}>📊 By the Numbers</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[["50,000+", "Gig Workers Protected"], ["₹2Cr+", "Claims Settled"], ["4.8★", "App Rating"]].map(([v, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 900, fontSize: 20, color: C.purple }}>{v}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    About: {
      title: "About GigSecure",
      subtitle: "Our mission, story & team",
      body: (
        <div>
          <div style={{ background: `linear-gradient(135deg, ${C.dark}, #2d1b6e)`, borderRadius: 14, padding: 32, marginBottom: 24, color: C.white }}>
            <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Our Story</h3>
            <p style={{ color: "#bbb", lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
              Founded in 2024 by the Neural Nexas team in Hyderabad, GigSecure was born from a simple observation: millions of gig workers in India risk their livelihoods every day without any financial safety net.
            </p>
            <p style={{ color: "#bbb", lineHeight: 1.8, fontSize: 14 }}>
              We built a platform that treats gig workers as first-class citizens — not afterthoughts — with insurance products designed around their real lives and real incomes.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Our Core Values</div>
            {[
              { icon: "🎯", title: "Accessibility", desc: "Insurance should be for everyone, not just the salaried class. We price plans at ₹99–₹299/month so any gig worker can afford protection." },
              { icon: "🔍", title: "Transparency", desc: "No hidden clauses. No fine print traps. Every policy is written in plain language so you know exactly what you're covered for." },
              { icon: "🚀", title: "Innovation", desc: "We use AI for smart plan recommendations and faster claim processing — technology that works for the worker, not against them." },
            ].map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, padding: 18, background: C.lavender, borderRadius: 12 }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: C.purple + "11", border: `1px solid ${C.purple}33`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 10, color: C.purple }}>🏆 Built by Neural Nexas Team</div>
            <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.6 }}>A passionate group of engineers, designers, and insurance experts based in Hyderabad, Telangana — dedicated to financial inclusion for India's gig workforce.</p>
          </div>
        </div>
      )
    },
    Services: {
      title: "Our Services",
      subtitle: "Micro-insurance plans made for gig workers",
      body: (
        <div>
          <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            GigSecure offers four tailored insurance plan types, each designed to address the unique risks that gig workers face every day. Mix and match to build your perfect coverage.
          </p>
          {[
            { icon: "🛡️", num: "01", name: "Accident Protection Plans", color: "#e53e3e", coverage: "₹50,000", premium: "₹99/mo", desc: "Comprehensive accident coverage specifically designed for gig workers. Covers road accidents, workplace injuries, and disability. No medical history required. Instant policy issuance.", features: ["Road accident coverage", "Workplace injury protection", "Temporary disability benefit", "Ambulance cost reimbursement"] },
            { icon: "🏥", num: "02", name: "Health Coverage Options", color: "#3182ce", coverage: "₹1,00,000", premium: "₹199/mo", desc: "Affordable health insurance covering hospitalization, surgeries, and outpatient treatment. Includes a wide network of cashless hospitals across India.", features: ["Cashless hospitalization", "Pre & post hospitalization cover", "Day care procedures", "Free annual health check-up"] },
            { icon: "❤️", num: "03", name: "Life Secure Plans", color: C.purple, coverage: "₹5,00,000", premium: "₹299/mo", desc: "Term life insurance with high coverage at low premiums. Secure your family's financial future even on a gig worker's income.", features: ["Term life coverage", "Accidental death benefit", "Nominee claim within 48 hours", "No medical tests up to ₹5L"] },
            { icon: "💼", num: "04", name: "Income Protection Plans", color: "#b7791f", coverage: "₹2,00,000", premium: "₹149/mo", desc: "If illness or injury stops you from working, we replace your income so you can focus on recovery without financial stress.", features: ["Monthly income replacement", "Job loss due to injury covered", "Up to 12 months benefit period", "Covers freelance & gig income"] },
          ].map((s, i) => (
            <div key={i} style={{ borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 20 }}>
              <div style={{ background: C.dark, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 28 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#ffffff55", fontSize: 13, fontWeight: 700 }}>{s.num}.</div>
                  <div style={{ color: C.white, fontWeight: 800, fontSize: 16 }}>{s.name}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#aaa", fontSize: 11 }}>from</div>
                  <div style={{ color: s.color, fontWeight: 900, fontSize: 18 }}>{s.premium}</div>
                </div>
              </div>
              <div style={{ padding: "20px 24px", background: C.white }}>
                <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{s.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  {s.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: C.text }}>
                      <span style={{ color: C.purple, fontWeight: 900 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: "10px 16px", background: C.lavender, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: C.textMuted }}>Coverage up to</span>
                  <span style={{ fontWeight: 900, color: C.purple, fontSize: 16 }}>{s.coverage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    Blog: {
      title: "GigSecure Blog",
      subtitle: "Insights, tips & updates for gig workers",
      body: (
        <div>
          {[
            { date: "May 12, 2026", tag: "GUIDE", title: "Crafting Captivating Coverage: What Every Gig Worker Must Know About Insurance", excerpt: "The gig economy is booming in India — but are gig workers protected? This comprehensive guide covers everything from choosing the right plan to filing your first claim quickly and without hassle.", readTime: "5 min read", img: "🚗" },
            { date: "May 8, 2026", tag: "NEWS", title: "The Art of Drawing Readers In: GigSecure Expands to 50 New Cities", excerpt: "GigSecure is now available to gig workers across Tier-2 and Tier-3 cities in India. Find out what this means for delivery partners and freelancers outside the metros.", readTime: "3 min read", img: "🏙️" },
            { date: "May 1, 2026", tag: "TIP", title: "Mastering the First Impression: How to Choose Your First Insurance Plan", excerpt: "Buying insurance for the first time can feel overwhelming. We break it down into simple steps so you can get covered confidently, without overspending.", readTime: "4 min read", img: "💡" },
            { date: "Apr 22, 2026", tag: "STORY", title: "How One Delivery Partner Used GigSecure to Recover After an Accident", excerpt: "Rajesh, a Zomato delivery partner from Pune, shares how a ₹99/month Basic Shield plan covered his hospitalization and helped him get back on the road.", readTime: "6 min read", img: "⭐" },
          ].map((post, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden", marginBottom: 18 }}>
              <div style={{ background: `linear-gradient(135deg, ${C.dark}, #2d1b6e)`, padding: "24px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 36 }}>{post.img}</div>
                <div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                    <span style={{ background: C.purple, color: C.white, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 4, letterSpacing: 1 }}>{post.tag}</span>
                    <span style={{ color: "#888", fontSize: 11 }}>{post.date}</span>
                  </div>
                  <div style={{ color: C.white, fontWeight: 800, fontSize: 15, lineHeight: 1.3 }}>{post.title}</div>
                </div>
              </div>
              <div style={{ padding: "16px 24px" }}>
                <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: C.textLight, fontSize: 11 }}>⏱ {post.readTime}</span>
                  <span style={{ color: C.purple, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>READ MORE →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    Contact: {
      title: "Contact Us",
      subtitle: "Get in touch with GigSecure for support",
      body: (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[
              { num: "01", label: "Address", value: "Hyderabad, Telangana, India", icon: "📍" },
              { num: "02", label: "Call Us", value: "202-555-0188", icon: "📞" },
              { num: "03", label: "Email", value: "contact@gigsecure.in", icon: "✉️" },
              { num: "04", label: "Social Media", value: "Facebook · Twitter · Instagram · LinkedIn", icon: "🌐" },
            ].map((c, i) => (
              <div key={i} style={{ background: C.lavender, borderRadius: 12, padding: 18 }}>
                <div style={{ color: C.purple, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>{c.num}</div>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{c.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{c.label}</div>
                <div style={{ color: C.textMuted, fontSize: 12 }}>{c.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.border}`, padding: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Reach Out</div>
            <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 20 }}>We're here to help you with any questions or concerns regarding our micro-insurance solutions.</p>
            {[["First Name", "text"], ["Last Name", "text"], ["Email", "email"]].map(([lbl, tp]) => (
              <div key={lbl} style={{ marginBottom: 14 }}>
                <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{lbl} <span style={{ color: "red" }}>*</span></label>
                <input type={tp} placeholder={lbl} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
            ))}
            <div style={{ marginBottom: 14 }}>
              <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Message</label>
              <textarea placeholder="Your message..." rows={4} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} />
            </div>
            <PurpleBtn style={{ width: "100%", padding: "13px", fontSize: 14, borderRadius: 8 }}>SUBMIT →</PurpleBtn>
          </div>
        </div>
      )
    }
  };

  const c = content[page];
  if (!c) return null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 999, display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", padding: "40px 20px" }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 640, boxShadow: "0 24px 80px rgba(0,0,0,0.3)", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, #2d1b6e 100%)`, padding: "28px 32px", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.1)", border: "none", color: C.white, width: 32, height: 32, borderRadius: 8, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          <div style={{ color: C.purple, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>GigSecure Portal</div>
          <h2 style={{ color: C.white, fontSize: 26, fontWeight: 900, margin: "0 0 4px" }}>{c.title}</h2>
          <p style={{ color: "#aaa", fontSize: 13 }}>{c.subtitle}</p>
        </div>
        {/* Body */}
        <div style={{ padding: "28px 32px", maxHeight: "65vh", overflowY: "auto" }}>
          {c.body}
        </div>
      </div>
    </div>
  );
}

// ── BUY PLAN MODAL ────────────────────────────────────────────────────────────
function BuyPlanModal({ plan, onClose, onPaid }) {
  const [step, setStep] = useState("confirm"); // confirm | payment | success
  const [payMethod, setPayMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
      if (onPaid) onPaid(plan);
    }, 2000);
  };

  if (step === "success") return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 440, padding: 48, textAlign: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }} onClick={e => e.stopPropagation()}>
        <div style={{ width: 80, height: 80, background: "#00C89622", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, margin: "0 auto 20px" }}>✅</div>
        <h2 style={{ fontWeight: 900, fontSize: 26, color: "#00A876", marginBottom: 8 }}>Payment Successful!</h2>
        <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
          Your <strong style={{ color: C.text }}>{plan.name}</strong> policy is now active.<br />You are covered starting today!
        </p>
        <div style={{ background: C.lavender, borderRadius: 12, padding: 20, marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, textAlign: "left" }}>
            {[
              ["Plan", plan.name],
              ["Type", plan.type],
              ["Coverage", plan.coverage],
              ["Premium", plan.premium],
              ["Policy ID", `POL-${Date.now().toString().slice(-6)}`],
              ["Status", "✅ Active"],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: k === "Status" ? "#00A876" : C.text }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <PurpleBtn onClick={onClose} style={{ width: "100%", padding: "13px", fontSize: 14, borderRadius: 8 }}>CLOSE</PurpleBtn>
      </div>
    </div>
  );

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 460, boxShadow: "0 24px 80px rgba(0,0,0,0.3)", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ background: `linear-gradient(135deg, ${C.dark}, #2d1b6e)`, padding: "24px 28px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 32 }}>{plan.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#aaa", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>{step === "confirm" ? "Confirm Purchase" : "Payment"}</div>
            <div style={{ color: C.white, fontWeight: 900, fontSize: 18 }}>{plan.name}</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: C.white, width: 32, height: 32, borderRadius: 8, fontSize: 18, cursor: "pointer" }}>×</button>
        </div>

        <div style={{ padding: 28 }}>
          {step === "confirm" && (
            <>
              {/* Plan Summary */}
              <div style={{ background: C.lavender, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 12 }}>Plan Summary</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    ["Plan Type", plan.type],
                    ["Coverage", plan.coverage],
                    ["Monthly Premium", plan.premium],
                    ["Start Date", "Today"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{k}</div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: C.purple + "11", border: `1px solid ${C.purple}33`, borderRadius: 10, padding: 14, marginBottom: 24, fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>
                ℹ️ By purchasing this plan, you agree to GigSecure's terms and conditions. Coverage starts immediately upon successful payment.
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <PurpleBtn outline onClick={onClose} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8 }}>CANCEL</PurpleBtn>
                <PurpleBtn onClick={() => setStep("payment")} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8 }}>BUY NOW →</PurpleBtn>
              </div>
            </>
          )}

          {step === "payment" && (
            <>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Choose Payment Method</div>
              {/* Payment method tabs */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {[["upi", "📲 UPI"], ["card", "💳 Card"], ["netbanking", "🏦 Net Banking"]].map(([id, label]) => (
                  <button key={id} onClick={() => setPayMethod(id)} style={{
                    flex: 1, padding: "10px 6px", borderRadius: 8, border: `2px solid ${payMethod === id ? C.purple : C.border}`,
                    background: payMethod === id ? C.purple + "11" : C.white, color: payMethod === id ? C.purple : C.textMuted,
                    fontWeight: 700, fontSize: 11, cursor: "pointer", fontFamily: "inherit"
                  }}>{label}</button>
                ))}
              </div>

              {payMethod === "upi" && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 8 }}>UPI ID</label>
                  <input value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="yourname@upi"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                  <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["@okaxis", "@paytm", "@ybl", "@oksbi"].map(suffix => (
                      <span key={suffix} onClick={() => setUpiId(prev => prev.split("@")[0] + suffix)} style={{ background: C.lavender, color: C.purple, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20, cursor: "pointer" }}>{suffix}</span>
                    ))}
                  </div>
                </div>
              )}

              {payMethod === "card" && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Card Number</label>
                    <input value={cardNum} onChange={e => setCardNum(e.target.value)} placeholder="1234 5678 9012 3456" maxLength={19}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Cardholder Name</label>
                    <input value={cardName} onChange={e => setCardName(e.target.value)} placeholder="Name on card"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Expiry</label>
                      <input value={cardExpiry} onChange={e => setCardExpiry(e.target.value)} placeholder="MM/YY" maxLength={5}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                    <div>
                      <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>CVV</label>
                      <input value={cardCvv} onChange={e => setCardCvv(e.target.value)} placeholder="•••" maxLength={3} type="password"
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                  </div>
                </div>
              )}

              {payMethod === "netbanking" && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 10 }}>Select Your Bank</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Yes Bank"].map(bank => (
                      <button key={bank} style={{ padding: "10px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.lavender, color: C.text, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>{bank}</button>
                    ))}
                  </div>
                </div>
              )}

              {/* Amount due */}
              <div style={{ background: C.lavender, borderRadius: 10, padding: "14px 16px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>Amount Due</span>
                <span style={{ fontWeight: 900, fontSize: 20, color: C.purple }}>{plan.premium}</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <PurpleBtn outline onClick={() => setStep("confirm")} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8 }}>← BACK</PurpleBtn>
                <PurpleBtn onClick={handlePay} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8, opacity: processing ? 0.7 : 1 }}>
                  {processing ? "⟳ PROCESSING..." : "PAY NOW →"}
                </PurpleBtn>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── LANDING ──────────────────────────────────────────────────────────────────
function LandingPage({ goLogin }) {
  const [navModal, setNavModal] = useState(null);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: C.text, background: C.white }}>
      {navModal && <NavModal page={navModal} onClose={() => setNavModal(null)} />}

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", background: C.dark, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ color: C.white, fontWeight: 900, fontSize: 22 }}>GigSecure</div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Home", "About", "Services", "Blog", "Contact"].map(n => (
            <span key={n} onClick={() => setNavModal(n)} style={{ color: "#bbb", fontSize: 13, cursor: "pointer", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.white}
              onMouseLeave={e => e.target.style.color = "#bbb"}
            >{n}</span>
          ))}
        </div>
        <PurpleBtn onClick={goLogin} style={{ padding: "9px 22px", fontSize: 12 }}>Login / Sign Up</PurpleBtn>
      </nav>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(rgba(26,26,46,0.75),rgba(26,26,46,0.85)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400') center/cover",
        minHeight: 520, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 40px"
      }}>
        <div style={{ color: "#ccc", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>PROTECTING YOUR GIG</div>
        <h1 style={{ color: C.white, fontSize: 50, fontWeight: 900, lineHeight: 1.15, maxWidth: 680, margin: "0 0 20px" }}>
          Insurance for Gig Workers,<br />Peace of Mind
        </h1>
        <p style={{ color: "#ccc", fontSize: 15, maxWidth: 540, lineHeight: 1.7, margin: "0 0 36px" }}>
          Stay secure with GigSecure's flexible micro-insurance plans designed solely for gig workers,
          ensuring financial protection when you need it most.
        </p>
        <PurpleBtn onClick={goLogin} style={{ fontSize: 14, padding: "14px 44px", letterSpacing: 2 }}>LOGIN / SIGN UP</PurpleBtn>
      </div>

      {/* WHO WE ARE */}
      <div style={{ background: C.lavender, padding: "64px 48px" }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ color: C.purple, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>WHO WE ARE</div>
          <h2 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.2, marginBottom: 18 }}>Empowering Gig Workers<br />with Insurance</h2>
          <p style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.6, marginBottom: 14 }}>GigSecure is a modern insurance platform dedicated to the unique needs of gig workers.</p>
          <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
            Our platform offers tailored micro-insurance solutions that protect delivery partners, freelancers, drivers,
            and daily wage earners. With a focus on affordability and accessibility, GigSecure provides innovative
            policies that stand out in the market.
          </p>
          <PurpleBtn outline onClick={() => setNavModal("About")} style={{ padding: "10px 24px", fontSize: 12 }}>LEARN MORE</PurpleBtn>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ background: C.white, padding: "64px 48px" }}>
        <div style={{ color: C.purple, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>OUR SERVICES</div>
        <h2 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>Micro-Insurance Plans Made Easy</h2>
        <p style={{ color: C.textMuted, fontSize: 14, marginBottom: 36 }}>Flexible coverage options tailored for gig workers.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {plans.map(plan => (
            <div key={plan.id} style={{ borderRadius: 16, background: `linear-gradient(rgba(26,26,46,0.68),rgba(26,26,46,0.78)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600') center/cover`, padding: "32px 28px", color: C.white, minHeight: 190 }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#ffffff55" }}>{plan.num}.</div>
              <div style={{ width: 40, height: 3, background: C.purple, margin: "8px 0 10px" }} />
              <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 6 }}>{plan.icon} {plan.name}</div>
              <div style={{ fontSize: 12, color: "#bbb", marginBottom: 14 }}>Coverage up to {plan.coverage}</div>
              <span onClick={() => setNavModal("Services")} style={{ color: C.purple, fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>LEARN MORE</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={{ background: C.white, padding: "64px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: C.purple, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>WHY CHOOSE US</div>
          <h2 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10 }}>Discover Our Unique Benefits<br />for Gig Workers</h2>
        </div>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          {[
            { n: "01", title: "Tailored Insurance Plans", desc: "Customizable plans specifically designed for the dynamic needs of gig workers — pay only for what you need." },
            { n: "02", title: "Affordable Coverage Options", desc: "Our micro-insurance approach lets you access comprehensive protection without burdening your budget." },
            { n: "03", title: "Instant Access & Support", desc: "Get immediate coverage and customer support right when you need it, through our user-friendly platform." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <div style={{ color: C.purple, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>{item.n}</div>
              <div style={{ height: 1, background: C.border, marginBottom: 14 }} />
              <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: C.dark, padding: "72px 48px", textAlign: "center" }}>
        <div style={{ color: "#888", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>JOIN THE GIGSECURE COMMUNITY</div>
        <h2 style={{ color: C.white, fontSize: 42, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Protect Your Gig Work<br />Today—Sign Up Now!</h2>
        <p style={{ color: "#999", fontSize: 14, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Experience the peace of mind that comes with tailored insurance solutions designed for gig workers like you.
        </p>
        <PurpleBtn onClick={goLogin} style={{ fontSize: 14, padding: "14px 48px", letterSpacing: 2 }}>GET STARTED</PurpleBtn>
      </div>

      <div style={{ background: "#111", padding: "22px 48px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "#555", fontSize: 12 }}>© 2026 GigSecure · Neural Nexas Team · Hyderabad, Telangana, India</div>
        <div style={{ color: C.purple, fontSize: 12 }}>contact@example.com</div>
      </div>
    </div>
  );
}

// ── AUTH ──────────────────────────────────────────────────────────────────────
function AuthPage({ goHome, goDashboard }) {
  const [tab, setTab]   = useState("login");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", workType: "delivery" });
  const [error, setError] = useState("");

  const handle = () => {
    if (!form.email || !form.password) { setError("Please fill all required fields."); return; }
    goDashboard(form.name || "Ravi Kumar");
  };

  return (
    <div style={{ minHeight: "100vh", background: C.lavender, fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ background: C.dark, padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: C.white, fontWeight: 900, fontSize: 20 }}>GigSecure</div>
        <span onClick={goHome} style={{ color: "#aaa", fontSize: 13, cursor: "pointer" }}>← Back to Home</span>
      </nav>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 20px" }}>
        <div style={{ background: C.white, borderRadius: 16, padding: "40px 44px", width: "100%", maxWidth: 420, boxShadow: "0 8px 40px rgba(123,47,190,0.12)" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ width: 52, height: 52, background: C.purple, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 12px" }}>🛡️</div>
            <div style={{ fontWeight: 900, fontSize: 22, color: C.text }}>GigSecure</div>
            <div style={{ color: C.textMuted, fontSize: 12, marginTop: 4 }}>Micro-Insurance for Gig Workers</div>
          </div>

          <div style={{ display: "flex", background: C.lavender, borderRadius: 8, padding: 4, marginBottom: 28 }}>
            {["login", "register"].map(t => (
              <button key={t} onClick={() => { setTab(t); setError(""); }} style={{
                flex: 1, padding: "9px 0", borderRadius: 6, border: "none",
                background: tab === t ? C.purple : "transparent",
                color: tab === t ? C.white : C.textMuted,
                fontWeight: 700, fontSize: 13, cursor: "pointer",
                textTransform: "capitalize", transition: "all 0.2s", fontFamily: "inherit"
              }}>{t === "login" ? "Login" : "Register"}</button>
            ))}
          </div>

          {tab === "register" && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Full Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Ravi Kumar"
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Phone Number</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210"
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Work Type</label>
                <select value={form.workType} onChange={e => setForm({ ...form, workType: e.target.value })}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                  <option value="delivery">Delivery Partner (Swiggy/Zomato)</option>
                  <option value="driver">Cab Driver (Uber/Ola)</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="construction">Construction Worker</option>
                  <option value="domestic">Domestic Worker</option>
                </select>
              </div>
            </>
          )}
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Email Address <span style={{ color: "red" }}>*</span></label>
            <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com"
              style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Password <span style={{ color: "red" }}>*</span></label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••"
              style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
          </div>

          {error && <div style={{ color: "#e53e3e", fontSize: 12, marginBottom: 12 }}>{error}</div>}

          <PurpleBtn onClick={handle} style={{ width: "100%", padding: "13px", fontSize: 14, borderRadius: 8, marginBottom: 16 }}>
            {tab === "login" ? "LOGIN →" : "CREATE ACCOUNT →"}
          </PurpleBtn>
          <div style={{ textAlign: "center", fontSize: 12, color: C.textMuted }}>
            {tab === "login"
              ? <span>Don't have an account? <span onClick={() => setTab("register")} style={{ color: C.purple, cursor: "pointer", fontWeight: 700 }}>Register</span></span>
              : <span>Already have an account? <span onClick={() => setTab("login")} style={{ color: C.purple, cursor: "pointer", fontWeight: 700 }}>Login</span></span>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard({ userName, goHome }) {
  const [active, setActive] = useState("dashboard");
  const navItems = [
    { id: "dashboard",  label: "Dashboard",      icon: "◈" },
    { id: "plans",      label: "Insurance Plans", icon: "◉" },
    { id: "calculator", label: "Premium Calc",    icon: "◎" },
    { id: "ai",         label: "AI Recommend",    icon: "✦" },
    { id: "claims",     label: "Submit Claim",    icon: "◐" },
    { id: "policies",   label: "My Policies",     icon: "◑" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <aside style={{ width: 228, background: C.dark, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "24px 22px 18px", borderBottom: "1px solid #ffffff15" }}>
          <div style={{ color: C.white, fontWeight: 900, fontSize: 20 }}>GigSecure</div>
          <div style={{ color: C.purple, fontSize: 10, letterSpacing: 2, marginTop: 3, textTransform: "uppercase" }}>Portal · Neural Nexas</div>
        </div>
        <nav style={{ flex: 1, padding: "14px 12px" }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setActive(item.id)} style={{
              display: "flex", alignItems: "center", gap: 10, width: "100%",
              padding: "10px 12px", borderRadius: 8, border: "none",
              background: active === item.id ? C.purple : "transparent",
              color: active === item.id ? C.white : "#8899BB",
              fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600,
              cursor: "pointer", marginBottom: 3, textAlign: "left", transition: "all 0.2s"
            }}>
              <span>{item.icon}</span>{item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px 22px", borderTop: "1px solid #ffffff15" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.purple, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 800, fontSize: 15 }}>
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ color: C.white, fontSize: 13, fontWeight: 700 }}>{userName}</div>
              <div style={{ color: "#00C896", fontSize: 11 }}>● Active Policy</div>
            </div>
          </div>
          <button onClick={goHome} style={{ width: "100%", padding: "7px", background: "transparent", border: "1px solid #ffffff22", borderRadius: 6, color: "#8899BB", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>← Back to Home</button>
        </div>
      </aside>

      <main style={{ flex: 1, background: C.lavender, overflowY: "auto" }}>
        <div style={{ background: C.white, padding: "16px 36px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: C.text }}>{navItems.find(n => n.id === active)?.label}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00C896" }} />
            <span style={{ fontSize: 12, color: C.textMuted }}>All systems active</span>
          </div>
        </div>
        <div style={{ padding: "32px 36px" }}>
          {active === "dashboard"  && <DBHome userName={userName} />}
          {active === "plans"      && <DBPlans />}
          {active === "calculator" && <DBCalc />}
          {active === "ai"         && <DBAI />}
          {active === "claims"     && <DBClaims />}
          {active === "policies"   && <DBPolicies />}
        </div>
      </main>
    </div>
  );
}

function DBHome({ userName }) {
  const stats = [
    { label: "Active Plans",   value: "2",     color: C.purple },
    { label: "Total Coverage", value: "₹1.5L", color: "#2B6CB0" },
    { label: "Claims Filed",   value: "1",     color: "#C53030" },
    { label: "Next Premium",   value: "Jun 1", color: "#B7791F" },
  ];
  return (
    <div>
      <h2 style={{ fontWeight: 900, fontSize: 24, marginBottom: 4 }}>Welcome back, {userName} 👋</h2>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 28 }}>Here's your insurance overview for May 2026</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: C.white, borderRadius: 12, padding: "20px", borderTop: `3px solid ${s.color}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <div style={{ color: s.color, fontSize: 26, fontWeight: 900, marginBottom: 4 }}>{s.value}</div>
            <div style={{ color: C.textMuted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: C.white, borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 16 }}>Active Policies</div>
          {["Basic Shield — Accident", "Health Guard — Health"].map((p, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
              <span style={{ color: C.textMuted, fontSize: 13 }}>{p}</span>
              <span style={{ background: C.purple + "22", color: C.purple, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>Active</span>
            </div>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 16 }}>Recent Activity</div>
          {[
            { text: "Premium paid — Basic Shield",   time: "2 days ago",  dot: "#00C896" },
            { text: "Claim submitted — Medical",     time: "1 week ago",  dot: "#F6AD55" },
            { text: "Policy renewed — Health Guard", time: "1 month ago", dot: C.purple },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.dot, marginTop: 4, flexShrink: 0 }} />
              <div>
                <div style={{ color: C.textMuted, fontSize: 12 }}>{a.text}</div>
                <div style={{ color: C.textLight, fontSize: 11 }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DBPlans() {
  const [buyModal, setBuyModal] = useState(null);
  const [paid, setPaid]         = useState([]);

  return (
    <>
      {buyModal && (
        <BuyPlanModal
          plan={buyModal}
          onClose={() => setBuyModal(null)}
          onPaid={plan => { setPaid(p => [...p, plan.id]); }}
        />
      )}
      <div>
        <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 4 }}>Insurance Plans</h2>
        <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 28 }}>Affordable plans tailored for gig workers</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {plans.map(plan => (
            <div key={plan.id} style={{ background: C.white, borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
              <div style={{ background: C.dark, padding: "24px 24px 20px" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#ffffff44" }}>{plan.num}.</div>
                <div style={{ width: 40, height: 3, background: C.purple, margin: "8px 0 10px" }} />
                <div style={{ color: C.white, fontWeight: 800, fontSize: 17 }}>{plan.icon} {plan.name}</div>
                <div style={{ color: "#aaa", fontSize: 12, marginTop: 4 }}>{plan.type}</div>
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                  <div><div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Coverage</div><div style={{ fontWeight: 800, fontSize: 16 }}>{plan.coverage}</div></div>
                  <div style={{ textAlign: "right" }}><div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Premium</div><div style={{ fontWeight: 800, fontSize: 16, color: C.purple }}>{plan.premium}</div></div>
                </div>
                {paid.includes(plan.id)
                  ? <div style={{ width: "100%", padding: "11px", fontSize: 13, borderRadius: 8, background: "#00C89622", color: "#00A876", fontWeight: 800, textAlign: "center", border: `1px solid #00C89644` }}>✅ Active Plan</div>
                  : <PurpleBtn onClick={() => setBuyModal(plan)} style={{ width: "100%", padding: "11px", fontSize: 13, borderRadius: 8 }}>BUY NOW →</PurpleBtn>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DBCalc() {
  const [age, setAge]       = useState(28);
  const [income, setIncome] = useState(15000);
  const [type, setType]     = useState("delivery");
  const [result, setResult] = useState(null);
  const calc = () => {
    const base = type === "delivery" ? 120 : type === "driver" ? 150 : 100;
    const af = age > 40 ? 1.3 : age > 30 ? 1.1 : 1.0;
    const inf = income < 10000 ? 0.8 : income < 20000 ? 1.0 : 1.2;
    setResult(Math.round(base * af * inf));
  };
  return (
    <div style={{ maxWidth: 480 }}>
      <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 4 }}>Premium Calculator</h2>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 24 }}>Get your estimated monthly premium instantly</p>
      <div style={{ background: C.white, borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <DField label="Age" value={age} setter={setAge} type="number" />
        <DField label="Monthly Income (₹)" value={income} setter={setIncome} type="number" />
        <div style={{ marginBottom: 20 }}>
          <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>Work Type</label>
          <select value={type} onChange={e => setType(e.target.value)}
            style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", fontFamily: "inherit" }}>
            <option value="delivery">Delivery Partner</option>
            <option value="driver">Cab Driver</option>
            <option value="freelancer">Freelancer</option>
          </select>
        </div>
        <PurpleBtn onClick={calc} style={{ width: "100%", padding: "13px", borderRadius: 8, fontSize: 14 }}>CALCULATE PREMIUM</PurpleBtn>
        {result && (
          <div style={{ marginTop: 20, background: C.lavender, borderRadius: 10, padding: 20, textAlign: "center", border: `1px solid ${C.purple}44` }}>
            <div style={{ color: C.textMuted, fontSize: 12, marginBottom: 4 }}>Estimated Monthly Premium</div>
            <div style={{ color: C.purple, fontSize: 36, fontWeight: 900 }}>₹{result}</div>
            <div style={{ color: C.textMuted, fontSize: 11, marginTop: 4 }}>Coverage up to ₹1,00,000</div>
          </div>
        )}
      </div>
    </div>
  );
}

function DBAI() {
  const [age, setAge]     = useState("");
  const [income, setIncome] = useState("");
  const [risk, setRisk]   = useState("medium");
  const [loading, setLoading] = useState(false);
  const [rec, setRec]     = useState(null);
  const run = () => {
    if (!age || !income) return;
    setLoading(true); setRec(null);
    setTimeout(() => {
      const n = Number(income);
      let r = n < 15000 ? [plans[0]] : n < 30000 ? [plans[0], plans[1]] : [plans[1], plans[2]];
      if (risk === "high") r = [plans[2], plans[3]];
      setRec(r); setLoading(false);
    }, 1800);
  };
  return (
    <div style={{ maxWidth: 500 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <span style={{ background: C.purple, color: C.white, borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>AI ENGINE</span>
        <h2 style={{ fontWeight: 900, fontSize: 22, margin: 0 }}>Smart Recommendation</h2>
      </div>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 24 }}>Powered by Python · Scikit-learn</p>
      <div style={{ background: C.white, borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 16 }}>
        <DField label="Age" value={age} setter={setAge} placeholder="e.g. 27" />
        <DField label="Monthly Income (₹)" value={income} setter={setIncome} placeholder="e.g. 18000" />
        <div style={{ marginBottom: 24 }}>
          <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 8 }}>Risk Level</label>
          <div style={{ display: "flex", gap: 8 }}>
            {["low", "medium", "high"].map(r => (
              <button key={r} onClick={() => setRisk(r)} style={{
                flex: 1, padding: "9px", borderRadius: 8,
                border: `2px solid ${risk === r ? C.purple : C.border}`,
                background: risk === r ? C.purple : C.white,
                color: risk === r ? C.white : C.textMuted,
                fontWeight: 700, fontSize: 12, cursor: "pointer", textTransform: "capitalize", fontFamily: "inherit"
              }}>{r}</button>
            ))}
          </div>
        </div>
        <PurpleBtn onClick={run} style={{ width: "100%", padding: "13px", borderRadius: 8, fontSize: 14, opacity: loading ? 0.7 : 1 }}>
          {loading ? "⟳ ANALYZING..." : "✦ GET AI RECOMMENDATION"}
        </PurpleBtn>
      </div>
      {rec && (
        <div style={{ background: C.white, borderRadius: 14, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: `1px solid ${C.purple}44` }}>
          <div style={{ color: C.purple, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>✦ Recommended Plans</div>
          {rec.map(plan => (
            <div key={plan.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontSize: 20 }}>{plan.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{plan.name}</div>
                  <div style={{ color: C.textMuted, fontSize: 11 }}>{plan.type} · {plan.coverage}</div>
                </div>
              </div>
              <div style={{ color: C.purple, fontWeight: 900, fontSize: 16 }}>{plan.premium}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DBClaims() {
  const [form, setForm] = useState({ policy: "", reason: "", amount: "", date: "" });
  const [done, setDone] = useState(false);
  if (done) return (
    <div style={{ textAlign: "center", paddingTop: 60 }}>
      <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
      <h2 style={{ fontWeight: 900, fontSize: 24, color: C.purple, marginBottom: 8 }}>Claim Submitted!</h2>
      <p style={{ color: C.textMuted, marginBottom: 6 }}>Claim ID: <strong>CLM-{Date.now().toString().slice(-6)}</strong></p>
      <p style={{ color: C.textLight, fontSize: 12, marginBottom: 24 }}>AI verification in progress · 24–48 hours</p>
      <span style={{ background: C.purple + "22", color: C.purple, padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>Under Review</span>
      <div style={{ marginTop: 24 }}><PurpleBtn outline onClick={() => { setDone(false); setForm({ policy: "", reason: "", amount: "", date: "" }); }}>Submit Another</PurpleBtn></div>
    </div>
  );
  return (
    <div style={{ maxWidth: 480 }}>
      <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 4 }}>Submit a Claim</h2>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 24 }}>AI-verified · Fast approval process</p>
      <div style={{ background: C.white, borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        {[
          { label: "Policy ID", key: "policy", placeholder: "e.g. POL-001" },
          { label: "Claim Reason", key: "reason", placeholder: "e.g. Road accident, Medical emergency" },
          { label: "Claim Amount (₹)", key: "amount", placeholder: "e.g. 15000" },
          { label: "Incident Date", key: "date", type: "date" },
        ].map(f => (
          <div key={f.key} style={{ marginBottom: 16 }}>
            <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{f.label}</label>
            <input value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
              placeholder={f.placeholder || ""} type={f.type || "text"}
              style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border: `1px solid ${C.border}`, color: C.text, fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }}
            />
          </div>
        ))}
        <div style={{ border: `2px dashed ${C.border}`, borderRadius: 10, padding: 20, textAlign: "center", color: C.textMuted, fontSize: 12, marginBottom: 20 }}>
          📎 Upload medical bills / accident photos<br />
          <span style={{ color: C.purple, cursor: "pointer", fontWeight: 600 }}>Browse files</span>
        </div>
        <PurpleBtn onClick={() => setDone(true)} style={{ width: "100%", padding: "13px", borderRadius: 8, fontSize: 14 }}>SUBMIT CLAIM →</PurpleBtn>
      </div>
    </div>
  );
}

function DBPolicies() {
  const pols = [
    { id: "POL-001", plan: "Basic Shield",  type: "Accident", purchased: "Jan 12, 2026", validity: "Jan 12, 2027", coverage: "₹50,000" },
    { id: "POL-002", plan: "Health Guard",  type: "Health",   purchased: "Mar 5, 2026",  validity: "Mar 5, 2027",  coverage: "₹1,00,000" },
  ];
  return (
    <div>
      <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 4 }}>My Policies</h2>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 24 }}>All your active insurance policies</p>
      {pols.map(p => (
        <div key={p.id} style={{ background: C.white, borderRadius: 14, padding: 24, marginBottom: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderLeft: `4px solid ${C.purple}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div><div style={{ fontWeight: 800, fontSize: 18 }}>{p.plan}</div><div style={{ color: C.textMuted, fontSize: 12, marginTop: 2 }}>{p.id} · {p.type}</div></div>
            <span style={{ background: C.purple + "22", color: C.purple, padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>Active</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[["Coverage", p.coverage], ["Purchased", p.purchased], ["Valid Until", p.validity]].map(([k, v]) => (
              <div key={k}>
                <div style={{ color: C.textLight, fontSize: 10, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>{k}</div>
                <div style={{ color: C.text, fontSize: 13, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage]         = useState("landing");
  const [userName, setUserName] = useState("Ravi Kumar");
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background: #F0EBF8; }
        button:hover { opacity:0.88; }
        select option { background:#fff; }
      `}</style>
      {page === "landing"   && <LandingPage goLogin={() => setPage("auth")} />}
      {page === "auth"      && <AuthPage goHome={() => setPage("landing")} goDashboard={n => { setUserName(n || "Ravi Kumar"); setPage("dashboard"); }} />}
      {page === "dashboard" && <Dashboard userName={userName} goHome={() => setPage("landing")} />}
    </>
  );
}
