# Will You Be My Valentine?

A cute, funny, and romantic interactive webpage to ask someone to be your Valentine.

---
## Highlights
- Playful "No" button: it dodges clicks, swaps messages, and eventually turns into "Yes".
- "Yes" button grows bigger each time "No" is pressed.
- Sweet copy, romantic styling, and a little confetti burst.
- Mobile-friendly layout.

---
## How It Works
This project is a simple webpage with a "Yes" and "No" button.

- Clicking **No** rotates through funny messages, makes the **Yes** button grow, and the **No** button runs away. After enough tries, **No** becomes **Yes**.
- Clicking **Yes** shows a sweet message, pops confetti, then redirects to `yes_page.html`.

---
## How to Use
1. Download or clone the repo.
2. Open `index.html` in your browser.

---
## Hosting (GitHub Pages)
If you want to host it on GitHub Pages:
1. Go to your repo on GitHub.
2. Open **Settings** → **Pages**.
3. Set **Source** to `Deploy from a branch`.
4. Select branch `master` and folder `/ (root)`.
5. Save. Your site will publish at a `github.io` URL in a minute or two.

---
## File Overview
- `index.html`: Main page content.
- `styles.css`: Styling for the main page.
- `script.js`: Button logic and animations.
- `yes_page.html`: The yes page.
- `yes_style.css`: Styling for the yes page.

---
## Key Functions
- `handleNoClick()`: Updates the "No" button text and grows the "Yes" button.
- `handleYesClick()`: Shows the success message, confetti, and redirects.

---
## License
This project is licensed under the MIT License. See `LICENSE` for details.
