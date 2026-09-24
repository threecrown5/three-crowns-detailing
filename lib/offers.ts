// Rotating promo slot. One offer live at a time — swap this constant when
// the offer changes (e.g. engine bay detail, wheel ceramic sealant, later
// this year). Do not hardcode the offer text, price, or eligible packages
// anywhere else — OfferBanner and ClaimOfferPopup both read from here.
export const currentOffer = {
  kicker: "Seasonal Offer",
  headline: "Free trim restoration with any King or Queen",
  body: "Faded plastic trim restored to factory black — included free with either package.",
  eligiblePackages: "King or Queen",
  value: 60,
  constraint: "Solo operation — limited slots per week.",
  popupTitle: "Claim your free trim restoration",
  popupSubcopy: "with any King or Queen package",
  leadSource: "Seasonal Offer — Free Trim Restoration",
  emailSubject: "OFFER CLAIM: Free Trim Restoration",
};
