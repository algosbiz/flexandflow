/**
 * The copy of /uluwatu-bali/lymphatic-detox-massage-for-men/, in place of
 * the panel's. See ./index.ts and the voice notes in ./sport-massage.ts.
 * Facts from the panel copy (full body plus face, scalp, head and neck;
 * consultation first; a bit more intense than the standard session, per the agency, 25 Nov 2026) and the page's own sections (Yuni
 * and Ginny, 60 and 90 minutes).
 */
import type { PageCopy } from "./index";

const copy: PageCopy = {
  excerpt:
    "A full-body lymphatic session for men, with face, scalp and neck work, for a lighter body after training, travel or a heavy week.",
  body: [
    {
      type: "paragraph",
      text: "This is our lymphatic drainage built for men: full-body lymphatic work, then the face, scalp, head and neck, in one unhurried session. It is the same treatment as our lymphatic drainage, just a bit more intense, and still a reset rather than a deep massage.",
    },
    {
      type: "paragraph",
      text: "It suits the days after a hard training block, a long-haul flight or a heavy week, when the body feels puffy and heavy rather than sore. Sessions are with Yuni, our lymphatic specialist, or with our founder [Ginny](/therapist/ginny/), whose own diary is limited.",
    },
    { type: "heading", level: 2, text: "How the Session Runs" },
    /* Three cards on the scannable layout, grouped by `COLUMN_GROUPS`. */
    {
      type: "columns",
      items: [
        "A short consultation on where you feel heavy and what you want from the session.",
        "Any health concerns, said up front.",
        "Slow circular and gliding strokes move fluid through the whole body.",
        "A bit more intense than our standard session, but not deep tissue work.",
        "Facial lymphatic work to ease puffiness and heaviness in the face.",
        "Head, scalp and neck release to finish.",
      ],
    },
    { type: "heading", level: 2, text: "Why Men Book It" },
    {
      type: "list",
      items: [
        "**After training:** a recovery day between hard sessions.",
        "**After travel:** legs and a face that feel puffy from the flight.",
        "**Puffiness and water retention:** when the body feels heavy rather than sore.",
        "**A complete session:** full-body work without the pressure of deep tissue.",
      ],
    },
  ],
};

export default copy;
