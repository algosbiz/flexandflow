/** Sections appended to /uluwatu-bali/trauma-healing/. See ./index.ts. */
import type { ContentBlock } from "@/types";

const blocks: ContentBlock[] = [
  {
    type: "heading",
    level: 2,
    text: "Body-based trauma healing in Bali, at a bodywork studio",
  },
  {
    type: "paragraph",
    text: "Trauma healing here is **body-based**: hands-on physical bodywork, sometimes called somatic work because it works through the body rather than through talking. It works on chronic muscle tension, tight fascia (the connective tissue around your muscles) and stored physical stress in areas such as the back, neck, shoulders and hips. Because the body and mind are connected, releasing long-held tension often eases mental stress too: many clients leave calmer and lighter, not just looser. Flex & Flow is a bodywork studio in Ungasan, not a retreat or an emotional healing centre, and this is not psychotherapy, counselling or treatment for PTSD.",
  },
  {
    type: "paragraph",
    text: "If you are looking for help with emotional or psychological trauma, please speak to a qualified mental-health professional, such as a psychologist, psychiatrist or registered counsellor. The [NHS mental health pages](https://www.nhs.uk/mental-health/) are a clear place to start reading. Bodywork can sit alongside that care for physical tension, but it does not replace it. If you are in crisis or feel unsafe, contact local emergency services or go to the nearest hospital.",
  },
  {
    type: "heading",
    level: 2,
    text: "Trauma healing in Uluwatu: price, length and how it compares",
  },
  {
    type: "paragraph",
    text: "A trauma healing session in Uluwatu lasts **90 minutes and costs IDR {{price:trauma-healing:90:master}}**. Only Ginny gives it: our founder, with a background in nursing, fitness training and bodywork. Choosing between this and something more familiar? Here is how they compare:",
  },
  /* Short values and one "from" price each: on a phone every row is a card,
     its price beside its name (`.is-priced`). */
  {
    type: "table",
    head: ["Session", "Best for", "Pace", "From (IDR)"],
    rows: [
      [
        "Trauma healing",
        "Long-held tension and stored physical stress",
        "Slow and sustained · 90 min",
        "{{price:trauma-healing:90:master}}",
      ],
      [
        "[Sport massage](/uluwatu-bali/sport-massage/)",
        "Recovery after surfing, training or travel",
        "Set to your body · 60 or 90 min",
        "{{price:sport-massage:60:standard}}",
      ],
      [
        "[Assisted stretching](/uluwatu-bali/assisted-stretching/)",
        "Stiffness and restricted movement",
        "Guided stretches · 60 min",
        "{{price:assisted-stretching:60:standard}}",
      ],
    ],
  },
  {
    type: "paragraph",
    text: "Trauma healing is at the studio in Ungasan only, not on the [home service](/uluwatu-bali/outcall-home-service-massage/) menu. Ginny takes a limited number of these sessions, so book ahead [online](https://flexandflow.fit/appointment/?service=trauma-healing) or on [WhatsApp](https://wa.me/6285858887777).",
  },
  {
    type: "heading",
    level: 2,
    text: "More questions about trauma healing",
  },
  {
    type: "faq",
    items: [
      {
        question: "Is trauma healing at Flex & Flow a treatment for PTSD or emotional trauma?",
        answer: "No. Trauma healing is physical bodywork for chronic tension, tight fascia and stored physical stress. It is not psychotherapy and does not treat PTSD, anxiety or emotional trauma. For those, please see a qualified mental-health professional such as a psychologist or psychiatrist. Bodywork can sit alongside that care for physical tension, but it does not replace it.",
      },
      {
        question: "How much does trauma healing cost in Bali at Flex & Flow?",
        answer: "Trauma healing at Flex & Flow costs **IDR {{price:trauma-healing:90:master}} for a 90-minute session** at the studio in Ungasan, Uluwatu. It is only offered with Ginny, the founder and master therapist. It costs more than a sport massage because the work is slower, needs more preparation and extra time before and after, and Ginny limits how many of these sessions she gives.",
      },
      {
        question: "What is body-based trauma healing?",
        answer: "Body-based trauma healing works on stress the body holds physically, through hands-on bodywork rather than conversation. Ginny uses slow, sustained pressure on long-held tension in the back, neck, shoulders and hips, and adjusts it to how your body responds. It is a single 90-minute session at our bodywork studio, not a retreat or a programme, and it does not replace mental-health care.",
      },
      {
        question: "Does trauma healing help with mental stress?",
        answer: "Often, yes. Many people feel mentally calmer and less stressed after a session, because the body lets go of tension it has been holding, sometimes for years. Think of it as relief from everyday stress, not treatment for anxiety, depression or PTSD. Those still need a qualified mental-health professional, and bodywork can sit alongside that care.",
      },
      {
        question: "What does trauma release mean in bodywork?",
        answer: "Trauma release means easing long-held physical tension: muscles and fascia around the back, neck, shoulders and hips that have stayed tight after repeated strain or physical stress. Ginny uses slow, sustained pressure and adjusts it to how your body responds. You do not need to talk about your personal history unless you want to.",
      },
      {
        question: "Will I feel sore after a trauma healing session?",
        answer: "You might. Deep, slow bodywork can leave you tender or tired for a while afterwards, especially in areas that have been tight for a long time. After a trauma healing session, plan a quiet rest of the day rather than a big surf or a heavy workout, and drink some water. If anything worries you afterwards, message the studio or see a doctor.",
      },
      {
        question: "What happens if emotions come up during the session?",
        answer: "Some people notice strong physical sensations or emotional responses during deep bodywork. At Flex & Flow you can ask to slow down, pause or stop at any time, and the session can stay focused on physical tension. Ginny is a bodywork therapist, not a counsellor, so if difficult feelings continue after your session, please speak to a qualified mental-health professional.",
      },
      {
        question: "Who should not book trauma healing?",
        answer: "Check with your doctor before booking deep bodywork if you have had recent surgery, an acute injury, blood clots or DVT, a heart or kidney condition, an active infection, or are in cancer treatment. Tell Ginny about any injuries, pain or medication at the start. If you are pregnant, the gentler [pregnancy massage](/uluwatu-bali/pregnancy-massage-service/) at Flex & Flow in Uluwatu is adapted for pregnancy.",
      },
    ],
  },
];

export default blocks;
