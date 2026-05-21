<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book a Detail — Three Crowns Mobile Detailing</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --gold: #C9A84C;
    --gold-light: #E2C97E;
    --gold-dim: #8a6f2e;
    --green-deep: #0A160C;
    --green-mid: #0F1E12;
    --green-card: #152019;
    --green-border: #1E2E22;
    --off-white: #F0EDE4;
    --text-muted: #7A8C7D;
    --white: #FFFFFF;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--green-deep);
    color: var(--off-white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── BACKGROUND TEXTURE ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 90% 80%, rgba(201,168,76,0.04) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 520px;
    margin: 0;
    padding: 48px 24px 60px;
  }

  /* ── HEADER ── */
  .header {
    text-align: left;
    text-align: left;
    margin-bottom: 40px;
    animation: fadeDown 0.6s ease both;
  }

  .tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    color: var(--gold);
    letter-spacing: 0.04em;
    margin-top: 8px;
    opacity: 0.9;
    text-align: left;
  }

  .headline {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 10vw, 64px);
    font-weight: 300;
    line-height: 1.1;
    color: var(--white);
    letter-spacing: -0.01em;
    margin-bottom: 14px;
  }

  .headline span {
    color: var(--gold);
    font-style: italic;
  }

  .subhead {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.6;
    max-width: 360px;
    margin: 0;
  }

  /* ── GOLD DIVIDER ── */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 32px 0;
    animation: fadeIn 0.8s ease 0.2s both;
  }

  .divider-line {
    flex: 1;
    height: 0.5px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
  }

  .divider-crown {
    color: var(--gold);
    font-size: 12px;
    opacity: 0.6;
  }

  /* ── PRIMARY CTA — CALL/TEXT ── */
  .primary-cta {
    animation: fadeUp 0.6s ease 0.1s both;
    margin-bottom: 12px;
  }

  .cta-label {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 500;
    text-align: left;
    margin-bottom: 14px;
  }

  .cta-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .btn-call {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: var(--gold);
    color: var(--green-deep);
    text-decoration: none;
    padding: 18px 20px;
    border-radius: 3px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.04em;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  .btn-call::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .btn-call:hover::before { transform: translateX(0); }
  .btn-call:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(201,168,76,0.25); }
  .btn-call:active { transform: translateY(0); }

  .btn-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    color: var(--gold);
    text-decoration: none;
    padding: 18px 20px;
    border-radius: 3px;
    border: 0.5px solid rgba(201,168,76,0.4);
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    transition: all 0.2s ease;
  }

  .btn-text:hover {
    border-color: var(--gold);
    background: rgba(201,168,76,0.05);
    transform: translateY(-1px);
  }

  .btn-icon {
    font-size: 16px;
    flex-shrink: 0;
  }

  .btn-content { display: flex; flex-direction: column; align-items: flex-start; }
  .btn-main { font-size: 14px; font-weight: 500; line-height: 1.2; }
  .btn-sub { font-size: 11px; opacity: 0.7; font-weight: 300; margin-top: 1px; }

  /* ── OR SEPARATOR ── */
  .or-separator {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 24px 0;
    animation: fadeIn 0.6s ease 0.3s both;
  }

  .or-line {
    flex: 1;
    height: 0.5px;
    background: var(--green-border);
  }

  .or-text {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 400;
  }

  /* ── FORM ── */
  .form-section {
    animation: fadeUp 0.6s ease 0.35s both;
  }

  .form-label {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 500;
    text-align: left;
    margin-bottom: 16px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }

  .form-row.single { grid-template-columns: 1fr; }

  .input-wrap { position: relative; }

  input, select {
    width: 100%;
    background: var(--green-card);
    border: 0.5px solid var(--green-border);
    border-radius: 3px;
    color: var(--off-white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
    padding: 15px 16px;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
  }

  input::placeholder { color: var(--text-muted); font-size: 13px; }
  
  input:focus, select:focus {
    border-color: rgba(201,168,76,0.5);
    background: rgba(21, 32, 25, 0.8);
  }

  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
    color: var(--text-muted);
  }

  select.has-value { color: var(--off-white); }

  select option {
    background: var(--green-mid);
    color: var(--off-white);
  }

  /* ── SUBMIT ── */
  .btn-submit {
    width: 100%;
    background: var(--green-card);
    border: 0.5px solid rgba(201,168,76,0.25);
    border-radius: 3px;
    color: var(--off-white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 17px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  .btn-submit::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(201,168,76,0.06);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .btn-submit:hover::after { transform: scaleX(1); }
  .btn-submit:hover { border-color: rgba(201,168,76,0.45); }

  .form-note {
    text-align: left;
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 10px;
    line-height: 1.5;
  }

  /* ── SUCCESS STATE ── */
  .success-state {
    display: none;
    text-align: left;
    padding: 40px 20px;
    animation: fadeUp 0.5s ease both;
  }

  .success-crown {
    font-size: 32px;
    color: var(--gold);
    margin-bottom: 16px;
  }

  .success-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 300;
    color: var(--white);
    margin-bottom: 10px;
  }

  .success-text {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* ── TRUST BAR ── */
  .trust-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--green-border);
    border: 0.5px solid var(--green-border);
    border-radius: 3px;
    margin-top: 28px;
    overflow: hidden;
    animation: fadeIn 0.6s ease 0.5s both;
  }

  .trust-item {
    background: var(--green-card);
    padding: 16px 12px;
    text-align: left;
  }

  .trust-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 4px;
  }

  .trust-label {
    font-size: 10px;
    color: var(--text-muted);
    letter-spacing: 0.06em;
    line-height: 1.4;
  }

  /* ── AREA BADGE ── */
  .area-badge {
    text-align: left;
    margin-top: 20px;
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    animation: fadeIn 0.6s ease 0.6s both;
  }

  .area-badge span {
    color: var(--gold);
    opacity: 0.8;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* ── MOBILE ── */
  @media (max-width: 420px) {
    .container { padding: 36px 18px 48px; }
    .cta-buttons { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .btn-call, .btn-text { padding: 20px; }
  }
</style>
</head>
<body>

<div class="container">

  <!-- HEADER -->
  <div class="header">
    <h1 class="headline">We'll take<br>care of it.</h1>
    <p class="tagline">Handled. Every time.</p>
    <p class="subhead" style="margin-top:14px;">We come to your home or office in Glendale, Pasadena, and Burbank. No drop-off needed.</p>
  </div>

  <!-- PRIMARY — CALL OR TEXT -->
  <div class="primary-cta">
    <p class="cta-label">Fastest way to book</p>
    <div class="cta-buttons">
      <a href="tel:8182967347" class="btn-call">
        <span class="btn-icon">📞</span>
        <div class="btn-content">
          <span class="btn-main">Call Us</span>
          <span class="btn-sub">(818) 296-7347</span>
        </div>
      </a>
      <a href="sms:8182967347&body=Hi, I'd like to get a quote for a detail." class="btn-text">
        <span class="btn-icon">💬</span>
        <div class="btn-content">
          <span class="btn-main">Text Us</span>
          <span class="btn-sub">Quick quote</span>
        </div>
      </a>
    </div>
  </div>

  <!-- OR -->
  <div class="or-separator">
    <div class="or-line"></div>
    <span class="or-text">or leave your info</span>
    <div class="or-line"></div>
  </div>

  <!-- FORM -->
  <div class="form-section" id="formSection">
    <p class="form-label">We'll call you within the hour</p>

    <div class="form-row">
      <div class="input-wrap">
        <input type="text" placeholder="Your name" id="name" autocomplete="given-name">
      </div>
      <div class="input-wrap">
        <input type="tel" placeholder="Phone number" id="phone" autocomplete="tel">
      </div>
    </div>

    <div class="form-row single">
      <select id="package" onchange="this.classList.add('has-value')">
        <option value="" disabled selected>Which package interests you?</option>
        <option value="prince">Prince — From $170 (Exterior + Interior)</option>
        <option value="king">King — From $270 (Full Detail + Clay Bar)</option>
        <option value="queen">Queen — From $350 (Full + Paint Correction)</option>
        <option value="refresh">Crown Refresh — Maintenance wash</option>
        <option value="unsure">Not sure yet — just want a quote</option>
      </select>
    </div>

    <button class="btn-submit" onclick="handleSubmit()">
      Request a Quote →
    </button>

    <p class="form-note">No payment required. We'll reach out to confirm timing and answer any questions.</p>
  </div>

  <!-- SUCCESS -->
  <div class="success-state" id="successState">
    <div class="success-crown">♛</div>
    <h2 class="success-title">You're all set.</h2>
    <p class="success-text">We'll call you shortly to confirm your appointment.<br>Questions? Call or text us at (818) 296-7347.</p>
  </div>

  <!-- TRUST BAR -->
  <div class="trust-bar">
    <div class="trust-item">
      <div class="trust-num">31</div>
      <div class="trust-label">5-Star Reviews</div>
    </div>
    <div class="trust-item">
      <div class="trust-num">1–2hr</div>
      <div class="trust-label">Confirmation</div>
    </div>
    <div class="trust-item">
      <div class="trust-num">$0</div>
      <div class="trust-label">Drop-off needed</div>
    </div>
  </div>

  <!-- AREA -->
  <p class="area-badge">
    Serving <span>Glendale · Pasadena · Burbank</span> and surrounding areas
  </p>

</div>

<script>
  function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !phone) {
      // Subtle shake on empty fields
      if (!name) shake(document.getElementById('name'));
      if (!phone) shake(document.getElementById('phone'));
      return;
    }

    // Hide form, show success
    document.getElementById('formSection').style.display = 'none';
    const s = document.getElementById('successState');
    s.style.display = 'block';

    // In production: replace this with your form submission endpoint
    console.log('Form submitted:', { name, phone, package: document.getElementById('package').value });
  }

  function shake(el) {
    el.style.borderColor = 'rgba(201,100,100,0.6)';
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'shake 0.3s ease';
    setTimeout(() => el.style.borderColor = '', 1500);
  }

  // Add shake keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-4px); }
      75% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
</script>

</body>
</html>
