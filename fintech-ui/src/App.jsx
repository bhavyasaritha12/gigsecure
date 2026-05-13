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

// ── ALL TRANSLATIONS ─────────────────────────────────────────────────────────
const T = {
  en: {
    // NAV
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_blog: "Blog", nav_contact: "Contact",
    nav_login: "Login / Sign Up", nav_back: "← Back to Home",
    lang_label: "🌐 Language",
    // HERO
    hero_tag: "PROTECTING YOUR GIG",
    hero_h1: ["Insurance for Gig Workers,", "Peace of Mind"],
    hero_p: "Stay secure with GigSecure's flexible micro-insurance plans designed solely for gig workers, ensuring financial protection when you need it most.",
    hero_btn: "LOGIN / SIGN UP",
    // WHO WE ARE
    wwa_tag: "WHO WE ARE",
    wwa_h2: ["Empowering Gig Workers", "with Insurance"],
    wwa_p1: "GigSecure is a modern insurance platform dedicated to the unique needs of gig workers.",
    wwa_p2: "Our platform offers tailored micro-insurance solutions that protect delivery partners, freelancers, drivers, and daily wage earners. With a focus on affordability and accessibility, GigSecure provides innovative policies that stand out in the market.",
    wwa_btn: "LEARN MORE",
    // SERVICES SECTION
    svc_tag: "OUR SERVICES",
    svc_h2: "Micro-Insurance Plans Made Easy",
    svc_p: "Flexible coverage options tailored for gig workers.",
    svc_learn: "LEARN MORE",
    svc_coverage: "Coverage up to",
    // WHY CHOOSE US
    why_tag: "WHY CHOOSE US",
    why_h2: ["Discover Our Unique Benefits", "for Gig Workers"],
    why_items: [
      { n: "01", title: "Tailored Insurance Plans", desc: "Customizable plans specifically designed for the dynamic needs of gig workers — pay only for what you need." },
      { n: "02", title: "Affordable Coverage Options", desc: "Our micro-insurance approach lets you access comprehensive protection without burdening your budget." },
      { n: "03", title: "Instant Access & Support", desc: "Get immediate coverage and customer support right when you need it, through our user-friendly platform." },
    ],
    // CTA
    cta_tag: "JOIN THE GIGSECURE COMMUNITY",
    cta_h2: ["Protect Your Gig Work", "Today—Sign Up Now!"],
    cta_p: "Experience the peace of mind that comes with tailored insurance solutions designed for gig workers like you.",
    cta_btn: "GET STARTED",
    // FOOTER
    footer_copy: "© 2026 GigSecure · Neural Nexas Team · Hyderabad, Telangana, India",
    // AUTH
    auth_subtitle: "Micro-Insurance for Gig Workers",
    auth_login: "Login", auth_register: "Register",
    auth_name: "Full Name", auth_phone: "Phone Number", auth_worktype: "Work Type",
    auth_email: "Email Address", auth_password: "Password",
    auth_btn_login: "LOGIN →", auth_btn_register: "CREATE ACCOUNT →",
    auth_no_account: "Don't have an account?", auth_have_account: "Already have an account?",
    auth_register_link: "Register", auth_login_link: "Login",
    auth_error: "Please fill all required fields.",
    auth_work_delivery: "Delivery Partner (Swiggy/Zomato)",
    auth_work_driver: "Cab Driver (Uber/Ola)",
    auth_work_freelancer: "Freelancer",
    auth_work_construction: "Construction Worker",
    auth_work_domestic: "Domestic Worker",
    // DASHBOARD NAV
    dash_dashboard: "Dashboard", dash_plans: "Insurance Plans", dash_calc: "Premium Calc",
    dash_ai: "AI Recommend", dash_claims: "Submit Claim", dash_policies: "My Policies",
    dash_back: "← Back to Home", dash_active: "● Active Policy", dash_systems: "All systems active",
    // DASHBOARD HOME
    db_welcome: "Welcome back,", db_overview: "Here's your insurance overview for May 2026",
    db_stat_plans: "Active Plans", db_stat_coverage: "Total Coverage",
    db_stat_claims: "Claims Filed", db_stat_premium: "Next Premium",
    db_active_policies: "Active Policies", db_recent: "Recent Activity",
    db_pol1: "Basic Shield — Accident", db_pol2: "Health Guard — Health",
    db_act1: "Premium paid — Basic Shield", db_act2: "Claim submitted — Medical", db_act3: "Policy renewed — Health Guard",
    db_ago1: "2 days ago", db_ago2: "1 week ago", db_ago3: "1 month ago",
    db_active_badge: "Active",
    // PLANS
    pl_h2: "Insurance Plans", pl_p: "Affordable plans tailored for gig workers",
    pl_coverage: "Coverage", pl_premium: "Premium", pl_buy: "BUY NOW →", pl_active: "✅ Active Plan",
    // CALCULATOR
    calc_h2: "Premium Calculator", calc_p: "Get your estimated monthly premium instantly",
    calc_age: "Age", calc_income: "Monthly Income (₹)", calc_worktype: "Work Type",
    calc_delivery: "Delivery Partner", calc_driver: "Cab Driver", calc_freelancer: "Freelancer",
    calc_btn: "CALCULATE PREMIUM", calc_result_label: "Estimated Monthly Premium",
    calc_result_sub: "Coverage up to ₹1,00,000",
    // AI
    ai_tag: "AI ENGINE", ai_h2: "Smart Recommendation", ai_p: "Powered by Python · Scikit-learn",
    ai_age: "Age", ai_income: "Monthly Income (₹)", ai_risk: "Risk Level",
    ai_low: "low", ai_medium: "medium", ai_high: "high",
    ai_btn: "✦ GET AI RECOMMENDATION", ai_analyzing: "⟳ ANALYZING...",
    ai_result_tag: "✦ Recommended Plans",
    // CLAIMS
    cl_h2: "Submit a Claim", cl_p: "AI-verified · Fast approval process",
    cl_policy: "Policy ID", cl_reason: "Claim Reason", cl_amount: "Claim Amount (₹)", cl_date: "Incident Date",
    cl_policy_ph: "e.g. POL-001", cl_reason_ph: "e.g. Road accident, Medical emergency", cl_amount_ph: "e.g. 15000",
    cl_upload: "Upload medical bills / accident photos", cl_browse: "Browse files",
    cl_btn: "SUBMIT CLAIM →",
    cl_done_h2: "Claim Submitted!", cl_done_id: "Claim ID:", cl_done_p: "AI verification in progress · 24–48 hours",
    cl_done_badge: "Under Review", cl_done_another: "Submit Another",
    // POLICIES
    po_h2: "My Policies", po_p: "All your active insurance policies",
    po_coverage: "Coverage", po_purchased: "Purchased", po_valid: "Valid Until", po_active: "Active",
    // BUY MODAL
    bm_confirm: "Confirm Purchase", bm_payment: "Payment",
    bm_summary: "Plan Summary", bm_type: "Plan Type", bm_coverage: "Coverage",
    bm_monthly: "Monthly Premium", bm_start: "Start Date", bm_today: "Today",
    bm_note: "ℹ️ By purchasing this plan, you agree to GigSecure's terms and conditions. Coverage starts immediately upon successful payment.",
    bm_cancel: "CANCEL", bm_buy: "BUY NOW →",
    bm_pay_method: "Choose Payment Method",
    bm_upi: "📲 UPI", bm_card: "💳 Card", bm_net: "🏦 Net Banking",
    bm_upi_id: "UPI ID", bm_amount_due: "Amount Due",
    bm_card_num: "Card Number", bm_card_name: "Cardholder Name", bm_expiry: "Expiry", bm_cvv: "CVV",
    bm_bank: "Select Your Bank",
    bm_back: "← BACK", bm_pay: "PAY NOW →", bm_processing: "⟳ PROCESSING...",
    bm_success_h2: "Payment Successful!", bm_success_p: "policy is now active.", bm_success_p2: "You are covered starting today!",
    bm_plan: "Plan", bm_status: "Status", bm_pol_id: "Policy ID", bm_close: "CLOSE",
    // NAV MODALS
    nm_portal: "GigSecure Portal",
    // HOME MODAL
    hm_title: "Welcome to GigSecure", hm_sub: "Insurance built for the gig economy",
    hm_what: "What is GigSecure?",
    hm_what_p: "GigSecure is India's first micro-insurance platform built exclusively for gig workers — delivery partners, cab drivers, freelancers, and daily wage earners. We offer affordable, flexible insurance plans starting from just ₹99/month.",
    hm_feats: [
      { icon: "⚡", title: "Instant Coverage", desc: "Get covered in under 2 minutes with zero paperwork" },
      { icon: "💰", title: "₹99/month", desc: "Micro-plans designed to fit gig worker budgets" },
      { icon: "📱", title: "Digital First", desc: "Manage everything from your phone, anytime" },
      { icon: "🤝", title: "Fast Claims", desc: "AI-powered claims processing in 24–48 hours" },
    ],
    hm_numbers: "📊 By the Numbers",
    hm_stats: [["50,000+", "Gig Workers Protected"], ["₹2Cr+", "Claims Settled"], ["4.8★", "App Rating"]],
    // ABOUT MODAL
    am_title: "About GigSecure", am_sub: "Our mission, story & team",
    am_story: "Our Story",
    am_story_p1: "Founded in 2024 by the Neural Nexas team in Hyderabad, GigSecure was born from a simple observation: millions of gig workers in India risk their livelihoods every day without any financial safety net.",
    am_story_p2: "We built a platform that treats gig workers as first-class citizens — not afterthoughts — with insurance products designed around their real lives and real incomes.",
    am_values: "Our Core Values",
    am_vals: [
      { icon: "🎯", title: "Accessibility", desc: "Insurance should be for everyone, not just the salaried class. We price plans at ₹99–₹299/month so any gig worker can afford protection." },
      { icon: "🔍", title: "Transparency", desc: "No hidden clauses. No fine print traps. Every policy is written in plain language so you know exactly what you're covered for." },
      { icon: "🚀", title: "Innovation", desc: "We use AI for smart plan recommendations and faster claim processing — technology that works for the worker, not against them." },
    ],
    am_team: "🏆 Built by Neural Nexas Team",
    am_team_p: "A passionate group of engineers, designers, and insurance experts based in Hyderabad, Telangana — dedicated to financial inclusion for India's gig workforce.",
    // SERVICES MODAL
    sm_title: "Our Services", sm_sub: "Micro-insurance plans made for gig workers",
    sm_intro: "GigSecure offers four tailored insurance plan types, each designed to address the unique risks that gig workers face every day. Mix and match to build your perfect coverage.",
    sm_from: "from",
    sm_plans: [
      { icon: "🛡️", num: "01", name: "Accident Protection Plans", color: "#e53e3e", coverage: "₹50,000", premium: "₹99/mo", desc: "Comprehensive accident coverage specifically designed for gig workers. Covers road accidents, workplace injuries, and disability.", features: ["Road accident coverage", "Workplace injury protection", "Temporary disability benefit", "Ambulance cost reimbursement"] },
      { icon: "🏥", num: "02", name: "Health Coverage Options", color: "#3182ce", coverage: "₹1,00,000", premium: "₹199/mo", desc: "Affordable health insurance covering hospitalization, surgeries, and outpatient treatment.", features: ["Cashless hospitalization", "Pre & post hospitalization cover", "Day care procedures", "Free annual health check-up"] },
      { icon: "❤️", num: "03", name: "Life Secure Plans", color: "#7B2FBE", coverage: "₹5,00,000", premium: "₹299/mo", desc: "Term life insurance with high coverage at low premiums. Secure your family's financial future.", features: ["Term life coverage", "Accidental death benefit", "Nominee claim within 48 hours", "No medical tests up to ₹5L"] },
      { icon: "💼", num: "04", name: "Income Protection Plans", color: "#b7791f", coverage: "₹2,00,000", premium: "₹149/mo", desc: "If illness or injury stops you from working, we replace your income so you can focus on recovery.", features: ["Monthly income replacement", "Job loss due to injury covered", "Up to 12 months benefit period", "Covers freelance & gig income"] },
    ],
    sm_coverage_up: "Coverage up to",
    // BLOG MODAL
    blo_title: "GigSecure Blog", blo_sub: "Insights, tips & updates for gig workers",
    blo_read: "READ MORE →",
    blo_posts: [
      { date: "May 12, 2026", tag: "GUIDE", title: "Crafting Captivating Coverage: What Every Gig Worker Must Know About Insurance", excerpt: "The gig economy is booming in India — but are gig workers protected? This guide covers everything from choosing the right plan to filing your first claim.", readTime: "5 min read", img: "🚗" },
      { date: "May 8, 2026", tag: "NEWS", title: "GigSecure Expands to 50 New Cities", excerpt: "GigSecure is now available to gig workers across Tier-2 and Tier-3 cities in India.", readTime: "3 min read", img: "🏙️" },
      { date: "May 1, 2026", tag: "TIP", title: "How to Choose Your First Insurance Plan", excerpt: "Buying insurance for the first time can feel overwhelming. We break it down into simple steps.", readTime: "4 min read", img: "💡" },
      { date: "Apr 22, 2026", tag: "STORY", title: "How One Delivery Partner Used GigSecure to Recover After an Accident", excerpt: "Rajesh, a Zomato delivery partner from Pune, shares how a ₹99/month Basic Shield plan covered his hospitalization.", readTime: "6 min read", img: "⭐" },
    ],
    // CONTACT MODAL
    con_title: "Contact Us", con_sub: "Get in touch with GigSecure for support",
    con_items: [
      { num: "01", label: "Address", value: "Hyderabad, Telangana, India", icon: "📍" },
      { num: "02", label: "Call Us", value: "202-555-0188", icon: "📞" },
      { num: "03", label: "Email", value: "contact@gigsecure.in", icon: "✉️" },
      { num: "04", label: "Social Media", value: "Facebook · Twitter · Instagram · LinkedIn", icon: "🌐" },
    ],
    con_reach: "Reach Out",
    con_reach_p: "We're here to help you with any questions or concerns regarding our micro-insurance solutions.",
    con_fname: "First Name", con_lname: "Last Name", con_email: "Email", con_msg: "Message",
    con_msg_ph: "Your message...", con_submit: "SUBMIT →",
  },

  hi: {
    nav_home: "होम", nav_about: "हमारे बारे में", nav_services: "सेवाएं", nav_blog: "ब्लॉग", nav_contact: "संपर्क",
    nav_login: "लॉगिन / साइन अप", nav_back: "← होम पर वापस",
    lang_label: "🌐 भाषा",
    hero_tag: "आपके गिग को सुरक्षित करना",
    hero_h1: ["गिग वर्कर्स के लिए बीमा,", "मन की शांति"],
    hero_p: "GigSecure के लचीले माइक्रो-बीमा प्लान के साथ सुरक्षित रहें, जो केवल गिग वर्कर्स के लिए बनाए गए हैं — जब जरूरत हो तब वित्तीय सुरक्षा सुनिश्चित करते हैं।",
    hero_btn: "लॉगिन / साइन अप",
    wwa_tag: "हम कौन हैं",
    wwa_h2: ["गिग वर्कर्स को सशक्त बनाना", "बीमा के साथ"],
    wwa_p1: "GigSecure एक आधुनिक बीमा प्लेटफ़ॉर्म है जो गिग वर्कर्स की अनूठी जरूरतों के लिए समर्पित है।",
    wwa_p2: "हमारा प्लेटफ़ॉर्म डिलीवरी पार्टनर, फ्रीलांसर, ड्राइवर और दैनिक वेतन कमाने वालों की सुरक्षा के लिए अनुकूलित माइक्रो-बीमा समाधान प्रदान करता है।",
    wwa_btn: "और जानें",
    svc_tag: "हमारी सेवाएं",
    svc_h2: "माइक्रो-बीमा प्लान — आसान और सरल",
    svc_p: "गिग वर्कर्स के लिए अनुकूलित लचीले कवरेज विकल्प।",
    svc_learn: "और जानें",
    svc_coverage: "कवरेज तक",
    why_tag: "हमें क्यों चुनें",
    why_h2: ["गिग वर्कर्स के लिए", "हमारे अनूठे लाभ जानें"],
    why_items: [
      { n: "01", title: "अनुकूलित बीमा प्लान", desc: "गिग वर्कर्स की गतिशील जरूरतों के लिए विशेष रूप से डिज़ाइन किए गए प्लान — केवल वही भुगतान करें जो आपको चाहिए।" },
      { n: "02", title: "किफायती कवरेज विकल्प", desc: "हमारा माइक्रो-बीमा दृष्टिकोण आपको बजट पर बोझ डाले बिना व्यापक सुरक्षा प्रदान करता है।" },
      { n: "03", title: "तुरंत एक्सेस और सहायता", desc: "जब आपको जरूरत हो तुरंत कवरेज और ग्राहक सहायता प्राप्त करें।" },
    ],
    cta_tag: "GIGSECURE समुदाय से जुड़ें",
    cta_h2: ["आज अपने गिग वर्क की", "सुरक्षा करें — अभी साइन अप करें!"],
    cta_p: "गिग वर्कर्स के लिए डिज़ाइन किए गए बीमा समाधानों के साथ मन की शांति का अनुभव करें।",
    cta_btn: "शुरू करें",
    footer_copy: "© 2026 GigSecure · Neural Nexas टीम · हैदराबाद, तेलंगाना, भारत",
    auth_subtitle: "गिग वर्कर्स के लिए माइक्रो-बीमा",
    auth_login: "लॉगिन", auth_register: "रजिस्टर",
    auth_name: "पूरा नाम", auth_phone: "फोन नंबर", auth_worktype: "काम का प्रकार",
    auth_email: "ईमेल पता", auth_password: "पासवर्ड",
    auth_btn_login: "लॉगिन →", auth_btn_register: "अकाउंट बनाएं →",
    auth_no_account: "अकाउंट नहीं है?", auth_have_account: "पहले से अकाउंट है?",
    auth_register_link: "रजिस्टर करें", auth_login_link: "लॉगिन करें",
    auth_error: "कृपया सभी आवश्यक फ़ील्ड भरें।",
    auth_work_delivery: "डिलीवरी पार्टनर (Swiggy/Zomato)",
    auth_work_driver: "कैब ड्राइवर (Uber/Ola)",
    auth_work_freelancer: "फ्रीलांसर",
    auth_work_construction: "निर्माण मजदूर",
    auth_work_domestic: "घरेलू कामगार",
    dash_dashboard: "डैशबोर्ड", dash_plans: "बीमा प्लान", dash_calc: "प्रीमियम कैलक.",
    dash_ai: "AI सिफारिश", dash_claims: "क्लेम दर्ज करें", dash_policies: "मेरी पॉलिसी",
    dash_back: "← होम पर वापस", dash_active: "● सक्रिय पॉलिसी", dash_systems: "सभी सिस्टम सक्रिय",
    db_welcome: "वापसी पर स्वागत,", db_overview: "मई 2026 के लिए आपका बीमा अवलोकन",
    db_stat_plans: "सक्रिय प्लान", db_stat_coverage: "कुल कवरेज",
    db_stat_claims: "दर्ज क्लेम", db_stat_premium: "अगली किस्त",
    db_active_policies: "सक्रिय पॉलिसी", db_recent: "हाल की गतिविधि",
    db_pol1: "Basic Shield — दुर्घटना", db_pol2: "Health Guard — स्वास्थ्य",
    db_act1: "प्रीमियम भुगतान — Basic Shield", db_act2: "क्लेम दर्ज — चिकित्सा", db_act3: "पॉलिसी नवीनीकृत — Health Guard",
    db_ago1: "2 दिन पहले", db_ago2: "1 सप्ताह पहले", db_ago3: "1 महीना पहले",
    db_active_badge: "सक्रिय",
    pl_h2: "बीमा प्लान", pl_p: "गिग वर्कर्स के लिए किफायती प्लान",
    pl_coverage: "कवरेज", pl_premium: "प्रीमियम", pl_buy: "अभी खरीदें →", pl_active: "✅ सक्रिय प्लान",
    calc_h2: "प्रीमियम कैलकुलेटर", calc_p: "अपना अनुमानित मासिक प्रीमियम तुरंत जानें",
    calc_age: "आयु", calc_income: "मासिक आय (₹)", calc_worktype: "काम का प्रकार",
    calc_delivery: "डिलीवरी पार्टनर", calc_driver: "कैब ड्राइवर", calc_freelancer: "फ्रीलांसर",
    calc_btn: "प्रीमियम कैलकुलेट करें", calc_result_label: "अनुमानित मासिक प्रीमियम",
    calc_result_sub: "₹1,00,000 तक कवरेज",
    ai_tag: "AI इंजन", ai_h2: "स्मार्ट सिफारिश", ai_p: "Python · Scikit-learn द्वारा संचालित",
    ai_age: "आयु", ai_income: "मासिक आय (₹)", ai_risk: "जोखिम स्तर",
    ai_low: "कम", ai_medium: "मध्यम", ai_high: "अधिक",
    ai_btn: "✦ AI सिफारिश प्राप्त करें", ai_analyzing: "⟳ विश्लेषण हो रहा है...",
    ai_result_tag: "✦ अनुशंसित प्लान",
    cl_h2: "क्लेम दर्ज करें", cl_p: "AI-सत्यापित · त्वरित अनुमोदन प्रक्रिया",
    cl_policy: "पॉलिसी ID", cl_reason: "क्लेम कारण", cl_amount: "क्लेम राशि (₹)", cl_date: "घटना की तारीख",
    cl_policy_ph: "जैसे POL-001", cl_reason_ph: "जैसे सड़क दुर्घटना, चिकित्सा आपात स्थिति", cl_amount_ph: "जैसे 15000",
    cl_upload: "मेडिकल बिल / दुर्घटना फोटो अपलोड करें", cl_browse: "फ़ाइलें खोजें",
    cl_btn: "क्लेम जमा करें →",
    cl_done_h2: "क्लेम जमा हो गया!", cl_done_id: "क्लेम ID:", cl_done_p: "AI सत्यापन चल रहा है · 24–48 घंटे",
    cl_done_badge: "समीक्षाधीन", cl_done_another: "दूसरा क्लेम दर्ज करें",
    po_h2: "मेरी पॉलिसी", po_p: "आपकी सभी सक्रिय बीमा पॉलिसी",
    po_coverage: "कवरेज", po_purchased: "खरीदी तारीख", po_valid: "वैध तक", po_active: "सक्रिय",
    bm_confirm: "खरीद की पुष्टि करें", bm_payment: "भुगतान",
    bm_summary: "प्लान सारांश", bm_type: "प्लान प्रकार", bm_coverage: "कवरेज",
    bm_monthly: "मासिक प्रीमियम", bm_start: "प्रारंभ तारीख", bm_today: "आज",
    bm_note: "ℹ️ इस प्लान को खरीदकर आप GigSecure की नियमों और शर्तों से सहमत हैं। सफल भुगतान के तुरंत बाद कवरेज शुरू होती है।",
    bm_cancel: "रद्द करें", bm_buy: "अभी खरीदें →",
    bm_pay_method: "भुगतान का तरीका चुनें",
    bm_upi: "📲 UPI", bm_card: "💳 कार्ड", bm_net: "🏦 नेट बैंकिंग",
    bm_upi_id: "UPI ID", bm_amount_due: "देय राशि",
    bm_card_num: "कार्ड नंबर", bm_card_name: "कार्डधारक का नाम", bm_expiry: "समाप्ति", bm_cvv: "CVV",
    bm_bank: "अपना बैंक चुनें",
    bm_back: "← वापस", bm_pay: "भुगतान करें →", bm_processing: "⟳ प्रक्रिया हो रही है...",
    bm_success_h2: "भुगतान सफल!", bm_success_p: "पॉलिसी अब सक्रिय है।", bm_success_p2: "आज से आप सुरक्षित हैं!",
    bm_plan: "प्लान", bm_status: "स्थिति", bm_pol_id: "पॉलिसी ID", bm_close: "बंद करें",
    nm_portal: "GigSecure पोर्टल",
    hm_title: "GigSecure में स्वागत है", hm_sub: "गिग अर्थव्यवस्था के लिए बनाया गया बीमा",
    hm_what: "GigSecure क्या है?",
    hm_what_p: "GigSecure भारत का पहला माइक्रो-बीमा प्लेटफ़ॉर्म है जो केवल गिग वर्कर्स के लिए बनाया गया है। हम ₹99/महीने से शुरू होने वाले किफायती और लचीले बीमा प्लान प्रदान करते हैं।",
    hm_feats: [
      { icon: "⚡", title: "तुरंत कवरेज", desc: "2 मिनट से कम में बिना कागजी काम के बीमा प्राप्त करें" },
      { icon: "💰", title: "₹99/महीना", desc: "गिग वर्कर्स के बजट के अनुकूल माइक्रो-प्लान" },
      { icon: "📱", title: "डिजिटल फर्स्ट", desc: "अपने फोन से कहीं भी, कभी भी सब कुछ मैनेज करें" },
      { icon: "🤝", title: "त्वरित क्लेम", desc: "24–48 घंटों में AI-संचालित क्लेम प्रोसेसिंग" },
    ],
    hm_numbers: "📊 संख्याओं में",
    hm_stats: [["50,000+", "गिग वर्कर्स सुरक्षित"], ["₹2Cr+", "क्लेम निपटाए"], ["4.8★", "ऐप रेटिंग"]],
    am_title: "GigSecure के बारे में", am_sub: "हमारा मिशन, कहानी और टीम",
    am_story: "हमारी कहानी",
    am_story_p1: "2024 में हैदराबाद में Neural Nexas टीम द्वारा स्थापित, GigSecure एक सरल अवलोकन से पैदा हुआ: भारत में लाखों गिग वर्कर्स बिना किसी वित्तीय सुरक्षा के रोजाना जोखिम उठाते हैं।",
    am_story_p2: "हमने एक ऐसा प्लेटफ़ॉर्म बनाया जो गिग वर्कर्स को प्रथम-श्रेणी नागरिक के रूप में मानता है — उनकी वास्तविक जिंदगी और आय के अनुसार बीमा उत्पादों के साथ।",
    am_values: "हमारे मूल मूल्य",
    am_vals: [
      { icon: "🎯", title: "पहुंच", desc: "बीमा सभी के लिए होना चाहिए। हम ₹99–₹299/महीने में प्लान देते हैं ताकि हर गिग वर्कर सुरक्षित रह सके।" },
      { icon: "🔍", title: "पारदर्शिता", desc: "कोई छिपा हुआ खंड नहीं। हर पॉलिसी सरल भाषा में लिखी गई है।" },
      { icon: "🚀", title: "नवाचार", desc: "हम AI का उपयोग स्मार्ट प्लान सिफारिश और तेज़ क्लेम प्रोसेसिंग के लिए करते हैं।" },
    ],
    am_team: "🏆 Neural Nexas टीम द्वारा निर्मित",
    am_team_p: "हैदराबाद, तेलंगाना में स्थित इंजीनियरों, डिजाइनरों और बीमा विशेषज्ञों का एक उत्साही समूह।",
    sm_title: "हमारी सेवाएं", sm_sub: "गिग वर्कर्स के लिए माइक्रो-बीमा प्लान",
    sm_intro: "GigSecure चार अनुकूलित बीमा प्रकार प्रदान करता है, जो गिग वर्कर्स के दैनिक जोखिमों को ध्यान में रखकर बनाए गए हैं।",
    sm_from: "से",
    sm_plans: [
      { icon: "🛡️", num: "01", name: "दुर्घटना सुरक्षा प्लान", color: "#e53e3e", coverage: "₹50,000", premium: "₹99/माह", desc: "गिग वर्कर्स के लिए व्यापक दुर्घटना कवरेज। सड़क दुर्घटनाएं, कार्यस्थल चोटें और विकलांगता को कवर करता है।", features: ["सड़क दुर्घटना कवरेज", "कार्यस्थल चोट सुरक्षा", "अस्थायी विकलांगता लाभ", "एम्बुलेंस लागत प्रतिपूर्ति"] },
      { icon: "🏥", num: "02", name: "स्वास्थ्य कवरेज विकल्प", color: "#3182ce", coverage: "₹1,00,000", premium: "₹199/माह", desc: "अस्पताल में भर्ती, सर्जरी और आउटपेशेंट उपचार को कवर करने वाला किफायती स्वास्थ्य बीमा।", features: ["कैशलेस अस्पताल में भर्ती", "पूर्व और बाद अस्पताल कवर", "डे केयर प्रक्रियाएं", "मुफ्त वार्षिक स्वास्थ्य जांच"] },
      { icon: "❤️", num: "03", name: "जीवन सुरक्षा प्लान", color: "#7B2FBE", coverage: "₹5,00,000", premium: "₹299/माह", desc: "कम प्रीमियम पर उच्च कवरेज वाला टर्म जीवन बीमा। अपने परिवार का भविष्य सुरक्षित करें।", features: ["टर्म जीवन कवरेज", "आकस्मिक मृत्यु लाभ", "48 घंटे में नामांकित व्यक्ति का दावा", "₹5L तक बिना मेडिकल टेस्ट"] },
      { icon: "💼", num: "04", name: "आय सुरक्षा प्लान", color: "#b7791f", coverage: "₹2,00,000", premium: "₹149/माह", desc: "यदि बीमारी या चोट के कारण काम बंद हो जाए, तो हम आपकी आय की भरपाई करते हैं।", features: ["मासिक आय प्रतिस्थापन", "चोट के कारण नौकरी छूटना कवर", "12 महीने तक लाभ अवधि", "फ्रीलांस और गिग आय कवर"] },
    ],
    sm_coverage_up: "तक कवरेज",
    blo_title: "GigSecure ब्लॉग", blo_sub: "गिग वर्कर्स के लिए जानकारी, टिप्स और अपडेट",
    blo_read: "और पढ़ें →",
    blo_posts: [
      { date: "12 मई 2026", tag: "गाइड", title: "हर गिग वर्कर को बीमा के बारे में क्या जानना चाहिए", excerpt: "भारत में गिग अर्थव्यवस्था तेजी से बढ़ रही है — लेकिन क्या गिग वर्कर्स सुरक्षित हैं? यह गाइड सब कुछ कवर करती है।", readTime: "5 मिनट पढ़ें", img: "🚗" },
      { date: "8 मई 2026", tag: "समाचार", title: "GigSecure 50 नए शहरों में विस्तार कर रहा है", excerpt: "GigSecure अब भारत के टियर-2 और टियर-3 शहरों के गिग वर्कर्स के लिए उपलब्ध है।", readTime: "3 मिनट पढ़ें", img: "🏙️" },
      { date: "1 मई 2026", tag: "टिप", title: "पहला बीमा प्लान कैसे चुनें", excerpt: "पहली बार बीमा खरीदना भारी लग सकता है। हम इसे सरल चरणों में समझाते हैं।", readTime: "4 मिनट पढ़ें", img: "💡" },
      { date: "22 अप्रैल 2026", tag: "कहानी", title: "कैसे एक डिलीवरी पार्टनर ने GigSecure से दुर्घटना के बाद रिकवरी की", excerpt: "पुणे के Zomato डिलीवरी पार्टनर राजेश बताते हैं कैसे ₹99/माह के प्लान ने उनकी मदद की।", readTime: "6 मिनट पढ़ें", img: "⭐" },
    ],
    con_title: "संपर्क करें", con_sub: "GigSecure सहायता के लिए संपर्क करें",
    con_items: [
      { num: "01", label: "पता", value: "हैदराबाद, तेलंगाना, भारत", icon: "📍" },
      { num: "02", label: "कॉल करें", value: "202-555-0188", icon: "📞" },
      { num: "03", label: "ईमेल", value: "contact@gigsecure.in", icon: "✉️" },
      { num: "04", label: "सोशल मीडिया", value: "Facebook · Twitter · Instagram · LinkedIn", icon: "🌐" },
    ],
    con_reach: "संपर्क करें",
    con_reach_p: "हम आपके किसी भी प्रश्न या माइक्रो-बीमा समाधान से संबंधित चिंताओं में मदद करने के लिए यहां हैं।",
    con_fname: "पहला नाम", con_lname: "अंतिम नाम", con_email: "ईमेल", con_msg: "संदेश",
    con_msg_ph: "आपका संदेश...", con_submit: "भेजें →",
  },

  te: {
    nav_home: "హోమ్", nav_about: "మా గురించి", nav_services: "సేవలు", nav_blog: "బ్లాగ్", nav_contact: "సంప్రదింపు",
    nav_login: "లాగిన్ / సైన్ అప్", nav_back: "← హోమ్‌కి తిరిగి",
    lang_label: "🌐 భాష",
    hero_tag: "మీ గిగ్‌ని రక్షించడం",
    hero_h1: ["గిగ్ వర్కర్లకు బీమా,", "మనశ్శాంతి"],
    hero_p: "GigSecure యొక్క వశ్యమైన మైక్రో-బీమా ప్లాన్‌లతో సురక్షితంగా ఉండండి — గిగ్ వర్కర్లకు మాత్రమే రూపొందించబడినవి.",
    hero_btn: "లాగిన్ / సైన్ అప్",
    wwa_tag: "మేము ఎవరు",
    wwa_h2: ["గిగ్ వర్కర్లను సాధికారత చేయడం", "బీమాతో"],
    wwa_p1: "GigSecure గిగ్ వర్కర్ల ప్రత్యేక అవసరాలకు అంకితమైన ఆధునిక బీమా ప్లాట్‌ఫామ్.",
    wwa_p2: "మా ప్లాట్‌ఫామ్ డెలివరీ పార్ట్‌నర్లు, ఫ్రీలాన్సర్లు, డ్రైవర్లు మరియు రోజువారీ వేతన కార్మికుల రక్షణకు అనుకూలీకరించిన మైక్రో-బీమా పరిష్కారాలను అందిస్తుంది.",
    wwa_btn: "మరింత తెలుసుకోండి",
    svc_tag: "మా సేవలు",
    svc_h2: "మైక్రో-బీమా ప్లాన్లు — సులభంగా",
    svc_p: "గిగ్ వర్కర్లకు అనుకూలీకరించిన సౌకర్యవంతమైన కవరేజ్ ఎంపికలు.",
    svc_learn: "మరింత తెలుసుకోండి",
    svc_coverage: "వరకు కవరేజ్",
    why_tag: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
    why_h2: ["గిగ్ వర్కర్లకు మా", "ప్రత్యేక ప్రయోజనాలు తెలుసుకోండి"],
    why_items: [
      { n: "01", title: "అనుకూలీకరించిన బీమా ప్లాన్లు", desc: "గిగ్ వర్కర్ల డైనమిక్ అవసరాలకు ప్రత్యేకంగా రూపొందించబడిన ప్లాన్లు — మీకు అవసరమైన వాటికి మాత్రమే చెల్లించండి." },
      { n: "02", title: "సాధ్యమైన కవరేజ్ ఎంపికలు", desc: "మా మైక్రో-బీమా విధానం మీ బడ్జెట్‌పై భారం వేయకుండా సమగ్ర రక్షణను అందిస్తుంది." },
      { n: "03", title: "తక్షణ యాక్సెస్ & మద్దతు", desc: "మీకు అవసరమైనప్పుడు తక్షణ కవరేజ్ మరియు కస్టమర్ సపోర్ట్ పొందండి." },
    ],
    cta_tag: "GIGSECURE కమ్యూనిటీలో చేరండి",
    cta_h2: ["ఇప్పుడే మీ గిగ్ వర్క్‌ని", "రక్షించుకోండి — సైన్ అప్ చేయండి!"],
    cta_p: "గిగ్ వర్కర్ల కోసం రూపొందించిన బీమా పరిష్కారాలతో మనశ్శాంతిని అనుభవించండి.",
    cta_btn: "ప్రారంభించండి",
    footer_copy: "© 2026 GigSecure · Neural Nexas టీమ్ · హైదరాబాద్, తెలంగాణ, భారతదేశం",
    auth_subtitle: "గిగ్ వర్కర్లకు మైక్రో-బీమా",
    auth_login: "లాగిన్", auth_register: "నమోదు",
    auth_name: "పూర్తి పేరు", auth_phone: "ఫోన్ నంబర్", auth_worktype: "పని రకం",
    auth_email: "ఇమెయిల్ చిరునామా", auth_password: "పాస్‌వర్డ్",
    auth_btn_login: "లాగిన్ →", auth_btn_register: "అకౌంట్ సృష్టించండి →",
    auth_no_account: "అకౌంట్ లేదా?", auth_have_account: "ఇప్పటికే అకౌంట్ ఉందా?",
    auth_register_link: "నమోదు చేయండి", auth_login_link: "లాగిన్ చేయండి",
    auth_error: "దయచేసి అన్ని అవసరమైన ఫీల్డ్‌లను పూరించండి.",
    auth_work_delivery: "డెలివరీ పార్ట్‌నర్ (Swiggy/Zomato)",
    auth_work_driver: "క్యాబ్ డ్రైవర్ (Uber/Ola)",
    auth_work_freelancer: "ఫ్రీలాన్సర్",
    auth_work_construction: "నిర్మాణ కార్మికుడు",
    auth_work_domestic: "గృహ కార్మికుడు",
    dash_dashboard: "డాష్‌బోర్డ్", dash_plans: "బీమా ప్లాన్లు", dash_calc: "ప్రీమియం కాల్క్.",
    dash_ai: "AI సిఫార్సు", dash_claims: "క్లెయిమ్ దాఖలు", dash_policies: "నా పాలసీలు",
    dash_back: "← హోమ్‌కి తిరిగి", dash_active: "● చురుకైన పాలసీ", dash_systems: "అన్ని సిస్టమ్లు చురుకుగా ఉన్నాయి",
    db_welcome: "తిరిగి స్వాగతం,", db_overview: "మే 2026 బీమా అవలోకనం",
    db_stat_plans: "చురుకైన ప్లాన్లు", db_stat_coverage: "మొత్తం కవరేజ్",
    db_stat_claims: "దాఖలు చేసిన క్లెయిమ్లు", db_stat_premium: "తదుపరి ప్రీమియం",
    db_active_policies: "చురుకైన పాలసీలు", db_recent: "ఇటీవలి కార్యకలాపం",
    db_pol1: "Basic Shield — ప్రమాదం", db_pol2: "Health Guard — ఆరోగ్యం",
    db_act1: "ప్రీమియం చెల్లించబడింది — Basic Shield", db_act2: "క్లెయిమ్ దాఖలు — వైద్యం", db_act3: "పాలసీ పునరుద్ధరించబడింది — Health Guard",
    db_ago1: "2 రోజుల క్రితం", db_ago2: "1 వారం క్రితం", db_ago3: "1 నెల క్రితం",
    db_active_badge: "చురుకు",
    pl_h2: "బీమా ప్లాన్లు", pl_p: "గిగ్ వర్కర్లకు అందుబాటులో ఉండే ప్లాన్లు",
    pl_coverage: "కవరేజ్", pl_premium: "ప్రీమియం", pl_buy: "ఇప్పుడు కొనండి →", pl_active: "✅ చురుకైన ప్లాన్",
    calc_h2: "ప్రీమియం కాలిక్యులేటర్", calc_p: "మీ అంచనా మాసిక ప్రీమియం వెంటనే తెలుసుకోండి",
    calc_age: "వయస్సు", calc_income: "మాసిక ఆదాయం (₹)", calc_worktype: "పని రకం",
    calc_delivery: "డెలివరీ పార్ట్‌నర్", calc_driver: "క్యాబ్ డ్రైవర్", calc_freelancer: "ఫ్రీలాన్సర్",
    calc_btn: "ప్రీమియం లెక్కించండి", calc_result_label: "అంచనా మాసిక ప్రీమియం",
    calc_result_sub: "₹1,00,000 వరకు కవరేజ్",
    ai_tag: "AI ఇంజిన్", ai_h2: "స్మార్ట్ సిఫార్సు", ai_p: "Python · Scikit-learn ద్వారా నడపబడుతోంది",
    ai_age: "వయస్సు", ai_income: "మాసిక ఆదాయం (₹)", ai_risk: "రిస్క్ స్థాయి",
    ai_low: "తక్కువ", ai_medium: "మధ్యమ", ai_high: "అధిక",
    ai_btn: "✦ AI సిఫార్సు పొందండి", ai_analyzing: "⟳ విశ్లేషిస్తోంది...",
    ai_result_tag: "✦ సిఫార్సు చేయబడిన ప్లాన్లు",
    cl_h2: "క్లెయిమ్ దాఖలు చేయండి", cl_p: "AI-ధృవీకరణ · వేగవంతమైన ఆమోద ప్రక్రియ",
    cl_policy: "పాలసీ ID", cl_reason: "క్లెయిమ్ కారణం", cl_amount: "క్లెయిమ్ మొత్తం (₹)", cl_date: "సంఘటన తేదీ",
    cl_policy_ph: "ఉదా. POL-001", cl_reason_ph: "ఉదా. రోడ్ ప్రమాదం, వైద్య అత్యవసర పరిస్థితి", cl_amount_ph: "ఉదా. 15000",
    cl_upload: "వైద్య బిల్లులు / ప్రమాద ఫోటోలు అప్‌లోడ్ చేయండి", cl_browse: "ఫైళ్లు బ్రౌజ్ చేయండి",
    cl_btn: "క్లెయిమ్ సమర్పించండి →",
    cl_done_h2: "క్లెయిమ్ సమర్పించబడింది!", cl_done_id: "క్లెయిమ్ ID:", cl_done_p: "AI ధృవీకరణ జరుగుతోంది · 24–48 గంటలు",
    cl_done_badge: "సమీక్షలో ఉంది", cl_done_another: "మరొక క్లెయిమ్ సమర్పించండి",
    po_h2: "నా పాలసీలు", po_p: "మీ అన్ని చురుకైన బీమా పాలసీలు",
    po_coverage: "కవరేజ్", po_purchased: "కొనుగోలు తేదీ", po_valid: "చెల్లుబాటు వరకు", po_active: "చురుకు",
    bm_confirm: "కొనుగోలు ధృవీకరించండి", bm_payment: "చెల్లింపు",
    bm_summary: "ప్లాన్ సారాంశం", bm_type: "ప్లాన్ రకం", bm_coverage: "కవరేజ్",
    bm_monthly: "మాసిక ప్రీమియం", bm_start: "ప్రారంభ తేదీ", bm_today: "నేడు",
    bm_note: "ℹ️ ఈ ప్లాన్ కొనుగోలు చేయడం ద్వారా మీరు GigSecure నిబంధనలు మరియు షరతులకు అంగీకరిస్తున్నారు.",
    bm_cancel: "రద్దు చేయండి", bm_buy: "ఇప్పుడు కొనండి →",
    bm_pay_method: "చెల్లింపు పద్ధతి ఎంచుకోండి",
    bm_upi: "📲 UPI", bm_card: "💳 కార్డ్", bm_net: "🏦 నెట్ బ్యాంకింగ్",
    bm_upi_id: "UPI ID", bm_amount_due: "చెల్లించవలసిన మొత్తం",
    bm_card_num: "కార్డ్ నంబర్", bm_card_name: "కార్డ్‌హోల్డర్ పేరు", bm_expiry: "గడువు", bm_cvv: "CVV",
    bm_bank: "మీ బ్యాంక్ ఎంచుకోండి",
    bm_back: "← వెనక్కి", bm_pay: "చెల్లించండి →", bm_processing: "⟳ ప్రాసెస్ అవుతోంది...",
    bm_success_h2: "చెల్లింపు విజయవంతమైంది!", bm_success_p: "పాలసీ ఇప్పుడు చురుకుగా ఉంది.", bm_success_p2: "నేటి నుండి మీరు రక్షించబడ్డారు!",
    bm_plan: "ప్లాన్", bm_status: "స్థితి", bm_pol_id: "పాలసీ ID", bm_close: "మూసివేయండి",
    nm_portal: "GigSecure పోర్టల్",
    hm_title: "GigSecure కి స్వాగతం", hm_sub: "గిగ్ ఎకానమీ కోసం నిర్మించిన బీమా",
    hm_what: "GigSecure అంటే ఏమిటి?",
    hm_what_p: "GigSecure భారతదేశంలో గిగ్ వర్కర్లకు మాత్రమే నిర్మించిన మొదటి మైక్రో-బీమా ప్లాట్‌ఫామ్. మేము ₹99/నెల నుండి ప్రారంభమయ్యే అందుబాటు ప్లాన్లు అందిస్తాము.",
    hm_feats: [
      { icon: "⚡", title: "తక్షణ కవరేజ్", desc: "2 నిమిషాల్లో పేపర్‌వర్క్ లేకుండా కవరేజ్ పొందండి" },
      { icon: "💰", title: "₹99/నెల", desc: "గిగ్ వర్కర్ బడ్జెట్‌కు అనుగుణమైన మైక్రో-ప్లాన్లు" },
      { icon: "📱", title: "డిజిటల్ ఫస్ట్", desc: "మీ ఫోన్ నుండి ఎక్కడ నుండైనా నిర్వహించండి" },
      { icon: "🤝", title: "వేగవంతమైన క్లెయిమ్లు", desc: "24–48 గంటల్లో AI-ఆధారిత క్లెయిమ్ ప్రాసెసింగ్" },
    ],
    hm_numbers: "📊 సంఖ్యల్లో",
    hm_stats: [["50,000+", "గిగ్ వర్కర్లు రక్షించబడ్డారు"], ["₹2Cr+", "క్లెయిమ్లు పరిష్కరించబడ్డాయి"], ["4.8★", "యాప్ రేటింగ్"]],
    am_title: "GigSecure గురించి", am_sub: "మా మిషన్, కథ & టీమ్",
    am_story: "మా కథ",
    am_story_p1: "2024లో హైదరాబాద్‌లో Neural Nexas టీమ్ చేత స్థాపించబడిన GigSecure ఒక సాధారణ పరిశీలన నుండి జన్మించింది: భారతదేశంలో లక్షలాది గిగ్ వర్కర్లు ఏ ఆర్థిక భద్రత లేకుండా ప్రతిరోజూ ప్రమాదాలను ఎదుర్కొంటున్నారు.",
    am_story_p2: "మేము గిగ్ వర్కర్లను ప్రప్రథమ శ్రేణి పౌరులుగా పరిగణించే ఒక ప్లాట్‌ఫామ్‌ను నిర్మించాము.",
    am_values: "మా ప్రధాన విలువలు",
    am_vals: [
      { icon: "🎯", title: "అందుబాటు", desc: "బీమా అందరికీ అందుబాటులో ఉండాలి. మేము ₹99–₹299/నెలలో ప్లాన్లు అందిస్తాము." },
      { icon: "🔍", title: "పారదర్శకత", desc: "దాచిన నిబంధనలు లేవు. ప్రతి పాలసీ సరళమైన భాషలో రాయబడింది." },
      { icon: "🚀", title: "ఆవిష్కరణ", desc: "మేము స్మార్ట్ ప్లాన్ సిఫార్సులు మరియు వేగవంతమైన క్లెయిమ్ ప్రాసెసింగ్ కోసం AI ఉపయోగిస్తాము." },
    ],
    am_team: "🏆 Neural Nexas టీమ్ చేత నిర్మించబడింది",
    am_team_p: "హైదరాబాద్, తెలంగాణలో ఉన్న ఇంజినీర్లు, డిజైనర్లు మరియు బీమా నిపుణుల బృందం.",
    sm_title: "మా సేవలు", sm_sub: "గిగ్ వర్కర్లకు మైక్రో-బీమా ప్లాన్లు",
    sm_intro: "GigSecure నాలుగు అనుకూలీకరించిన బీమా ప్రకారాలను అందిస్తుంది, ప్రతి ఒక్కటి గిగ్ వర్కర్లు ఎదుర్కొనే ప్రత్యేక ప్రమాదాలను పరిష్కరించడానికి రూపొందించబడ్డాయి.",
    sm_from: "నుండి",
    sm_plans: [
      { icon: "🛡️", num: "01", name: "ప్రమాద రక్షణ ప్లాన్లు", color: "#e53e3e", coverage: "₹50,000", premium: "₹99/నెల", desc: "గిగ్ వర్కర్లకు సమగ్ర ప్రమాద కవరేజ్. రోడ్ ప్రమాదాలు, కార్యస్థల గాయాలు మరియు వైకల్యాన్ని కవర్ చేస్తుంది.", features: ["రోడ్ ప్రమాద కవరేజ్", "కార్యస్థల గాయ రక్షణ", "తాత్కాలిక వైకల్య ప్రయోజనం", "యాంబులెన్స్ వ్యయ పరిహారం"] },
      { icon: "🏥", num: "02", name: "ఆరోగ్య కవరేజ్ ఎంపికలు", color: "#3182ce", coverage: "₹1,00,000", premium: "₹199/నెల", desc: "ఆసుపత్రిలో చేరడం, శస్త్రచికిత్సలు మరియు బాహ్య రోగి చికిత్సను కవర్ చేసే అందుబాటు ఆరోగ్య బీమా.", features: ["కాష్‌లెస్ ఆసుపత్రిలో చేరడం", "ముందు & తర్వాత ఆసుపత్రి కవర్", "డే కేర్ విధానాలు", "ఉచిత వార్షిక ఆరోగ్య తనిఖీ"] },
      { icon: "❤️", num: "03", name: "జీవిత భద్రతా ప్లాన్లు", color: "#7B2FBE", coverage: "₹5,00,000", premium: "₹299/నెల", desc: "తక్కువ ప్రీమియంలో అధిక కవరేజ్‌తో టర్మ్ జీవిత బీమా. మీ కుటుంబ ఆర్థిక భవిష్యత్తును సురక్షితపరచండి.", features: ["టర్మ్ జీవిత కవరేజ్", "ప్రమాద మరణ ప్రయోజనం", "48 గంటల్లో నామినీ క్లెయిమ్", "₹5L వరకు వైద్య పరీక్షలు అవసరం లేదు"] },
      { icon: "💼", num: "04", name: "ఆదాయ రక్షణ ప్లాన్లు", color: "#b7791f", coverage: "₹2,00,000", premium: "₹149/నెల", desc: "అనారోగ్యం లేదా గాయం వల్ల పని ఆగిపోతే, మేము మీ ఆదాయాన్ని భర్తీ చేస్తాము.", features: ["మాసిక ఆదాయ భర్తీ", "గాయం వల్ల ఉద్యోగ నష్టం కవర్", "12 నెలల వరకు ప్రయోజన కాలం", "ఫ్రీలాన్స్ & గిగ్ ఆదాయం కవర్"] },
    ],
    sm_coverage_up: "వరకు కవరేజ్",
    blo_title: "GigSecure బ్లాగ్", blo_sub: "గిగ్ వర్కర్లకు అంతర్దృష్టులు, చిట్కాలు & అప్‌డేట్లు",
    blo_read: "మరింత చదవండి →",
    blo_posts: [
      { date: "మే 12, 2026", tag: "గైడ్", title: "ప్రతి గిగ్ వర్కర్ బీమా గురించి తెలుసుకోవలసిన విషయాలు", excerpt: "భారతదేశంలో గిగ్ ఎకానమీ వేగంగా వృద్ధి చెందుతోంది — కానీ గిగ్ వర్కర్లు రక్షించబడ్డారా?", readTime: "5 నిమిషాలు చదవండి", img: "🚗" },
      { date: "మే 8, 2026", tag: "వార్తలు", title: "GigSecure 50 కొత్త నగరాలకు విస్తరిస్తోంది", excerpt: "GigSecure ఇప్పుడు భారతదేశంలో టైర్-2 మరియు టైర్-3 నగరాల్లో గిగ్ వర్కర్లకు అందుబాటులో ఉంది.", readTime: "3 నిమిషాలు చదవండి", img: "🏙️" },
      { date: "మే 1, 2026", tag: "చిట్కా", title: "మీ మొదటి బీమా ప్లాన్‌ను ఎలా ఎంచుకోవాలి", excerpt: "మొదటిసారి బీమా కొనుగోలు చేయడం కష్టంగా అనిపించవచ్చు. మేము దాన్ని సాధారణ దశలలో వివరిస్తాము.", readTime: "4 నిమిషాలు చదవండి", img: "💡" },
      { date: "ఏప్రిల్ 22, 2026", tag: "కథ", title: "ఒక డెలివరీ పార్ట్‌నర్ GigSecure ద్వారా ప్రమాదం తర్వాత కోలుకున్న తీరు", excerpt: "పూణే Zomato డెలివరీ పార్ట్‌నర్ రాజేష్ ₹99/నెల ప్లాన్ ఎలా సహాయపడిందో పంచుకుంటున్నారు.", readTime: "6 నిమిషాలు చదవండి", img: "⭐" },
    ],
    con_title: "సంప్రదించండి", con_sub: "మద్దతు కోసం GigSecureతో సంప్రదించండి",
    con_items: [
      { num: "01", label: "చిరునామా", value: "హైదరాబాద్, తెలంగాణ, భారతదేశం", icon: "📍" },
      { num: "02", label: "కాల్ చేయండి", value: "202-555-0188", icon: "📞" },
      { num: "03", label: "ఇమెయిల్", value: "contact@gigsecure.in", icon: "✉️" },
      { num: "04", label: "సోషల్ మీడియా", value: "Facebook · Twitter · Instagram · LinkedIn", icon: "🌐" },
    ],
    con_reach: "సంప్రదించండి",
    con_reach_p: "మా మైక్రో-బీమా పరిష్కారాలకు సంబంధించిన ఏవైనా ప్రశ్నలు లేదా సందేహాలతో మీకు సహాయం చేయడానికి మేము ఇక్కడ ఉన్నాము.",
    con_fname: "మొదటి పేరు", con_lname: "చివరి పేరు", con_email: "ఇమెయిల్", con_msg: "సందేశం",
    con_msg_ph: "మీ సందేశం...", con_submit: "సమర్పించండి →",
  }
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

// ── LANGUAGE SWITCHER ─────────────────────────────────────────────────────────
function LangSwitcher({ lang, setLang }) {
  const opts = [{ code: "en", label: "EN" }, { code: "hi", label: "हि" }, { code: "te", label: "తె" }];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "4px 6px" }}>
      <span style={{ color: "#aaa", fontSize: 11, marginRight: 4 }}>🌐</span>
      {opts.map(o => (
        <button key={o.code} onClick={() => setLang(o.code)} style={{
          padding: "5px 10px", borderRadius: 6, border: "none",
          background: lang === o.code ? C.purple : "transparent",
          color: lang === o.code ? C.white : "#aaa",
          fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit",
          transition: "all 0.18s"
        }}>{o.label}</button>
      ))}
    </div>
  );
}

