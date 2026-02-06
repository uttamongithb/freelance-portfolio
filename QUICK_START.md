# ⚡ Quick Reference Card

## 🚀 Get Started in 3 Steps

### 1️⃣ Install & Configure (5 min)
```bash
npm install  # Install all dependencies
# Create .env files with your config
npm run dev  # Start dev servers
```

### 2️⃣ Test (2 min)
- Open http://localhost:5173
- Fill contact form
- Check your email inbox ✅

### 3️⃣ Deploy (varies)
- Push to GitHub
- Deploy server (Railway, Heroku)
- Deploy client (Vercel, Netlify)
- Update `.env` variables

---

## 📋 What Each File Does

| File | Purpose | Edit? |
|------|---------|-------|
| `server/emailService.js` | Email handling | No |
| `server/index.js` | API routes | No |
| `client/src/components/Contact.jsx` | Form with validation | No |
| `client/src/hooks/useGoogleAnalytics.js` | Analytics tracking | No |
| `client/.env.local` | API URLs & API keys | **YES** |
| `server/.env` | Email config & ports | **YES** |
| `client/index.html` | SEO tags | No |
| `client/public/sitemap.xml` | Search engines | No |

---

## 🔑 Environment Variables

### Server (.env)
```
PORT=5000
EMAIL_PROVIDER=gmail
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
CONTACT_EMAIL=support@yoursite.com
```

### Client (.env.local)
```
VITE_API_URL=http://localhost:5000
VITE_GA_ID=G-XXXXXXXXXX
VITE_CALENDLY_URL=calendly.com/username
```

---

## ✨ Features at a Glance

```
📧 Email       → contact form sends notifications
✔️  Validation  → real-time field checks
🔍 SEO         → Google meta tags & structured data
⚡ Speed       → lazy loading & WebP images
📊 Analytics   → track user behavior
♿ Access      → keyboard & screen reader support
📅 Booking     → Calendly integration
📱 Mobile      → responsive design
```

---

## 🧪 Testing Checklist

- [ ] **Form Test**: Fill & submit → Check email
- [ ] **Analytics**: DevTools → Network → Check GA request
- [ ] **Calendly**: Click "Book" button → Calendar opens
- [ ] **Mobile**: Open on phone → Works smoothly
- [ ] **Validation**: Skip field → Error appears
- [ ] **SEO**: View source → Meta tags visible

---

## 🎯 Most Important Files

1. **server/.env** - Email config
2. **client/.env.local** - API URLs & tracking
3. **IMPROVEMENTS_GUIDE.md** - Full documentation

Read these first! ☝️

---

## 🆘 Need Help?

| Issue | Solution |
|-------|----------|
| Email won't send | Check `.env` credentials in server folder |
| Form doesn't submit | Check `VITE_API_URL` is correct |
| Analytics not tracking | Verify `VITE_GA_ID` format (G-XXXXXXXXXX) |
| Calendly won't open | Check `VITE_CALENDLY_URL` is your actual URL |

**Full troubleshooting** → See IMPROVEMENTS_GUIDE.md

---

## 📞 Your Setup Tasks

- [ ] Get Gmail app password (2FA first)
- [ ] Create Google Analytics account
- [ ] Sign up for Calendly
- [ ] Fill in all `.env` variables
- [ ] Test locally before deploying
- [ ] Deploy server
- [ ] Deploy client
- [ ] Verify everything works

---

**All documentation in:** `IMPROVEMENTS_GUIDE.md` & `IMPROVEMENTS_SUMMARY.md`

