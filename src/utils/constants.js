const prod = { url: { NEWS_API_URL: 'https://nomoreparties.co/news' } };

const dev = { url: { NEWS_API_URL: 'https://newsapi.org' } };

export default process.env.NODE_ENV === 'development' ? dev : prod;

export const cards = [
  {
    keyword: 'nature',
    title: 'Everyone Needs a Special ‘Sit Spot’ in Nature',
    text: 'Ever since I read Richard Louv’s influential book, “Last Child in the Woods,” the idea of having a special “sit spot” has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find a spot in nature – it could be anywhere, from an urban backyard to a nearby forest – and to spend time in it, sitting quietly. In Young’s words:',
    date: 'November 4, 2020',
    source: 'Treehugger',
    link: 'https://www.treehugger.com/special-sit-spot-nature-5085811',
    image:
      'https://i.pinimg.com/originals/16/12/32/161232cd2c025753d7b4b3a68744738f.jpg',
  },
  {
    keyword: 'nature',
    title: 'Nature makes you better',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves. These things ease our stress and worry; they help us to relax and think more clearly.',
    date: 'February 19, 2019',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better',
    image:
      'https://i.natgeofe.com/n/7e82985c-6437-4a33-b28f-4772eed7e310/image-1.jpg',
  },
  {
    keyword: 'yellowstone',
    title: 'Grand Teton Renews Historic Crest Trail',
    text: '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be enabled to visit that most fascinating region…In traversing this loop, one completely encircles the Three Tetons and adjacent high peaks, viewing them from all sides. In this way one learns to know these peaks with an intimacy impossible to the visitor who contents himself with distant views. No more thrilling mountain trip can be found in all America than that over the newly-completed loop of the Teton Skyline Trail.” –Fritioff Fryxell, 1934. Grand Teton National Park’s first ranger and trail visionary.',
    date: 'October 21, 2020',
    source: 'National Parks Traveler',
    link: 'https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Barns_grand_tetons.jpg',
  },
  {
    keyword: 'parks',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    text: 'In 1976, photographer Roger Minick was teaching a workshop in Yosemite National Park when he became fascinated with an unexpected subject: the American tourist.',
    date: 'April 20, 2018',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/travel/article/sightseer-american-tourists-in-national-parks',
    image:
      'https://i.natgeofe.com/n/59bc50a9-71c2-4b6d-9f40-12e32bbb805d/family-grand-canyon-national-park.jpg',
  },
  {
    keyword: 'photography',
    title: 'Scientists Don’t Know Why Polaris Is So Weird ',
    text: 'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them on their epic migrations.',
    date: 'March 16, 2020',
    source: 'Treehugger',
    link: 'https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425',
    image:
      'https://www.treehugger.com/thmb/kKFbzGBwGeg-o9bFCZxbe83uNBI=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__03__polaris-north-star-facts-b2a823cf25a44ef89260cd09f5c5c845.jpg',
  },
];
