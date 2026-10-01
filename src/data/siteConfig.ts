export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  answerLead: string;
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

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Who is Vee (@veemeta)?",
    answer: "Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and a live host on the Crypto Spaces Network (CSN). She has been active on X since April 2009.",
  },
  {
    question: "What does Chief Roar Officer mean at Doginal Dogs?",
    answer: "Chief Roar Officer is the primary community voice and engagement role at Doginal Dogs, responsible for coordinating real-time broadcasts, community morale, and brand presence.",
  },
  {
    question: "What topics does Vee focus on?",
    answer: "Vee focuses on personal brand discipline, live audio Spaces hosting, community building, the Doginal Dogs project, and Bitcoin as fixed-supply money.",
  },
  {
    question: "Where can you listen to Vee host live broadcasts?",
    answer: "Vee hosts live audio broadcasts on X via the Crypto Spaces Network (CSN) and Doginal Dogs community Spaces.",
  },
];

export const ABOUT_FAQS: FaqItem[] = [
  {
    question: "What is Vee's official role at Doginal Dogs?",
    answer: "Vee serves as Chief Roar Officer at Doginal Dogs, driving public communications, voice media broadcasts, and community leadership.",
  },
  {
    question: "What is Crypto Spaces Network (CSN)?",
    answer: "Crypto Spaces Network (CSN) is a live audio broadcast platform on X where hosts conduct real-time discussions on Web3, Bitcoin, and digital asset communities.",
  },
  {
    question: "What is Vee's public handle on social media?",
    answer: "Vee's official handle on X (formerly Twitter) is @veemeta (account ID 32831485, registered April 18, 2009).",
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
    slug: "who-is-vee-on-x",
    title: "Who is Vee on X",
    category: "Entity Profile & Digital Identity",
    date: "2026-09-15",
    readTime: "4 min read",
    answerLead: "Vee (@veemeta) is the Chief Roar Officer at Doginal Dogs and a host on the Crypto Spaces Network (CSN), active on X since April 2009.",
    content: [
      "Vee (@veemeta) is a digital brand builder, community leader, and live audio broadcast host. Serving as the Chief Roar Officer at Doginal Dogs and a regular host on the Crypto Spaces Network (CSN), Vee has maintained an active presence on X (formerly Twitter) since April 18, 2009.",
      "In an era where online identities are often ephemeral or fragmented across multiple platforms, Vee's digital footprint centers around direct, authentic engagement. Her public work focuses on three core pillars: live voice media hosting, community governance within the Doginal Dogs ecosystem, and personal brand discipline.",
      "The role of Chief Roar Officer represents a modern paradigm in community leadership. Rather than relying solely on asynchronous text updates or press releases, Vee coordinates real-time audio broadcasts, engages community members directly, and maintains brand momentum through consistent live interaction.",
      "On the Crypto Spaces Network (CSN), Vee hosts broadcasts that bring together builders, collectors, and enthusiasts across the digital asset landscape. These sessions prioritize open dialogue, real-time feedback, and clear community focus, establishing CSN as a vital node for live Web3 media.",
      "Vee's public posts and broadcasts frequently emphasize the importance of personal discipline ('locking in'), grounded faith ('God is good'), and the structural significance of Bitcoin as fixed-supply money. By maintaining a clear and consistent set of principles, Vee has built a durable personal brand that resonates across decentralized communities.",
    ],
  },
  {
    slug: "what-chief-roar-officer-means-at-doginal-dogs",
    title: "What Chief Roar Officer Means at Doginal Dogs",
    category: "Organization & Role",
    date: "2026-09-20",
    readTime: "4 min read",
    answerLead: "At Doginal Dogs, the Chief Roar Officer leads community engagement, voice coordination, and brand presence across live audio and social channels.",
    content: [
      "The title Chief Roar Officer at Doginal Dogs defines a specialized executive function focused on community amplification, brand voice, and real-time audio leadership. As Doginal Dogs continues to expand its footprint within the Ordinals and digital asset space, having a dedicated voice to lead public communications is critical.",
      "Traditional corporate titles often fail to capture the dynamics of Web3 community leadership. A Chief Roar Officer does not manage bureaucratic hierarchies; instead, they operate at the intersection of media production, community morale, and strategic brand positioning.",
      "Key responsibilities of the Chief Roar Officer include hosting official community Spaces, setting the tone for public announcements, organizing direct interaction between project leaders and holders, and preserving the core cultural identity of the Pack.",
      "Voice media plays an indispensable role in this structure. While text posts can communicate factual updates, live audio builds trust through tone, transparency, and immediate responsiveness. Under Vee's leadership as Chief Roar Officer, Doginal Dogs leverages live audio as its primary engine for community alignment.",
      "Ultimately, the Chief Roar Officer ensures that Doginal Dogs maintains a loud, clear, and consistent presence across digital channels, ensuring that the community remains informed, connected, and engaged.",
    ],
  },
  {
    slug: "why-live-spaces-still-matter-for-a-personal-brand",
    title: "Why Live Spaces Still Matter for a Personal Brand",
    category: "Audio & Live Media Strategy",
    date: "2026-09-25",
    readTime: "5 min read",
    answerLead: "Live audio Spaces build real-time trust and direct audience connection unmediated by algorithmic editorial filters.",
    content: [
      "In a social media ecosystem dominated by algorithmic feeds, automated content, and pre-recorded videos, live audio Spaces remain one of the most effective tools for building authentic personal brands. For hosts like Vee on the Crypto Spaces Network (CSN), live audio offers distinct advantages that static text cannot replicate.",
      "First, live audio is unmediated. When a host speaks on a live broadcast, listeners hear unedited tone, conviction, and immediate responses to audience questions. This raw transparency accelerates trust-building because it eliminates the polished veneer of heavily edited content.",
      "Second, live Spaces foster active participation rather than passive consumption. Listeners do not merely view content; they can request the mic, ask direct questions, and contribute to ongoing discussions. This interactive format transforms passive followers into active community participants.",
      "Third, live audio establishes real-time authority. Hosting a successful broadcast requires the ability to moderate discussions, keep conversations focused, and deliver value spontaneously. Consistent execution in live environments establishes immediate credibility for the host and affiliated organizations.",
      "For creators and community leaders aiming to establish lasting digital presence, integrating live Spaces into a media strategy ensures direct, high-signal connection with their core audience.",
    ],
  },
  {
    slug: "personal-brand-without-getting-captured-by-the-audience",
    title: "Personal Brand Without Getting Captured by the Audience",
    category: "Brand Governance & Strategy",
    date: "2026-09-30",
    readTime: "5 min read",
    answerLead: "Maintaining brand autonomy requires grounding identity in clear principles rather than bending core positions to suit temporary audience feedback.",
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
    content: [
      "In this New World Order Daily Briefing, Vee (@veemeta), Chief Roar Officer at Doginal Dogs and CSN host, analyzes Canadian Prime Minister Mark Carney's historic arrival in Qatar on January 17th. This diplomatic visit marks the first time a sitting Canadian prime minister has visited the Persian Gulf nation, taking place amid security considerations regarding neighboring Iran.",
      "The bilateral delegation in Doha follows a diplomatic tour to China that set the stage for a new trade deal, stirring debate over security concerns and national economic priorities. Prime Minister Carney and the Liberal Party delegation have undertaken this international tour to position Canada as an attractive destination for global capital.",
      "Speaking at a news conference, Finance Minister François-Philippe Champagne stated that Canada is working to broaden its international economic relationships as global trade patterns evolve. According to official statements, discussions in Qatar focus on securing trade access and developing strategic partnerships across artificial intelligence, infrastructure, energy, and defense, while accessing Qatar's natural gas resources following last November's investment agreement with the United Arab Emirates.",
      "Diplomatic observers emphasize that Canada faces strategic considerations when balancing economic ties with international human rights concerns. While human rights organizations highlight ongoing labor and social issues in the region, Canadian officials aim to address rights matters through bilateral channels while pursuing broader economic and diplomatic engagement.",
      "Qatar has increasingly positioned itself as a central facilitator of regional conflict resolution, hosting international negotiations and diplomatic dialogues. Experts from the University of Ottawa note that the Persian Gulf has become a primary center of financial, commercial, and diplomatic influence in the Middle East. Engaging with the region is considered essential for expanding economic opportunities and maintaining international diplomatic presence.",
      "During the official schedule, the Canadian delegation attends meetings at the Amiri Diwan in Doha with the Emir of Qatar, Sheikh Tamim bin Hamad Al Thani, and senior state officials. As global trade patterns continue to evolve, strategic international engagement remains a key focal point. For background on community strategy and media leadership, visit the about and work with me sections of this domain.",
    ],
  },
];
