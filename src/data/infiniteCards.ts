export interface InfiniteCardItem {
  id: string;
  title?: string;
  description?: string;
  bullets?: string[];
  cta?: {
    label: string;
    href?: string;
  };
  backgroundColor?: string;
  backgroundImage?: string;
  accentColor?: string;
}
export const infiniteCardItems: InfiniteCardItem[] = [
  {
    id: "ecosystems",
    title: "Unsynchronised ecosystem",
    description: "It's about numerous synchronised platforms to create a proper content hub, that helps conversion.",
    bullets: [
      "Is your brand voice fragmented across channels?",
      "Is your channels driving audience to your sales hub?",
      "Are they nurturing your funnels?"
    ],
  },
  {
    id: "ineffective-content",
    title: "Ineffective content",
    description:
      "Don't create content for the sake of creating content. Say every word as your conversion agent.",
    bullets: [
      "Does your copy fail to convert visitors?",
      "Are you addressing the wrong audience pain points?",
      "Is your value proposition unclear?"
    ],
  },
  {
    id: "digital-presence",
    title: "Irregular digital presence",
    description:
      "Your audience can't find you on all the platforms in the internet",
    bullets: [
      "Are you invisible where your customers hang out?",
      "Is your competitor dominating the search results?",
      "Are you missing opportunities on key platforms?"
    ],
  },
  {
    id: "poor-promotion",
    title: "Poor promotion",
    description:
      "Your content quality is not good enough to attract and engage your audience",
    bullets: [
      "Does your visual identity look outdated?",
      "Is low engagement killing your organic reach?",
      "Does your content fail to build trust?"
    ],
  },
  // {
  //   id: "funnel",
  //   title: "Ineffective funnels",
  //   description:
  //     "Your activities are not regular enough to attract and engage your audience",
  //   bullets: [
  //       "Are algorithmic penalties hurting your growth?",
  //       "Is your audience forgetting you exist?",
  //       "Are you missing peak engagement times?"
  //   ],
  // },
];


