# Prime Restaurant & Banquet — Website Source Repository

Official website repository for **Prime Restaurant & Banquet**, located in Dindoli, Surat. Featuring authentic Indian food, Punjabi main course, Tandoori starters, Paneer specialties, Chinese sizzlers, and a Banquet Party Hall (capacity 50–150 guests).

---

## 📁 Repository Directory Structure

```
armanello-site/
├── assets/                  # Brand & design assets (logos, icons, seals)
│   ├── circle-culinary-seal.svg
│   ├── favicon.png
│   ├── logo-light.png
│   ├── logo.png
│   └── PrimeRestaurant.png
├── css/
│   └── style.css            # Core design system & responsive stylesheet
├── js/
│   └── main.js              # Interactivity (sticky nav, mobile menu, scroll reveal, forms)
├── index.html               # Home page entry point
├── about.html               # About Us & Hospitality story
├── menu.html                # Signature food menu with category filter
├── chef.html                # Kitchen & culinary team showcase
├── contact.html             # Contact details, map embed, and enquiry form
├── .gitignore               # Ignored system files
└── README.md                # Project documentation
```

---

## 🍽️ Key Website Features

1. **Responsive Header & Drawer**: Sticky navigation on scroll and mobile slide-out drawer menu.
2. **Interactive Menu Filter**: Instant tab filtering by dish category (*Paneer*, *Punjabi*, *Tandoori*, *Chinese*, *Rice/Dal*, *Mocktails*, *Desserts*).
3. **Scroll Reveal Animations**: Lightweight `IntersectionObserver` animations for fast initial paint.
4. **Google Maps Embed & Direction Link**: Direct interactive map navigation for visitors in Surat.
5. **Pure Vegetarian & Jain Food Indicator**: Highlights 100% pure vegetarian offering with custom dietary options.

---

## 🚀 Running & Deploying Locally

No build tools or node setup required. Simply open `index.html` in any web browser or serve via HTTP static server:

```bash
# Python simple server
python -m http.server 8000

# Node serve
npx serve .
```

---

## 📋 Restaurant Contact Information

- **Address**: Shop No. 26 to 35, 1st Floor, Uma Plaza, Opp. Sai Darshan Residency, Kharvasa Road, Dindoli, Surat, Gujarat 394210
- **Phone**: +91 63563 73429 / +91 63563 74429
- **Email**: primetherestaurant@gmail.com
- **Dining Hours**: Lunch: 11:00 AM – 3:30 PM | Dinner: 6:30 PM – 10:45 PM (Open All 7 Days)
