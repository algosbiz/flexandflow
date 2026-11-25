/**
 * The copy of /uluwatu-bali/lymphatic-drainage/, in place of the panel's.
 * See ./index.ts and the voice notes in ./sport-massage.ts. Facts from the
 * panel copy (light rhythmic technique, puffiness, home service) and the
 * page's own sections (Yuni and Ginny, 60 and 90 minutes).
 */
import type { PageCopy } from "./index";

const copy: PageCopy = {
  excerpt:
    "Light, rhythmic, full-body lymphatic work, legs, stomach and face included, for days you feel puffy or heavy.",
  body: [
    {
      type: "paragraph",
      text: "Some days your body is puffy and heavy rather than sore: ankles after a long flight, a stomach or face that is holding water. Lymphatic drainage is a full-body session made for those days, and it is the opposite of deep tissue: slow, light, rhythmic strokes that work close to the skin, where the lymphatic vessels run, moving fluid towards the nodes that clear it. It is gentle by design, and most clients find it deeply calming.",
    },
    {
      type: "paragraph",
      text: "Sessions are with [Yuni](/therapist/yuni/), our Javanese massage and lymphatic specialist, or with our founder [Ginny](/therapist/ginny/), whose own diary is limited. Book at the studio in Ungasan, or have it at your villa in the Uluwatu area.",
    },
    { type: "heading", level: 2, text: "How We Approach Lymphatic Drainage" },
    /* Three cards on the scannable layout, grouped by `COLUMN_GROUPS`. */
    {
      type: "columns",
      items: [
        "We start with where you feel heavy or puffy, and anything we should know about your health.",
        "Strokes follow the body's drainage routes, towards the nodes, rather than a set routine.",
        "Pressure stays soft and rhythmic: circles, gentle glides and light stretching of the skin.",
        "No deep muscle work, so it suits the days your body wants rest.",
        "Legs, stomach and face are all part of the session.",
        "60 minutes, or 90 for a slower pace and more time where you feel heaviest.",
      ],
    },
    { type: "heading", level: 2, text: "When People Book It" },
    {
      type: "list",
      items: [
        "**After a long flight:** swollen ankles and legs that feel heavy from sitting.",
        "**Puffiness and fluid retention:** a face, stomach, legs or hands that hold water.",
        "**Recovery days:** a gentle session between harder training or surf days.",
        "**A calmer kind of bodywork:** care for the body without deep pressure.",
      ],
    },
  ],
};

export default copy;
