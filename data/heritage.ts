export type HeritageSite = {
  slug: string;
  name: string;
  municipality: string;
  category: string;
  shortDescription: string;
  history: string;
  bestFor: string;
  gradient: [string, string];
  image: string;
};

export const heritageSites: HeritageSite[] = [
  {
    slug: 'hundred-islands',
    name: "Alaminos' Hundred Islands",
    municipality: 'Alaminos City',
    category: 'Nature & Heritage',
    shortDescription: 'A famous cluster of limestone islands and a long-standing symbol of Pangasinan tourism.',
    history: 'The Hundred Islands National Park is known for its many rocky islets, clear coastal waters, and recreational sites. It is one of the province’s most recognizable destinations.',
    bestFor: 'Island hopping, family trips, photography, and coastal exploration.',
    gradient: ['#0c789d', '#d6a84a'],
    image: '/images/hundred-islands.jpg'
  },
  {
    slug: 'bolinao-lighthouse',
    name: "Bolinao's Cape Bolinao Lighthouse",
    municipality: 'Bolinao',
    category: 'Built Heritage',
    shortDescription: 'A historic coastal lighthouse overlooking the West Philippine Sea and surrounding landscapes.',
    history: 'Cape Bolinao Lighthouse is a notable early-20th-century landmark that helped guide ships along the western coast. Its elevated setting also makes it a popular heritage viewpoint.',
    bestFor: 'Heritage walks, landscape viewing, architecture, and sunset photography.',
    gradient: ['#1f536d', '#efe0b2'],
    image: '/images/bolinao-lighthouse.jpg'
  },
  {
    slug: 'balungao-hot-spring',
    name: "Balungao's Hot Spring",
    municipality: 'Balungao',
    category: 'Natural Heritage',
    shortDescription: 'A geothermal destination associated with warm waters, mountain scenery, and local recreation.',
    history: 'Balungao is known for its volcanic landscape and hot spring resources. The site connects natural heritage with community-based tourism and outdoor recreation.',
    bestFor: 'Relaxation, nature trips, wellness tourism, and local exploration.',
    gradient: ['#276749', '#e8c46c'],
    image: '/images/balungao-hot-spring.webp'
  }
];

export function getHeritageSite(slug: string) {
  return heritageSites.find((site) => site.slug === slug);
}
