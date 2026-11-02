// edit this file to personalize the memorial site ----
window.MEMORIAL = {
  // who is being remembered
  names    : "Brooks & Carolyn Otis",
  dates    : "Brooks  May 3, 1938 – May 9, 2026  ·  Carolyn  August 28, 1940 – March 25, 2026",
  epigraph : "With love, and in celebration of two lives full of music, gardens, crafts, family and friends.",

  // large photo at the top
  hero: { src: "img/historical/full/20.jpg", alt: "Brooks and Carolyn wearing leis in front of a waterfall" },

  // the three main links
  links: {
    historical_photos : "https://drive.google.com/drive/folders/1q-qLDTl_PdCCML2WOz1p3ADrh_VsuGz2?usp=sharing",
    memorial_photos   : "https://beausaundersphotographer.pixieset.com/brooksandcarolynotismemorialcelebration/",
    video             : "https://youtu.be/IXr3kFKc9y8" },  // the ?is=... suffix in the share link was just tracking; this is the clean link

  // photos in the viewer: list of {src, thumb, caption} (regenerate with bin/build_photos.py)
  photos_json: "img/historical/photos.json",

  // guestbook (see README.md for the 5-minute Google Form setup) ----
  guestbook: {
    // form "formResponse" url, e.g. https://docs.google.com/forms/d/e/XXXX/formResponse
    form_action   : "https://docs.google.com/forms/d/e/1FAIpQLScP74rwkpX96Bwr6hneBkVI2OqlVKbGdqkWI1mMfqJmCO-u4w/formResponse",
    // entry ids from the form's pre-filled link
    entry_name    : "entry.862015924",
    entry_message : "entry.489805740",
    // responses sheet published as csv (File > Share > Publish to web > CSV)
    sheet_csv     : "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnzLIcl7ZzfLo97KpOIfoC7UISTpBcH88XDl7eCLCHKDpts0dRnbrzeRTNMBAnlSVUOZl61GQEjzFp/pub?gid=1931163246&single=true&output=csv" }
};