// ── NAV MODAL ─────────────────────────────────────────────────────────────────
function NavModal({ page, onClose, t }) {
  const content = {
    Home: { title: t.hm_title, subtitle: t.hm_sub, body: (
      <div>
        <div style={{ background: `linear-gradient(135deg,${C.dark},#2d1b6e)`, borderRadius: 14, padding: 32, marginBottom: 24, color: C.white }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🛡️</div>
          <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 10 }}>{t.hm_what}</h3>
          <p style={{ color: "#bbb", lineHeight: 1.7, fontSize: 14 }}>{t.hm_what_p}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
          {t.hm_feats.map((f, i) => (
            <div key={i} style={{ background: C.lavender, borderRadius: 12, padding: 18 }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{f.title}</div>
              <div style={{ color: C.textMuted, fontSize: 12, lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.purple+"11", border:`1px solid ${C.purple}33`, borderRadius: 12, padding: 20 }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, color: C.purple }}>{t.hm_numbers}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {t.hm_stats.map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 900, fontSize: 20, color: C.purple }}>{v}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )},
    About: { title: t.am_title, subtitle: t.am_sub, body: (
      <div>
        <div style={{ background: `linear-gradient(135deg,${C.dark},#2d1b6e)`, borderRadius: 14, padding: 32, marginBottom: 24, color: C.white }}>
          <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>{t.am_story}</h3>
          <p style={{ color: "#bbb", lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>{t.am_story_p1}</p>
          <p style={{ color: "#bbb", lineHeight: 1.8, fontSize: 14 }}>{t.am_story_p2}</p>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>{t.am_values}</div>
          {t.am_vals.map((v, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, padding: 18, background: C.lavender, borderRadius: 12 }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{v.icon}</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                <div style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: C.purple+"11", border:`1px solid ${C.purple}33`, borderRadius: 12, padding: 20 }}>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 10, color: C.purple }}>{t.am_team}</div>
          <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.6 }}>{t.am_team_p}</p>
        </div>
      </div>
    )},
    Services: { title: t.sm_title, subtitle: t.sm_sub, body: (
      <div>
        <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{t.sm_intro}</p>
        {t.sm_plans.map((s, i) => (
          <div key={i} style={{ borderRadius: 14, border:`1px solid ${C.border}`, overflow:"hidden", marginBottom: 20 }}>
            <div style={{ background: C.dark, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 28 }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#ffffff55", fontSize: 13, fontWeight: 700 }}>{s.num}.</div>
                <div style={{ color: C.white, fontWeight: 800, fontSize: 16 }}>{s.name}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#aaa", fontSize: 11 }}>{t.sm_from}</div>
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
                <span style={{ fontSize: 12, color: C.textMuted }}>{t.sm_coverage_up}</span>
                <span style={{ fontWeight: 900, color: C.purple, fontSize: 16 }}>{s.coverage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )},
    Blog: { title: t.blo_title, subtitle: t.blo_sub, body: (
      <div>
        {t.blo_posts.map((post, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 14, border:`1px solid ${C.border}`, overflow:"hidden", marginBottom: 18 }}>
            <div style={{ background:`linear-gradient(135deg,${C.dark},#2d1b6e)`, padding: "24px", display: "flex", alignItems: "center", gap: 16 }}>
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
                <span style={{ color: C.purple, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{t.blo_read}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )},
    Contact: { title: t.con_title, subtitle: t.con_sub, body: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
          {t.con_items.map((c, i) => (
            <div key={i} style={{ background: C.lavender, borderRadius: 12, padding: 18 }}>
              <div style={{ color: C.purple, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>{c.num}</div>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{c.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{c.label}</div>
              <div style={{ color: C.textMuted, fontSize: 12 }}>{c.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 14, border:`1px solid ${C.border}`, padding: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{t.con_reach}</div>
          <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 20 }}>{t.con_reach_p}</p>
          {[[t.con_fname, "text"], [t.con_lname, "text"], [t.con_email, "email"]].map(([lbl, tp]) => (
            <div key={lbl} style={{ marginBottom: 14 }}>
              <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{lbl} <span style={{ color: "red" }}>*</span></label>
              <input type={tp} placeholder={lbl} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          ))}
          <div style={{ marginBottom: 14 }}>
            <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{t.con_msg}</label>
            <textarea placeholder={t.con_msg_ph} rows={4} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} />
          </div>
          <PurpleBtn style={{ width: "100%", padding: "13px", fontSize: 14, borderRadius: 8 }}>{t.con_submit}</PurpleBtn>
        </div>
      </div>
    )},
  };
  const c = content[page];
  if (!c) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 999, display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", padding: "40px 20px" }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 640, boxShadow: "0 24px 80px rgba(0,0,0,0.3)", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
        <div style={{ background: `linear-gradient(135deg,${C.dark} 0%,#2d1b6e 100%)`, padding: "28px 32px", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.1)", border: "none", color: C.white, width: 32, height: 32, borderRadius: 8, fontSize: 18, cursor: "pointer" }}>×</button>
          <div style={{ color: C.purple, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>{t.nm_portal}</div>
          <h2 style={{ color: C.white, fontSize: 26, fontWeight: 900, margin: "0 0 4px" }}>{c.title}</h2>
          <p style={{ color: "#aaa", fontSize: 13 }}>{c.subtitle}</p>
        </div>
        <div style={{ padding: "28px 32px", maxHeight: "65vh", overflowY: "auto" }}>{c.body}</div>
      </div>
    </div>
  );
}

// ── BUY MODAL ─────────────────────────────────────────────────────────────────
function BuyPlanModal({ plan, onClose, onPaid, t }) {
  const [step, setStep]         = useState("confirm");
  const [payMethod, setPayMethod] = useState("upi");
  const [upiId, setUpiId]       = useState("");
  const [cardNum, setCardNum]   = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv]   = useState("");
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setStep("success"); if (onPaid) onPaid(plan); }, 2000);
  };

  if (step === "success") return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 440, padding: 48, textAlign: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }} onClick={e => e.stopPropagation()}>
        <div style={{ width: 80, height: 80, background: "#00C89622", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, margin: "0 auto 20px" }}>✅</div>
        <h2 style={{ fontWeight: 900, fontSize: 26, color: "#00A876", marginBottom: 8 }}>{t.bm_success_h2}</h2>
        <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
          <strong style={{ color: C.text }}>{plan.name}</strong> {t.bm_success_p}<br />{t.bm_success_p2}
        </p>
        <div style={{ background: C.lavender, borderRadius: 12, padding: 20, marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, textAlign: "left" }}>
            {[[t.bm_plan, plan.name],[t.bm_type||"Type", plan.type],[t.bm_coverage, plan.coverage],[t.bm_monthly, plan.premium],[t.bm_pol_id, `POL-${Date.now().toString().slice(-6)}`],[t.bm_status, "✅ Active"]].map(([k,v]) => (
              <div key={k}>
                <div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: k === t.bm_status ? "#00A876" : C.text }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <PurpleBtn onClick={onClose} style={{ width: "100%", padding: "13px", fontSize: 14, borderRadius: 8 }}>{t.bm_close}</PurpleBtn>
      </div>
    </div>
  );

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: C.white, borderRadius: 18, width: "100%", maxWidth: 460, boxShadow: "0 24px 80px rgba(0,0,0,0.3)", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
        <div style={{ background: `linear-gradient(135deg,${C.dark},#2d1b6e)`, padding: "24px 28px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 32 }}>{plan.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#aaa", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>{step === "confirm" ? t.bm_confirm : t.bm_payment}</div>
            <div style={{ color: C.white, fontWeight: 900, fontSize: 18 }}>{plan.name}</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: C.white, width: 32, height: 32, borderRadius: 8, fontSize: 18, cursor: "pointer" }}>×</button>
        </div>
        <div style={{ padding: 28 }}>
          {step === "confirm" && (
            <>
              <div style={{ background: C.lavender, borderRadius: 12, padding: 20, marginBottom: 20 }}>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 12 }}>{t.bm_summary}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[[t.bm_type||"Type", plan.type],[t.bm_coverage, plan.coverage],[t.bm_monthly, plan.premium],[t.bm_start, t.bm_today]].map(([k,v]) => (
                    <div key={k}>
                      <div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{k}</div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: C.purple+"11", border:`1px solid ${C.purple}33`, borderRadius: 10, padding: 14, marginBottom: 24, fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>{t.bm_note}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <PurpleBtn outline onClick={onClose} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8 }}>{t.bm_cancel}</PurpleBtn>
                <PurpleBtn onClick={() => setStep("payment")} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8 }}>{t.bm_buy}</PurpleBtn>
              </div>
            </>
          )}
          {step === "payment" && (
            <>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>{t.bm_pay_method}</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {[["upi", t.bm_upi],["card", t.bm_card],["netbanking", t.bm_net]].map(([id, label]) => (
                  <button key={id} onClick={() => setPayMethod(id)} style={{ flex: 1, padding: "10px 6px", borderRadius: 8, border:`2px solid ${payMethod===id ? C.purple : C.border}`, background: payMethod===id ? C.purple+"11" : C.white, color: payMethod===id ? C.purple : C.textMuted, fontWeight: 700, fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>{label}</button>
                ))}
              </div>
              {payMethod === "upi" && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 8 }}>{t.bm_upi_id}</label>
                  <input value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="yourname@upi" style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                  <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["@okaxis","@paytm","@ybl","@oksbi"].map(suffix => (
                      <span key={suffix} onClick={() => setUpiId(prev => prev.split("@")[0]+suffix)} style={{ background: C.lavender, color: C.purple, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20, cursor: "pointer" }}>{suffix}</span>
                    ))}
                  </div>
                </div>
              )}
              {payMethod === "card" && (
                <div style={{ marginBottom: 20 }}>
                  {[[t.bm_card_num,"cardNum",cardNum,setCardNum,"1234 5678 9012 3456",19],[t.bm_card_name,"cardName",cardName,setCardName,"Name on card",null]].map(([lbl,,val,setter,ph,ml]) => (
                    <div key={lbl} style={{ marginBottom: 14 }}>
                      <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{lbl}</label>
                      <input value={val} onChange={e => setter(e.target.value)} placeholder={ph} maxLength={ml} style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{t.bm_expiry}</label>
                      <input value={cardExpiry} onChange={e => setCardExpiry(e.target.value)} placeholder="MM/YY" maxLength={5} style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                    <div>
                      <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{t.bm_cvv}</label>
                      <input value={cardCvv} onChange={e => setCardCvv(e.target.value)} placeholder="•••" maxLength={3} type="password" style={{ width: "100%", padding: "12px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                    </div>
                  </div>
                </div>
              )}
              {payMethod === "netbanking" && (
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 10 }}>{t.bm_bank}</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {["SBI","HDFC","ICICI","Axis","Kotak","Yes Bank"].map(bank => (
                      <button key={bank} style={{ padding: "10px", borderRadius: 8, border:`1px solid ${C.border}`, background: C.lavender, color: C.text, fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>{bank}</button>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ background: C.lavender, borderRadius: 10, padding: "14px 16px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{t.bm_amount_due}</span>
                <span style={{ fontWeight: 900, fontSize: 20, color: C.purple }}>{plan.premium}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <PurpleBtn outline onClick={() => setStep("confirm")} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8 }}>{t.bm_back}</PurpleBtn>
                <PurpleBtn onClick={handlePay} style={{ width: "100%", padding: "13px", fontSize: 13, borderRadius: 8, opacity: processing ? 0.7 : 1 }}>
                  {processing ? t.bm_processing : t.bm_pay}
                </PurpleBtn>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── LANDING ───────────────────────────────────────────────────────────────────
function LandingPage({ goLogin, lang, setLang }) {
  const [navModal, setNavModal] = useState(null);
  const t = T[lang];
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: C.text, background: C.white }}>
      {navModal && <NavModal page={navModal} onClose={() => setNavModal(null)} t={t} />}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px", background: C.dark, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ color: C.white, fontWeight: 900, fontSize: 22 }}>GigSecure</div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[t.nav_home, t.nav_about, t.nav_services, t.nav_blog, t.nav_contact].map((n, i) => {
            const keys = ["Home","About","Services","Blog","Contact"];
            return (
              <span key={i} onClick={() => setNavModal(keys[i])} style={{ color: "#bbb", fontSize: 13, cursor: "pointer", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = C.white}
                onMouseLeave={e => e.target.style.color = "#bbb"}>{n}</span>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          <PurpleBtn onClick={goLogin} style={{ padding: "9px 22px", fontSize: 12 }}>{t.nav_login}</PurpleBtn>
        </div>
      </nav>

      <div style={{ background: "linear-gradient(rgba(26,26,46,0.75),rgba(26,26,46,0.85)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400') center/cover", minHeight: 520, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 40px" }}>
        <div style={{ color: "#ccc", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>{t.hero_tag}</div>
        <h1 style={{ color: C.white, fontSize: 50, fontWeight: 900, lineHeight: 1.15, maxWidth: 680, margin: "0 0 20px" }}>
          {t.hero_h1[0]}<br />{t.hero_h1[1]}
        </h1>
        <p style={{ color: "#ccc", fontSize: 15, maxWidth: 540, lineHeight: 1.7, margin: "0 0 36px" }}>{t.hero_p}</p>
        <PurpleBtn onClick={goLogin} style={{ fontSize: 14, padding: "14px 44px", letterSpacing: 2 }}>{t.hero_btn}</PurpleBtn>
      </div>

      <div style={{ background: C.lavender, padding: "64px 48px" }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ color: C.purple, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{t.wwa_tag}</div>
          <h2 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.2, marginBottom: 18 }}>{t.wwa_h2[0]}<br />{t.wwa_h2[1]}</h2>
          <p style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.6, marginBottom: 14 }}>{t.wwa_p1}</p>
          <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>{t.wwa_p2}</p>
          <PurpleBtn outline onClick={() => setNavModal("About")} style={{ padding: "10px 24px", fontSize: 12 }}>{t.wwa_btn}</PurpleBtn>
        </div>
      </div>

      <div style={{ background: C.white, padding: "64px 48px" }}>
        <div style={{ color: C.purple, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>{t.svc_tag}</div>
        <h2 style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>{t.svc_h2}</h2>
        <p style={{ color: C.textMuted, fontSize: 14, marginBottom: 36 }}>{t.svc_p}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {plans.map(plan => (
            <div key={plan.id} style={{ borderRadius: 16, background: `linear-gradient(rgba(26,26,46,0.68),rgba(26,26,46,0.78)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600') center/cover`, padding: "32px 28px", color: C.white, minHeight: 190 }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#ffffff55" }}>{plan.num}.</div>
              <div style={{ width: 40, height: 3, background: C.purple, margin: "8px 0 10px" }} />
              <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 6 }}>{plan.icon} {plan.name}</div>
              <div style={{ fontSize: 12, color: "#bbb", marginBottom: 14 }}>{t.svc_coverage} {plan.coverage}</div>
              <span onClick={() => setNavModal("Services")} style={{ color: C.purple, fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>{t.svc_learn}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: C.white, padding: "64px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: C.purple, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>{t.why_tag}</div>
          <h2 style={{ fontSize: 34, fontWeight: 900, marginBottom: 10 }}>{t.why_h2[0]}<br />{t.why_h2[1]}</h2>
        </div>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          {t.why_items.map((item, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <div style={{ color: C.purple, fontWeight: 700, fontSize: 13, letterSpacing: 1, marginBottom: 8 }}>{item.n}</div>
              <div style={{ height: 1, background: C.border, marginBottom: 14 }} />
              <h3 style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: C.dark, padding: "72px 48px", textAlign: "center" }}>
        <div style={{ color: "#888", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>{t.cta_tag}</div>
        <h2 style={{ color: C.white, fontSize: 42, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>{t.cta_h2[0]}<br />{t.cta_h2[1]}</h2>
        <p style={{ color: "#999", fontSize: 14, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>{t.cta_p}</p>
        <PurpleBtn onClick={goLogin} style={{ fontSize: 14, padding: "14px 48px", letterSpacing: 2 }}>{t.cta_btn}</PurpleBtn>
      </div>
      <div style={{ background: "#111", padding: "22px 48px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "#555", fontSize: 12 }}>{t.footer_copy}</div>
        <div style={{ color: C.purple, fontSize: 12 }}>contact@example.com</div>
      </div>
    </div>
  );
}

// ── AUTH ──────────────────────────────────────────────────────────────────────
function AuthPage({ goHome, goDashboard, lang, setLang }) {
  const t = T[lang];
  const [tab, setTab]   = useState("login");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", workType: "delivery" });
  const [error, setError] = useState("");
  const handle = () => {
    if (!form.email || !form.password) { setError(t.auth_error); return; }
    goDashboard(form.name || "Ravi Kumar");
  };
  return (
    <div style={{ minHeight: "100vh", background: C.lavender, fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ background: C.dark, padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: C.white, fontWeight: 900, fontSize: 20 }}>GigSecure</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <LangSwitcher lang={lang} setLang={setLang} />
          <span onClick={goHome} style={{ color: "#aaa", fontSize: 13, cursor: "pointer" }}>{t.nav_back}</span>
        </div>
      </nav>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 20px" }}>
        <div style={{ background: C.white, borderRadius: 16, padding: "40px 44px", width: "100%", maxWidth: 420, boxShadow: "0 8px 40px rgba(123,47,190,0.12)" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ width: 52, height: 52, background: C.purple, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 12px" }}>🛡️</div>
            <div style={{ fontWeight: 900, fontSize: 22, color: C.text }}>GigSecure</div>
            <div style={{ color: C.textMuted, fontSize: 12, marginTop: 4 }}>{t.auth_subtitle}</div>
          </div>
          <div style={{ display: "flex", background: C.lavender, borderRadius: 8, padding: 4, marginBottom: 28 }}>
            {["login","register"].map(tab2 => (
              <button key={tab2} onClick={() => { setTab(tab2); setError(""); }} style={{ flex: 1, padding: "9px 0", borderRadius: 6, border: "none", background: tab===tab2 ? C.purple : "transparent", color: tab===tab2 ? C.white : C.textMuted, fontWeight: 700, fontSize: 13, cursor: "pointer", textTransform: "capitalize", transition: "all 0.2s", fontFamily: "inherit" }}>
                {tab2 === "login" ? t.auth_login : t.auth_register}
              </button>
            ))}
          </div>
          {tab === "register" && (
            <>
              {[[t.auth_name,"name","e.g. Ravi Kumar"],[t.auth_phone,"phone","+91 98765 43210"]].map(([lbl,key,ph]) => (
                <div key={key} style={{ marginBottom: 16 }}>
                  <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{lbl}</label>
                  <input value={form[key]} onChange={e => setForm({...form,[key]:e.target.value})} placeholder={ph} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{t.auth_worktype}</label>
                <select value={form.workType} onChange={e => setForm({...form,workType:e.target.value})} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                  <option value="delivery">{t.auth_work_delivery}</option>
                  <option value="driver">{t.auth_work_driver}</option>
                  <option value="freelancer">{t.auth_work_freelancer}</option>
                  <option value="construction">{t.auth_work_construction}</option>
                  <option value="domestic">{t.auth_work_domestic}</option>
                </select>
              </div>
            </>
          )}
          {[[t.auth_email,"email","you@example.com","text"],[t.auth_password,"password","••••••••","password"]].map(([lbl,key,ph,tp]) => (
            <div key={key} style={{ marginBottom: 16 }}>
              <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{lbl} <span style={{ color: "red" }}>*</span></label>
              <input type={tp} value={form[key]} onChange={e => setForm({...form,[key]:e.target.value})} placeholder={ph} style={{ width: "100%", padding: "11px 14px", borderRadius: 8, background: C.inputBg, border:`1px solid ${C.border}`, color: C.text, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          ))}
          {error && <div style={{ color: "#e53e3e", fontSize: 12, marginBottom: 12 }}>{error}</div>}
          <PurpleBtn onClick={handle} style={{ width: "100%", padding: "13px", fontSize: 14, borderRadius: 8, marginBottom: 16 }}>
            {tab === "login" ? t.auth_btn_login : t.auth_btn_register}
          </PurpleBtn>
          <div style={{ textAlign: "center", fontSize: 12, color: C.textMuted }}>
            {tab === "login"
              ? <span>{t.auth_no_account} <span onClick={() => setTab("register")} style={{ color: C.purple, cursor: "pointer", fontWeight: 700 }}>{t.auth_register_link}</span></span>
              : <span>{t.auth_have_account} <span onClick={() => setTab("login")} style={{ color: C.purple, cursor: "pointer", fontWeight: 700 }}>{t.auth_login_link}</span></span>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard({ userName, goHome, lang, setLang }) {
  const t = T[lang];
  const [active, setActive] = useState("dashboard");
  const navItems = [
    { id:"dashboard",  label: t.dash_dashboard, icon:"◈" },
    { id:"plans",      label: t.dash_plans,     icon:"◉" },
    { id:"calculator", label: t.dash_calc,      icon:"◎" },
    { id:"ai",         label: t.dash_ai,        icon:"✦" },
    { id:"claims",     label: t.dash_claims,    icon:"◐" },
    { id:"policies",   label: t.dash_policies,  icon:"◑" },
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
            <button key={item.id} onClick={() => setActive(item.id)} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: active===item.id ? C.purple : "transparent", color: active===item.id ? C.white : "#8899BB", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 3, textAlign: "left", transition: "all 0.2s" }}>
              <span>{item.icon}</span>{item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px 22px", borderTop: "1px solid #ffffff15" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.purple, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 800, fontSize: 15 }}>{userName.charAt(0).toUpperCase()}</div>
            <div>
              <div style={{ color: C.white, fontSize: 13, fontWeight: 700 }}>{userName}</div>
              <div style={{ color: "#00C896", fontSize: 11 }}>{t.dash_active}</div>
            </div>
          </div>
          <div style={{ marginBottom: 8 }}><LangSwitcher lang={lang} setLang={setLang} /></div>
          <button onClick={goHome} style={{ width: "100%", padding: "7px", background: "transparent", border: "1px solid #ffffff22", borderRadius: 6, color: "#8899BB", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>{t.dash_back}</button>
        </div>
      </aside>
      <main style={{ flex: 1, background: C.lavender, overflowY: "auto" }}>
        <div style={{ background: C.white, padding: "16px 36px", borderBottom:`1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: C.text }}>{navItems.find(n => n.id===active)?.label}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00C896" }} />
            <span style={{ fontSize: 12, color: C.textMuted }}>{t.dash_systems}</span>
          </div>
        </div>
        <div style={{ padding: "32px 36px" }}>
          {active==="dashboard"  && <DBHome userName={userName} t={t} />}
          {active==="plans"      && <DBPlans t={t} />}
          {active==="calculator" && <DBCalc t={t} />}
          {active==="ai"         && <DBAI t={t} />}
          {active==="claims"     && <DBClaims t={t} />}
          {active==="policies"   && <DBPolicies t={t} />}
        </div>
      </main>
    </div>
  );
}

function DBHome({ userName, t }) {
  const stats = [
    { label: t.db_stat_plans,    value: "2",     color: C.purple },
    { label: t.db_stat_coverage, value: "₹1.5L", color: "#2B6CB0" },
    { label: t.db_stat_claims,   value: "1",     color: "#C53030" },
    { label: t.db_stat_premium,  value: "Jun 1", color: "#B7791F" },
  ];
  return (
    <div>
      <h2 style={{ fontWeight: 900, fontSize: 24, marginBottom: 4 }}>{t.db_welcome} {userName} 👋</h2>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 28 }}>{t.db_overview}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: C.white, borderRadius: 12, padding: "20px", borderTop:`3px solid ${s.color}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <div style={{ color: s.color, fontSize: 26, fontWeight: 900, marginBottom: 4 }}>{s.value}</div>
            <div style={{ color: C.textMuted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: C.white, borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 16 }}>{t.db_active_policies}</div>
          {[t.db_pol1, t.db_pol2].map((p,i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom:`1px solid ${C.border}` }}>
              <span style={{ color: C.textMuted, fontSize: 13 }}>{p}</span>
              <span style={{ background: C.purple+"22", color: C.purple, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{t.db_active_badge}</span>
            </div>
          ))}
        </div>
        <div style={{ background: C.white, borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 16 }}>{t.db_recent}</div>
          {[[t.db_act1,t.db_ago1,"#00C896"],[t.db_act2,t.db_ago2,"#F6AD55"],[t.db_act3,t.db_ago3,C.purple]].map(([txt,time,dot],i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: dot, marginTop: 4, flexShrink: 0 }} />
              <div>
                <div style={{ color: C.textMuted, fontSize: 12 }}>{txt}</div>
                <div style={{ color: C.textLight, fontSize: 11 }}>{time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DBPlans({ t }) {
  const [buyModal, setBuyModal] = useState(null);
  const [paid, setPaid]         = useState([]);
  return (
    <>
      {buyModal && <BuyPlanModal plan={buyModal} onClose={() => setBuyModal(null)} onPaid={plan => setPaid(p => [...p, plan.id])} t={t} />}
      <div>
        <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{t.pl_h2}</h2>
        <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 28 }}>{t.pl_p}</p>
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
                  <div><div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>{t.pl_coverage}</div><div style={{ fontWeight: 800, fontSize: 16 }}>{plan.coverage}</div></div>
                  <div style={{ textAlign: "right" }}><div style={{ color: C.textLight, fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>{t.pl_premium}</div><div style={{ fontWeight: 800, fontSize: 16, color: C.purple }}>{plan.premium}</div></div>
                </div>
                {paid.includes(plan.id)
                  ? <div style={{ width:"100%", padding:"11px", fontSize:13, borderRadius:8, background:"#00C89622", color:"#00A876", fontWeight:800, textAlign:"center", border:`1px solid #00C89644` }}>{t.pl_active}</div>
                  : <PurpleBtn onClick={() => setBuyModal(plan)} style={{ width:"100%", padding:"11px", fontSize:13, borderRadius:8 }}>{t.pl_buy}</PurpleBtn>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DBCalc({ t }) {
  const [age, setAge]       = useState(28);
  const [income, setIncome] = useState(15000);
  const [type, setType]     = useState("delivery");
  const [result, setResult] = useState(null);
  const calc = () => {
    const base = type==="delivery" ? 120 : type==="driver" ? 150 : 100;
    const af = age>40 ? 1.3 : age>30 ? 1.1 : 1.0;
    const inf = income<10000 ? 0.8 : income<20000 ? 1.0 : 1.2;
    setResult(Math.round(base*af*inf));
  };
  return (
    <div style={{ maxWidth: 480 }}>
      <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 4 }}>{t.calc_h2}</h2>
      <p style={{ color: C.textMuted, fontSize: 13, marginBottom: 24 }}>{t.calc_p}</p>
      <div style={{ background: C.white, borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
        <DField label={t.calc_age} value={age} setter={setAge} type="number" />
        <DField label={t.calc_income} value={income} setter={setIncome} type="number" />
        <div style={{ marginBottom: 20 }}>
          <label style={{ color: C.textMuted, fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6 }}>{t.calc_worktype}</label>
          <select value={type} onChange={e => setType(e.target.value)} style={{ width:"100%", padding:"11px 14px", borderRadius:8, background:C.inputBg, border:`1px solid ${C.border}`, color:C.text, fontSize:14, outline:"none", fontFamily:"inherit" }}>
            <option value="delivery">{t.calc_delivery}</option>
            <option value="driver">{t.calc_driver}</option>
            <option value="freelancer">{t.calc_freelancer}</option>
          </select>
        </div>
        <PurpleBtn onClick={calc} style={{ width:"100%", padding:"13px", borderRadius:8, fontSize:14 }}>{t.calc_btn}</PurpleBtn>
        {result && (
          <div style={{ marginTop:20, background:C.lavender, borderRadius:10, padding:20, textAlign:"center", border:`1px solid ${C.purple}44` }}>
            <div style={{ color:C.textMuted, fontSize:12, marginBottom:4 }}>{t.calc_result_label}</div>
            <div style={{ color:C.purple, fontSize:36, fontWeight:900 }}>₹{result}</div>
            <div style={{ color:C.textMuted, fontSize:11, marginTop:4 }}>{t.calc_result_sub}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function DBAI({ t }) {
  const [age, setAge]         = useState("");
  const [income, setIncome]   = useState("");
  const [risk, setRisk]       = useState("medium");
  const [loading, setLoading] = useState(false);
  const [rec, setRec]         = useState(null);
  const run = () => {
    if (!age || !income) return;
    setLoading(true); setRec(null);
    setTimeout(() => {
      const n = Number(income);
      let r = n<15000 ? [plans[0]] : n<30000 ? [plans[0],plans[1]] : [plans[1],plans[2]];
      if (risk==="high") r = [plans[2],plans[3]];
      setRec(r); setLoading(false);
    }, 1800);
  };
  return (
    <div style={{ maxWidth: 500 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
        <span style={{ background:C.purple, color:C.white, borderRadius:6, padding:"4px 10px", fontSize:11, fontWeight:700, letterSpacing:1 }}>{t.ai_tag}</span>
        <h2 style={{ fontWeight:900, fontSize:22, margin:0 }}>{t.ai_h2}</h2>
      </div>
      <p style={{ color:C.textMuted, fontSize:13, marginBottom:24 }}>{t.ai_p}</p>
      <div style={{ background:C.white, borderRadius:14, padding:28, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", marginBottom:16 }}>
        <DField label={t.ai_age} value={age} setter={setAge} placeholder="e.g. 27" />
        <DField label={t.ai_income} value={income} setter={setIncome} placeholder="e.g. 18000" />
        <div style={{ marginBottom:24 }}>
          <label style={{ color:C.textMuted, fontSize:12, fontWeight:600, display:"block", marginBottom:8 }}>{t.ai_risk}</label>
          <div style={{ display:"flex", gap:8 }}>
            {[["low",t.ai_low],["medium",t.ai_medium],["high",t.ai_high]].map(([r,label]) => (
              <button key={r} onClick={() => setRisk(r)} style={{ flex:1, padding:"9px", borderRadius:8, border:`2px solid ${risk===r ? C.purple : C.border}`, background:risk===r ? C.purple : C.white, color:risk===r ? C.white : C.textMuted, fontWeight:700, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>{label}</button>
            ))}
          </div>
        </div>
        <PurpleBtn onClick={run} style={{ width:"100%", padding:"13px", borderRadius:8, fontSize:14, opacity:loading ? 0.7 : 1 }}>
          {loading ? t.ai_analyzing : t.ai_btn}
        </PurpleBtn>
      </div>
      {rec && (
        <div style={{ background:C.white, borderRadius:14, padding:24, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", border:`1px solid ${C.purple}44` }}>
          <div style={{ color:C.purple, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:14 }}>{t.ai_result_tag}</div>
          {rec.map(plan => (
            <div key={plan.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:`1px solid ${C.border}` }}>
              <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                <span style={{ fontSize:20 }}>{plan.icon}</span>
                <div>
                  <div style={{ fontWeight:700, fontSize:14 }}>{plan.name}</div>
                  <div style={{ color:C.textMuted, fontSize:11 }}>{plan.type} · {plan.coverage}</div>
                </div>
              </div>
              <div style={{ color:C.purple, fontWeight:900, fontSize:16 }}>{plan.premium}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DBClaims({ t }) {
  const [form, setForm] = useState({ policy:"", reason:"", amount:"", date:"" });
  const [done, setDone] = useState(false);
  if (done) return (
    <div style={{ textAlign:"center", paddingTop:60 }}>
      <div style={{ fontSize:56, marginBottom:16 }}>✅</div>
      <h2 style={{ fontWeight:900, fontSize:24, color:C.purple, marginBottom:8 }}>{t.cl_done_h2}</h2>
      <p style={{ color:C.textMuted, marginBottom:6 }}>{t.cl_done_id} <strong>CLM-{Date.now().toString().slice(-6)}</strong></p>
      <p style={{ color:C.textLight, fontSize:12, marginBottom:24 }}>{t.cl_done_p}</p>
      <span style={{ background:C.purple+"22", color:C.purple, padding:"5px 14px", borderRadius:20, fontSize:12, fontWeight:700 }}>{t.cl_done_badge}</span>
      <div style={{ marginTop:24 }}><PurpleBtn outline onClick={() => { setDone(false); setForm({policy:"",reason:"",amount:"",date:""}); }}>{t.cl_done_another}</PurpleBtn></div>
    </div>
  );
  return (
    <div style={{ maxWidth:480 }}>
      <h2 style={{ fontWeight:900, fontSize:22, marginBottom:4 }}>{t.cl_h2}</h2>
      <p style={{ color:C.textMuted, fontSize:13, marginBottom:24 }}>{t.cl_p}</p>
      <div style={{ background:C.white, borderRadius:14, padding:28, boxShadow:"0 2px 12px rgba(0,0,0,0.07)" }}>
        {[[t.cl_policy,"policy",t.cl_policy_ph,"text"],[t.cl_reason,"reason",t.cl_reason_ph,"text"],[t.cl_amount,"amount",t.cl_amount_ph,"text"],[t.cl_date,"date","","date"]].map(([lbl,key,ph,tp]) => (
          <div key={key} style={{ marginBottom:16 }}>
            <label style={{ color:C.textMuted, fontSize:12, fontWeight:600, display:"block", marginBottom:6 }}>{lbl}</label>
            <input value={form[key]} onChange={e => setForm({...form,[key]:e.target.value})} placeholder={ph} type={tp} style={{ width:"100%", padding:"11px 14px", borderRadius:8, background:C.inputBg, border:`1px solid ${C.border}`, color:C.text, fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }} />
          </div>
        ))}
        <div style={{ border:`2px dashed ${C.border}`, borderRadius:10, padding:20, textAlign:"center", color:C.textMuted, fontSize:12, marginBottom:20 }}>
          📎 {t.cl_upload}<br /><span style={{ color:C.purple, cursor:"pointer", fontWeight:600 }}>{t.cl_browse}</span>
        </div>
        <PurpleBtn onClick={() => setDone(true)} style={{ width:"100%", padding:"13px", borderRadius:8, fontSize:14 }}>{t.cl_btn}</PurpleBtn>
      </div>
    </div>
  );
}

function DBPolicies({ t }) {
  const pols = [
    { id:"POL-001", plan:"Basic Shield",  type:"Accident", purchased:"Jan 12, 2026", validity:"Jan 12, 2027", coverage:"₹50,000" },
    { id:"POL-002", plan:"Health Guard",  type:"Health",   purchased:"Mar 5, 2026",  validity:"Mar 5, 2027",  coverage:"₹1,00,000" },
  ];
  return (
    <div>
      <h2 style={{ fontWeight:900, fontSize:22, marginBottom:4 }}>{t.po_h2}</h2>
      <p style={{ color:C.textMuted, fontSize:13, marginBottom:24 }}>{t.po_p}</p>
      {pols.map(p => (
        <div key={p.id} style={{ background:C.white, borderRadius:14, padding:24, marginBottom:14, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", borderLeft:`4px solid ${C.purple}` }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
            <div><div style={{ fontWeight:800, fontSize:18 }}>{p.plan}</div><div style={{ color:C.textMuted, fontSize:12, marginTop:2 }}>{p.id} · {p.type}</div></div>
            <span style={{ background:C.purple+"22", color:C.purple, padding:"4px 12px", borderRadius:20, fontSize:11, fontWeight:700 }}>{t.po_active}</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
            {[[t.po_coverage,p.coverage],[t.po_purchased,p.purchased],[t.po_valid,p.validity]].map(([k,v]) => (
              <div key={k}>
                <div style={{ color:C.textLight, fontSize:10, letterSpacing:1, textTransform:"uppercase", marginBottom:3 }}>{k}</div>
                <div style={{ color:C.text, fontSize:13, fontWeight:600 }}>{v}</div>
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
  const [lang, setLang]         = useState("en");
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background: #F0EBF8; }
        button:hover { opacity:0.88; }
        select option { background:#fff; }
      `}</style>
      {page==="landing"   && <LandingPage goLogin={() => setPage("auth")} lang={lang} setLang={setLang} />}
      {page==="auth"      && <AuthPage goHome={() => setPage("landing")} goDashboard={n => { setUserName(n||"Ravi Kumar"); setPage("dashboard"); }} lang={lang} setLang={setLang} />}
      {page==="dashboard" && <Dashboard userName={userName} goHome={() => setPage("landing")} lang={lang} setLang={setLang} />}
    </>
  );
}
