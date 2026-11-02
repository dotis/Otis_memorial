I want to build a website for my parents who passed earlier this year.

Brooks Otis (May 3, 1938 - May 9, 2026)
Carolyn Otis (August 28, 1940 - March 25, 2026)

There was an initial website developed in a github repo, which has been forked here:
https://github.com/dotis/Otis_memorial

I should be the owner of this. bbest just helped me with the initial build. I now have updates on the link to memorial videos:
https://youtu.be/IXr3kFKc9y8?is=sy_K-mMLwPjkA15X

I also now have a form set up on Google Drive here:
https://docs.google.com/forms/d/1vS9cVox6KNKu5o6tFm2cyHbBEaVZi3w2Twsqu0A9_5M/edit

I have also made some edits to the Historical Photos drive. Please use this:
https://drive.google.com/drive/folders/1q-qLDTl_PdCCML2WOz1p3ADrh_VsuGz2?dmr=1&ec=wgc-drive-globalnav-goto

I would like you to finish up creating the site and turn it on using github pages.




This text is from the initial build:
The memorial site for Brooks and Carolyn Otis is pushed to bbest/memorial, and GitHub Pages is turned on at https://bbest.github.io/memorial/. The first deploy usually takes a minute or two to go live.

I checked it locally in your Chrome: the page, the links and the slideshow all worked, and the photos showed upright.

What's on the page
- Header: their names, a short line I wrote ("With love, and in celebration of two lives full of music, gardens, family and friends") and the photo of them with leis at the waterfall as the cover. Change the line or the photo in config.js.
- Three link buttons: Historical Photos goes to the Drive folder, and Memorial Photos goes to Beau Saunders's Pixieset gallery. The Video button stays hidden until you add a link.
- Photo viewer ("Through the Years"): a grid of 62 historical photos. Clicking one opens it full screen, with previous/next buttons, arrow keys and swipe on phones. There's also a "Play slideshow" button that moves to the next photo every 5 seconds.
  - Captions come from the photo file names that had one, such as "Fickle Hill 1973", "Arcata 1984", and "Brooks, as a child" (from the file BAO_little).
  - The photos were resized for the web (28 MB in total, down from 146 MB).
- Guestbook: guests sign with just a name and a message, no login. The entries show on the page, newest first.

What's left for you
1. Set up the guestbook (about 5 minutes). Messages are stored through a Google Form that you need to create in your Google account. Until it's set up, the button is greyed out and says "The guestbook will open soon." The steps are in README.md: make a two-question form, publish its responses sheet as CSV, and paste three values into config.js. To remove an entry later, delete its row in the sheet.
2. Video link and dates. Paste them into config.js (links.video and dates).
3. Missing photos. Google started blocking the download after 62 photos, so about 16 are missing, including "Loafers Glory 1977", "Weiser 1980" and IMG_0638–0654. To add them, download the folder in your browser and run python3 bin/build_photos.py <folder> img/historical. Rerunning resets my three hand-edited captions, so edit those in img/historical/photos.json afterwards.

Send me the video link, the dates or the guestbook form details whenever you have them, and I'll add them.
