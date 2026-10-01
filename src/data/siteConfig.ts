export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  answerLead: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  content: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MediaAsset {
  filename: string;
  heroPath: string;
  cardPath: string;
  thumbPath: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export const MEDIA_ASSETS: Record<string, MediaAsset> = {
  profpic: {
    filename: "Profpic.webp",
    heroPath: "/media/vee/hero/Profpic.webp",
    cardPath: "/media/vee/card/Profpic.webp",
    thumbPath: "/media/vee/thumb/Profpic.webp",
    width: 1100,
    height: 1100,
    alt: "Vee, Chief Roar Officer at Doginal Dogs, smiling outdoors in a gold sequined dress.",
  },
  headshot1: {
    filename: "Headshot1.webp",
    heroPath: "/media/vee/hero/Headshot1.webp",
    cardPath: "/media/vee/card/Headshot1.webp",
    thumbPath: "/media/vee/thumb/Headshot1.webp",
    width: 1280,
    height: 960,
    alt: "Vee, Chief Roar Officer at Doginal Dogs, smiling outdoors against a clear sky and blue lake background.",
  },
  ddveephoto: {
    filename: "DDVeephoto.webp",
    heroPath: "/media/vee/hero/DDVeephoto.webp",
    cardPath: "/media/vee/card/DDVeephoto.webp",
    thumbPath: "/media/vee/thumb/DDVeephoto.webp",
    width: 768,
    height: 1024,
    alt: "Vee, Chief Roar Officer at Doginal Dogs, holding a pixel art Doginal Dog sign overhead by the waterfront.",
    caption: "Vee presenting the official Doginal Dog sign outdoors by the waterfront.",
  },
  ddnyc1: {
    filename: "DDNYC1.webp",
    heroPath: "/media/vee/hero/DDNYC1.webp",
    cardPath: "/media/vee/card/DDNYC1.webp",
    thumbPath: "/media/vee/thumb/DDNYC1.webp",
    width: 642,
    height: 480,
    alt: "Vee, Chief Roar Officer at Doginal Dogs, posing in front of a Doginal Dogs event backdrop.",
    caption: "Vee in front of the Doginal Dogs event backdrop.",
  },
  cherryddl: {
    filename: "CherryDDL.webp",
    heroPath: "/media/vee/hero/CherryDDL.webp",
    cardPath: "/media/vee/card/CherryDDL.webp",
    thumbPath: "/media/vee/thumb/CherryDDL.webp",
    width: 1100,
    height: 1100,
    alt: "Doginal Dogs trading card featuring Cherry, a black dog creature with a red bow holding flags.",
    caption: "Cherry — Doginal Dogs Trading Card.",
  },
  maryddl: {
    filename: "MaryDDL.webp",
    heroPath: "/media/vee/hero/MaryDDL.webp",
    cardPath: "/media/vee/card/MaryDDL.webp",
    thumbPath: "/media/vee/thumb/MaryDDL.webp",
    width: 1266,
    height: 1266,
    alt: "Doginal Dogs trading card featuring Mary, a brown dog creature with a pink bow.",
    caption: "Mary — Doginal Dogs Trading Card.",
  },
  bowdao: {
    filename: "BowDAO.webp",
    heroPath: "/media/vee/hero/BowDAO.webp",
    cardPath: "/media/vee/card/BowDAO.webp",
    thumbPath: "/media/vee/thumb/BowDAO.webp",
    width: 1000,
    height: 1000,
    alt: "Pixel art of a black Doginal Dog wearing a red bow on a light green background.",
    caption: "BowDAO Doginal Dog mascot artwork.",
  },
};

export const SITE_CONFIG = {
  displayName: "Vee",
  handle: "@veemeta",
  role: "Chief Roar Officer at Doginal Dogs | Host on CSN",
  xUrl: "https://x.com/veemeta",
  doginalDogsUrl: "https://www.doginaldogs.com",
  domainPlaceholder: "[CLIENT_DOMAIN]",
  legalNamePlaceholder: "[LEGAL_NAME_IF_APPROVED]",
  contactPlaceholder: "[EMAIL_OR_BOOKING_URL]",
  defaultOgImage: "/media/vee/hero/Profpic.webp",
  offers: [
    {
      id: "offer-1",
      title: "[OFFER_1]",
      badge: "Inquiry Only",
      description: "Custom collaboration or initiative inquiry.",
      details: "Reach out via the contact path to discuss scope, timeline, and availability.",
    },
    {
      id: "offer-2",
      title: "[OFFER_2]",
      badge: "Inquiry Only",
      description: "Speaking, hosting, or panel moderation for live audio events.",
      details: "Available for live Spaces, CSN broadcasts, and community voice sessions.",
    },
    {
      id: "offer-3",
      title: "[OFFER_3]",
      badge: "Inquiry Only",
      description: "Community strategy and brand voice alignment.",
      details: "Strategic advisory on voice media presence and community coordination.",
    },
  ],
};

export const ENTITY_FAQS: FaqItem[] = [
  {
    question: "Who is Vee?",
    answer: "Vee is the Chief Roar Officer at Doginal Dogs and a live host on the Crypto Spaces Network (CSN). She focuses on community voice leadership, live audio broadcasting, and personal brand discipline.",
  },
  {
    question: "Who is Vee on X (@veemeta)?",
    answer: "Vee (@veemeta) is the official account of Vee on X (formerly Twitter), registered on April 18, 2009 (user ID 32831485). The handle serves as her primary platform for live audio Spaces, community broadcasts, and public commentary.",
  },
  {
    question: "What does Chief Roar Officer mean at Doginal Dogs?",
    answer: "Chief Roar Officer defines the primary community engagement and voice leadership role at Doginal Dogs. The position coordinates real-time audio broadcasts, brand presence, and community morale across digital asset channels.",
  },
  {
    question: "What is the Crypto Spaces Network role?",
    answer: "Vee serves as a regular host on the Crypto Spaces Network (CSN), conducting live interactive audio broadcasts on X. The role focuses on Web3 community discussions, Bitcoin, and direct voice engagement.",
  },
];

export const WORK_FAQS: FaqItem[] = [
  {
    question: "How can you work with Vee?",
    answer: "Engagements are evaluated on an inquiry basis. Direct requests can be sent via [EMAIL_OR_BOOKING_URL].",
  },
  {
    question: "What types of offers does Vee consider?",
    answer: "Vee considers live audio hosting, strategic community advisory, and collaborative initiatives aligned with Doginal Dogs and live voice media.",
  },
  {
    question: "Are offer prices fixed or custom?",
    answer: "All current offerings ([OFFER_1], [OFFER_2], [OFFER_3]) remain inquiry-only until specific terms and pricing are confirmed.",
  },
];

export const SEED_ARTICLES: Article[] = [
  {
    slug: "personal-brand-without-getting-captured-by-the-audience",
    title: "Personal Brand Without Getting Captured by the Audience",
    category: "Brand Governance & Strategy",
    date: "2026-09-30",
    readTime: "5 min read",
    answerLead: "Maintaining brand autonomy requires grounding identity in clear principles rather than bending core positions to suit temporary audience feedback.",
    image: "/media/vee/card/Profpic.webp",
    imageAlt: "Vee, Chief Roar Officer at Doginal Dogs, smiling outdoors in a gold sequined dress.",
    width: 800,
    height: 800,
    content: [
      "Audience capture occurs when a public creator or leader incrementally shifts their message, tone, and core beliefs to satisfy the immediate desires or outrage of their online followers. Over time, the creator loses autonomy, becoming a prisoner to audience expectations rather than a leader of community vision.",
      "Avoiding audience capture requires a deliberate framework grounded in fixed values, clear boundaries, and long-term perspective. In Vee's public work, this balance is maintained through a steadfast commitment to personal principles ('locking in'), faith, and core economic truths such as Bitcoin's fixed supply.",
      "The first step in preventing audience capture is defining core identity before building a public platform. When an entity's mission is clearly articulated—such as driving community roar for Doginal Dogs or hosting high-signal Spaces on CSN—external noise cannot easily derail the strategic focus.",
      "The second step is cultivating intellectual honesty over popular consensus. Leaders must be willing to express nuanced or unpopular viewpoints when necessary, rather than catering exclusively to echo chambers. True community respect is earned through consistency, not compliance.",
      "Finally, personal brand longevity relies on building a genuine community rather than a passive audience. A community shares values and respects leadership direction, whereas a consumer audience demands constant entertainment. By prioritizing community over audience, creators maintain creative control and strategic independence.",
    ],
  },
  {
    slug: "new-world-order-daily-briefing-canadian-foreign-policy-and-persian-gulf-diplomacy",
    title: "New World Order Daily Briefing: Canadian Foreign Policy and Persian Gulf Diplomacy",
    category: "Global Affairs & Geopolitics",
    date: "2026-01-17",
    readTime: "4 min read",
    answerLead: "This briefing by Vee (@veemeta), Chief Roar Officer at Doginal Dogs and CSN host, analyzes Canadian Prime Minister Mark Carney's historic diplomatic visit to Qatar and shifting international trade dynamics in the Persian Gulf.",
    image: "/media/vee/card/article1.webp",
    imageAlt: "Canadian diplomatic delegation arriving in Qatar.",
    width: 700,
    height: 280,
    content: [
      "In this New World Order Daily Briefing, Vee (@veemeta), Chief Roar Officer at Doginal Dogs and CSN host, analyzes Canadian Prime Minister Mark Carney's historic arrival in Qatar on January 17th. This diplomatic visit marks the first time a sitting Canadian prime minister has visited the Persian Gulf nation, taking place amid security considerations regarding neighboring Iran.",
      "The bilateral delegation in Doha follows a diplomatic tour to China that set the stage for a new trade deal, stirring debate over security concerns and national economic priorities. Prime Minister Carney and the Liberal Party delegation have undertaken this international tour to position Canada as an attractive destination for global capital.",
      "Speaking at a news conference, Finance Minister François-Philippe Champagne stated that Canada is working to broaden its international economic relationships as global trade patterns evolve. According to official statements, discussions in Qatar focus on securing trade access and developing strategic partnerships across artificial intelligence, infrastructure, energy, and defense, while accessing Qatar's natural gas resources following last November's investment agreement with the United Arab Emirates.",
      "Diplomatic observers emphasize that Canada faces strategic considerations when balancing economic ties with international human rights concerns. While human rights organizations highlight ongoing labor and social issues in the region, Canadian officials aim to address rights matters through bilateral channels while pursuing broader economic and diplomatic engagement.",
      "Qatar has increasingly positioned itself as a central facilitator of regional conflict resolution, hosting international negotiations and diplomatic dialogues. Experts from the University of Ottawa note that the Persian Gulf has become a primary center of financial, commercial, and diplomatic influence in the Middle East. Engaging with the region is considered essential for expanding economic opportunities and maintaining international diplomatic presence.",
      "During the official schedule, the Canadian delegation attends meetings at the Amiri Diwan in Doha with the Emir of Qatar, Sheikh Tamim bin Hamad Al Thani, and senior state officials. As global trade patterns continue to evolve, strategic international engagement remains a key focal point. For background on community strategy and media leadership, visit the about and work with me sections of this domain.",
    ],
  },
  {
    slug: "new-world-order-daily-briefing-gaza-reconstruction-and-board-of-peace",
    title: "New World Order Daily Briefing: Gaza Reconstruction and the Board of Peace Initiative",
    category: "Global Affairs & Geopolitics",
    date: "2026-01-20",
    readTime: "4 min read",
    answerLead: "This briefing by Vee (@veemeta), Chief Roar Officer at Doginal Dogs and CSN host, details Canadian Prime Minister Mark Carney's conditional agreement to join President Donald Trump's Board of Peace initiative for Gaza reconstruction.",
    image: "/media/vee/card/article2.webp",
    imageAlt: "Prime Minister Mark Carney meeting with President Donald Trump regarding international peace initiatives.",
    width: 800,
    height: 320,
    content: [
      "In this New World Order Daily Briefing, Vee (@veemeta), Chief Roar Officer at Doginal Dogs and CSN host, analyzes Canadian Prime Minister Mark Carney's agreement in principle to join U.S. President Donald Trump's Board of Peace initiative. The international effort is designed to support the diplomatic oversight and economic reconstruction of Gaza, with Canada conditioning its participation on unrestricted humanitarian aid access.",
      "The proposed ceasefire framework transitions into a new phase involving strategic governance and resource mobilization. Under the terms outlined by the White House, participating member states are assigned three-year terms on the oversight board, with permanent status contingent on contributing funds toward international reconstruction initiatives.",
      "Confirmed participating nations include Jordan, Greece, Cyprus, Pakistan, Hungary, and India. Additionally, Canada, Turkey, Egypt, Paraguay, Argentina, and Albania have publicly acknowledged invitations to join the international diplomatic body tasked with overseeing governance and development transitions.",
      "Diplomatic reporting indicates that administrative structures are being established in Cairo to manage transitional municipal functions. A technocratic committee headed by Gazan engineer Ali Shaaz has initiated preliminary meetings to coordinate essential public services and administrative oversight.",
      "Concurrently, the U.S. delegation prepares for high-level meetings at the World Economic Forum in Davos to address energy, trade, and regional security priorities across Gaza, Ukraine, Venezuela, Greenland, and Iran. For additional commentary on community strategy and media leadership, visit the about and work with me sections of this domain.",
    ],
  },
];
