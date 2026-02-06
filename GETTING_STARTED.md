# 🚀 Getting Started - Step by Step

## ⏱️ Time Required: 15 minutes

---

## Step 1: Install Dependencies (5 min)

Open PowerShell in your project folder:

```powershell
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

cd ..
# You're back in the main folder
```

✅ **Result**: All npm packages installed

---

## Step 2: Create Environment Files (3 min)

### A. Server Configuration

Create file: `server/.env`

```
PORT=5000
CLIENT_URL=http://localhost:5173

EMAIL_PROVIDER=gmail
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
CONTACT_EMAIL=your-email@gmail.com
EMAIL_FROM=noreply@yoursite.com
```

ℹ️ **How to get Gmail app password**:
1. Go to myaccount.google.com
2. Click "Security" in left menu
3. Enable "2-Step Verification"
4. Search for "App passwords"
5. Select "Mail" and "Windows Computer"
6. Google gives you 16-digit password → Copy to `.env`

---

### B. Client Configuration

Create file: `client/.env.local`

```
VITE_API_URL=http://localhost:5000
VITE_GA_ID=G-XXXXXXXXXX
VITE_CALENDLY_URL=https://calendly.com/your-username
VITE_FIREBASE_API_KEY=AIzaSyB6DdHDRciC3PuDJEGHD9f-TqBsOwRmwz4
VITE_FIREBASE_AUTH_DOMAIN=testing-b3719.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=testing-b3719
VITE_FIREBASE_STORAGE_BUCKET=testing-b3719.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=901814462107
VITE_FIREBASE_APP_ID=1:901814462107:web:92b4788ea4512bc7f4083e
VITE_FIREBASE_MEASUREMENT_ID=G-73G8GT61F2
```

✅ **Result**: Environment files configured

---

## Step 3: Start Dev Servers (2 min)

### Terminal 1 - Start Server

```powershell
cd server
npm run dev
```

You should see:
```
✅ Email service ready: gmail
🚀 Server is running on port 5000
```

### Terminal 2 - Start Client

Open a NEW PowerShell window and run:

```powershell
cd client
npm run dev
```

You should see:
```
  VITE v7.2.4  ready in 234 ms
  ➜  Local:   http://localhost:5173/
```

✅ **Result**: Both servers running

---

## Step 4: Test Everything (5 min)

### A. Open the Website

Open browser to: **http://localhost:5173**

### B. Test Contact Form

1. Scroll to "Contact" section
2. Fill in the form:
   - Name: "Test User"
   - Email: "your-email@gmail.com"
   - Company: "Test Co"
   - Project Type: "Web Design"
   - Budget: "$25k - $50k"
   - Timeline: "1-2 months"
   - Message: "This is a test message for the contact form."

3. Click "Get a Free Project Estimate"

4. You should see:
   - ✅ Loading spinner
   - ✅ Success message ("Message sent successfully!")
   - ✅ Form clears

5. Check your email:
   - ✅ Email from noreply@yoursite.com (confirmation)
   - ✅ Email to your address (admin notification)

---

### C. Test Calendly Button

1. Find "Schedule a Call" section
2. Click "Book a Meeting"
3. ✅ Browser tries to open Calendly (currently test URL)

---

### D. Test Analytics (DevTools)

1. Press F12 (Open DevTools)
2. Go to "Network" tab
3. Refresh page
4. Search for "google" or "analytics"
5. ✅ Should see requests to Google Analytics

---

### E. Test Mobile Responsive

1. Press F12 (DevTools)
2. Press Ctrl+Shift+M (Toggle device toolbar)
3. ✅ Form should stack vertically
4. ✅ Text should be readable
5. ✅ Buttons should be tappable

---

## Step 5: Prepare for Production (Optional Now)

When you're ready to go live:

### A. Update Content

Edit `client/src/components/Contact.jsx`:
- Change contact phone number
- Change business hours
- Add your real Calendly URL

### B. Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Property name: "Heritage Modern"
4. Create property
5. Copy Measurement ID (G-XXXXXXXXXX)
6. Paste into `client/.env.local`

### C. Create Calendly Account

1. Go to [calendly.com](https://calendly.com)
2. Sign up free
3. Create "Meeting" event type
4. Copy your URL: calendly.com/your-username
5. Paste into `client/.env.local`

---

## ✅ Verification Checklist

Before moving to production, verify:

- [ ] Server starts without errors
- [ ] Client loads at localhost:5173
- [ ] Contact form validation works (skip field → error shows)
- [ ] Contact form submits (no errors in console)
- [ ] You receive TWO emails (confirmation + admin)
- [ ] Page responds to mobile viewport
- [ ] All links work (no 404s)
- [ ] Calendly popup opens (or attempts to open)
- [ ] DevTools shows GA requests

---

## 🎯 Common Issues & Fixes

### "npm: command not found"
**Fix**: Restart PowerShell or restart computer

### "Error: Port 5000 already in use"
**Fix**: 
```powershell
# Find what's using port 5000
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess

# Or change PORT in server/.env to 5001
```

### "Email not sending"
**Fix**: 
- Verify Gmail app password is 16 digits (with hyphens)
- Verify Gmail user is correct
- Check that 2FA is enabled on Gmail account
- Check server console for error message

### "Form won't submit"
**Fix**:
- Check VITE_API_URL matches server port
- Check browser console for errors (F12)
- Make sure server is running

### "Validation error says field is required but I filled it"
**Fix**:
- Refresh browser (Ctrl+F5)
- Clear browser cache
- Check you're using `npm run dev` not `npm start`

---

## 📚 After Testing

### Read These (In Order):

1. **QUICK_START.md** (reference card)
2. **IMPROVEMENTS_GUIDE.md** (complete setup)
3. **IMPROVEMENTS_SUMMARY.md** (feature overview)

---

## 🚀 Next: Deploy to Production

When you're ready:

### Option 1: Free Hosting (Recommended for testing)

**Server** (Railway, Heroku, or Render):
```bash
# Deploy server
# Update server .env with production variables
```

**Client** (Vercel or Netlify):
```bash
# Deploy client
# Update client .env.local with production URLs
```

### Option 2: Your Own Server

- Use PM2 or systemd to keep processes running
- Set up reverse proxy (Nginx)
- Enable HTTPS/SSL
- Configure firewall

---

## 💾 Save Your Config

**Before deploying**, save your real config values:

```
Gmail App Password: ____________________
GA Property ID: G-____________________
Calendly URL: calendly.com/____________________
Production API URL: ____________________
```

Keep these safe! You'll need them for production `.env` files.

---

## ✨ You're Ready!

Everything is working correctly when:
- ✅ No errors in console
- ✅ Contact form submits
- ✅ You receive emails
- ✅ Site is mobile responsive

**Next**: Read IMPROVEMENTS_GUIDE.md for deployment instructions

---

**Time to completion**: 15 minutes  
**Status**: Ready to proceed! 🎉

