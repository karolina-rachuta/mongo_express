import { connectToMongoose } from './connect';

export const collectionName = 'trips';

const data = [
  {
    packageType: 'Backpack Cal',
    title: 'Big Sur Retreat',
    blurb: 'Big Sur is big country. The Big Sur Retreat takes you to the most majestic part of the Pacific Coast and show you the secret trails.',
    description: 'The region know as Big Sur is like Yosemite\'s younger cousin, with all the redwood scaling, rock climbing and, best of all, hiking that the larger park has to offer. Robison Jeffers once said, "Big Sur is the greatest meeting of land and sea in the world," but the highlights are only accessible on foot.\nOur 3-day tour allows you to choose from multiple hikes led by experienced guides during the day, while comfortably situated in the evenings at the historic Big Sur River Inn. Take a tranquil walk to the coastal waterfall at Julia Pfeiffer Burns State Par or hike to the Married Redwoods. If you\'re prepared for a more strenuous climb, try Ollason\'s Peak in Toro Park. An optional 4th day includes admission to the Henry Miller Library and the Point Reyes Lighthouse.',
    bullets: 'Accommodations at the historic Big Sur River Inn, Privately guided hikes through any of the 5 surrounding national parks, Picnic lunches prepared by the River Inn kitchen, Complimentary country breakfast, Admission to the Henry Miller Library and the Point Reyes Lighthouse',
    difficulty: 'Medium',
    length: 4,
    price: 750,
    region: 'Central Coast',
    keywords: 'Hiking, National Parks, Big Sur'
  },
  {
    packageType: 'Backpack Cal',
    title: 'The Death Valley Survivor\'s Trek',
    blurb: 'Hot stuff? Need more of a challenge? Take this tour to the hottest place in North America: Death Valley.',
    description: 'This 2 day, 1 night tour takes you deep into the heart of Death Valley National Park. Due to extreme temperatures (120 degrees and higher) in the summer months, this tour is only offered November through April. \nThis overnighter is no picnic though. Our guide will lead you on a 12 mile, off-trail hike down Death Valley Wash and into the backcountry for an overnight, hard terrain camping. Luckily, 12 miles takes you out of range of almost any city lights, something that draws thousands of star gazers to Death Valley ever year. If you can survive the 12 miles back, take advantage of the location to stop in at Scotty\'s Castle, a genuine castle built by the eccentric and wealthy Walter Scott for his wife. This tour will make you truly appreciate modern luxuries.',
    bullets: '24-mile roundtrip hike through the Death Valley Wash, Backcountry camping, Fireside dinner and trail snacks provided, Stargazing and local wildlife highlighted, Tour  mysterious Scotty\'s Castle',
    difficulty: 'Difficult',
    length: 2,
    price: 250,
    region: 'Varies',
    keywords: 'Hiking, Desert, Camping, Mojave, Death Valley'
  },
  {
    packageType: 'Backpack Cal',
    title: 'Channel Islands Excursion',
    blurb: 'The chain known as the Channel Islands offer some of the most diverse and unique landscape on the Pacific coast. No motor vehicles are allowed on the islands, which makes this daytrip hiking package the best and most interesting way to visit.',
    description: 'The Channel Islands Excursion starts with a ferry from beautiful Ventura to the nearest island in the strand, Santa Cruz. You\'ll spend the day wandering the rocky coasts, sea anemone and barnacle studded shoreline, and wildflower-strewn meadows of the islands. Visit the herd of wild buffalo housed on Santa Catalina and keep an eye peeled for the endangered island fox. Take a break for lunch on Catalina in the quaint, turn of the century styled Avalon and make sure to visit the Art Deco Catalina Casino. Before ferrying home, visit the botanical gardens or climb to one of the islands\' high points and do some inexpensive whale watching. Blue whale season extends the late spring through summer months. (The Whaling Tour, run by Island Packers, is also available for an additional cost.)',
    bullets: 'Round-trip ferry from Ventura CA to Santa Cruz Island, Lunch provided in Avalon, Tour the art deco Catalina Casino, Whale watching package optional',
    difficulty: 'Easy',
    length: 1,
    price: 150,
    region: 'Southern California',
    keywords: 'Channel Islands, Boating, Whale watching, Hiking'
  },
  {
    packageType: 'California Calm',
    title: 'Day Spa Package',
    blurb: 'Trying to pack some serious relaxation into a short timeframe? Try our Day Spa Package, a full 8 hour immersive experience in seductive the Ojai Valley that will ease away months\' worth of tension.',
    description: 'The Day Spa Package: it\'s all in the name. One day, one spa, but not just any day or any other spa. The Ojai Valley Inn & Spa is recognized by Trip Advisor as the World\' #1 spa and among the top 10 by USA Today. Your day of relaxation starts with a kuyam, a treatment combing cleansing desert clay, dry heat, inhalation and Chumash guided meditation. Choose from among several massage services, from Swedish to deep tissue, and body treatments, including the refreshing Pixie Tangerine & Pomegranate Scrub. Finish with a lavender manicure and pedicure or a "gentleman\'s facial." Couples can enjoy joint massages, and expectant mothers should treat themselves to one of the nurturing prenatal treatments. In total, the package includes 5 straight hours of treatments, reserving time for a delicious spa lunch and time to linger by one of the many pools. This day will be one you think of for weeks.',
    bullets: '5 solid hours of spa treatments, Choose a massage, skin care offering, body treatment and a special luxury salon service, Dine at the Spa or choose from the poolside menu, Take  a complimentary class at the Artist\'s Cottage or from one of the Spa\'s Mind & Body instructors',
    difficulty: 'Easy',
    length: 1,
    price: 550,
    region: 'Southern California',
    keywords: 'Spa, Relaxation, Ojai, Art, Yoga'
  },
  {
    packageType: 'California Calm',
    title: 'Restoration Package',
    blurb: 'The Restoration Package is a 2 day balm for the tired soul. Choose from among three destinations that uniquely combine world-class spa services and attention to the spirit, in locations of unparalleled natural beauty.',
    description: 'California is no stranger to luxury (think Rodeo Drive) but we also offer a myriad of ways to not only pamper the body, but the spirit as well. Choose from among 3 options designed to help you relax and restore in the Restoration Package. Reconnect with nature and with yourself at the San Juan Spa, our Orange County Oasis; go backwoods, literally, on our Yosemite Yoga Retreat; or take comfort in our Napa Valley Validation spa sessions. Perfect for couples, the tireless mother or father you want to thank, or just yourself, this tour will immerse you in serenity.',
    bullets: 'Choice of 3 different spa resorts, 1 full day of pampering, Luxury hotel accommodations, Hiking in Yosemite, Wine making in Napa',
    difficulty: 'Easy',
    length: 2,
    price: 900,
    region: 'Varies',
    keywords: 'Spa, Relaxation, Art, Yoga'
  },
  {
    packageType: 'California Calm',
    title: 'Huntington Library and Pasadena Retreat Tour',
    blurb: 'This package is perfect for those who want to be pampered, but don\'t just want to rest on their laurels all day. Stimulate your mind visiting the Huntington Library\'s art and gardens and then settle back for some dining and primping at the Beauty Bar.',
    description: 'This package is a rewarding for the mind and the soul. Visit the grounds of the incredible Huntington Library and Gardens, with over 200 acres of roses, waterways, cactus gardens and other exotic species. Have lunch in the famous Tea Room and then go inside the fabulous Art Deco buildings to survey the art collection. Afterwards, visit the Beauty Bar\'s Pasadena location and enjoy a meal and drinks while having your nails buffed and your feet soaked.',
    bullets: 'Admission to the Huntington Library and Gardens, Lunch in the Huntington\'s Tea Room, Dinner at the Beauty Bar, Choice of three "mini" treatments at the Beauty Bar',
    difficulty: 'Easy',
    length: 1,
    price: 225,
    region: 'Southern California',
    keywords: 'Spa, Relaxation, Art, Yoga'
  },
  {
    packageType: 'From Desert to Sea',
    title: 'Mojave to Malibu',
    blurb: 'Join us for one of Explore California\'s exclusive "motorcades," Mojave to Malibu - a motorcycle tour from the outskirts of the Mojave desert down to the Malibu coast.',
    description: 'Only experienced road hogs need apply! The tour group will meet at Old Glory Motorcycle Company in Lancaster, CA to retrofit and get ready for the day\'s ride. The pack takes the Angeles Crest Highway, through Angeles National Forest, stopping at biker-friendly Newcomb Ranch for drinks and grub. Winding your way down through L.A., you\'ll take a side trip through Griffith Park, home of the observatory and that classic scene from Rebel without a Cause. After cruising Hollywood Boulevard, the tour makes its way through Santa Monica, through Topanga Canyon and ends in Malibu, where you can grab world-class seafood and burgers from the roadside diner, Paradise Cove Beach Cafe.',
    bullets: 'Motorcycle from Lancaster to Malibu, Views of the Angeles National Forest, Side trip through Griffith Park, Dinner at a roadside diner in Malibu',
    difficulty: 'Difficult',
    length: 1,
    price: 200,
    region: 'Southern California',
    keywords: 'Motorcycle, Cycling, Mountains, Desert, Sea'
  },
  {
    packageType: 'Kids California',
    title: 'Kids L.A. Tour',
    blurb: 'Los Angeles for the young (and young at heart!) Go beyond the concrete jungle and discover just what a playground L.A. can be.',
    description: 'Kids L.A. Tour is a 3-day jam-packed, fun-filled tour of the best the city has to offer- for any age. The first day includes admission to the L.A. Zoo, home to over 1,100 animals, and its companion park, the Long Beach Aquarium. After the little ones are tuckered out, take them back to the Disneyland Hotel in Anaheim so they can rest up for the next two days at the world famous Disneyland Resort. Park Hopper tickets allow you to go between Disneyland and the California Adventure Park, and with Express Passes, you never have to wait in line. Disneyland Hotel guests get exclusive use of the monorail that surrounds the park, and perfect views of the nightly fireworks shows from the hotel. Enjoy meals from any of the Disneyland cafes or leave the kids for an evening and enjoy a meal at one of Downtown Disney\'s more upscale restaurants. This is a family vacation- California style.',
    bullets: 'Admission to the L.A. Zoo and Long Beach Aquarium, 2 nights at the Disneyland Hotel, 3 day luxury car rental, Park Hopper tickets for Disneyland and California Adventure, Free parking',
    difficulty: 'Easy',
    length: 3,
    price: 1200,
    region: 'Southern California',
    keywords: 'Kid friendly, Museum,  Animals, Theme park'
  },
  {
    packageType: 'Nature Watch',
    title: 'Fossil Tour',
    blurb: 'The Fossil Tour to the Mojave Desert and La Brea Tar Pits is ideal for budding archeologists.',
    description: 'Hunting for trilobites? Searching for prehistoric shark teeth? We can show you where to find them! The Fossil Tour explores not just the history, but the ancient past of what we know as California. In our own backyard, we have access to a fossil record hundreds of millions of years old. Trilobites are extinct marine arthropods (think  lobster) that lived in the part of the Pacific that is now the Mojave Desert. With an experienced hunter, you\'ll be bussed out to search for these little desert "crabs" and visit the Calico City dig, site of a disputed findings of early man living in California to 100,000 years go. Paleontology buffs will be fascinated by the remains of this dig, presided over by none other than Louis Leaky himself. Enjoy an "on the dig" meal and then return to Los Angeles for a night at the Cinema Suites bed and breakfast, a short walk from the world famous La Brea Tar Pits. Spend the second day touring the museum\'s fossil collection, watch archeologists at work, an wonder at the still active pits of tar that trapped and preserved hundreds of animals. After this tour, you\'ll start to wonder what you can uncover in your own backyard!',
    bullets: 'Hunt for fossils in the Mojave Desert, Visit Louis Leakey\'s Calico City dig, Admission to the La Brea Tar Pits, Spend the night at Cinema Suites and take in a Hollywood Film in their theater',
    difficulty: 'Medium',
    length: 2,
    price: 500,
    region: 'Varies',
    keywords: 'Eco Tour, California History, Animals, Museum'
  },
  {
    packageType: 'Snowboard Cali',
    title: 'Mountain High Lift-off',
    blurb: 'Mountain High was established in 1929, but continues to be among the top five mountain resorts in the state. Experience what draws hundreds of thousands of visitors to this snow destination each season. The Mountain High Lift-off is the weekender\'s ski spectacular, perfect for couples who need a retreat.',
    description: 'Mountain High is only an hour from Los Angeles, but once you arrive, you\'ll feel like you\'re in another world. The Mountain High Lift-off is the weekender\'s ski spectacular, perfect for couples who need a retreat, featuring two days of premium runs with an all access Express Lift ticket, available exclusively through Explore California. No more waiting in line and guaranteed admittance even when the resort sells out. Accommodations are provided at the Larks Nest Cabin, a vintage charmer featuring a stone fireplace, clawfoot tub, and full kitchen. Dine at the Wrightwood Inn\'s cozy mountain pub, or grab a sandwich from the Evergreen Cafe and Raccoon Saloon. Equipment rental and transportation from Los Angeles International Airport is included.',
    bullets: '2 day lift ticket with Express Pass, 2 nights at a vintage cabin with stone fireplace and clawfoot tub, Equipment rental included, Luxury transportation from LAX',
    difficulty: 'Difficult',
    length: 3,
    price: 800,
    region: 'Southern California',
    keywords: 'Skiing, Snowboarding, Cabin, Hiking, Mountains'
  },
  {
    packageType: 'Taste of California',
    title: 'Olive Garden Tour',
    blurb: 'Take a quiet day to explore the lush hills and countryside around beautiful Ojai, California. You\'ll visit Ojai Olive and tour the grounds, walk through the olive groves, and enjoy a once-in-a-lifetime lunch amongst the Ojai hills, featuring homemade tapas made from the olives on-site!',
    description: 'Ojai Olive is a small, family-run olive orchard, which has been pressing their own special, fragrant olive oil for over 10 years. Immerse yourself in this ancient practice, which is both an art and an edible. The Ojai Olive tour offers begins outside with the history of the grove, an explanation of the olive varieties, their maturing process, the harvesting, a visit to the tree nursery, and more. They then take you inside the barn and explain the process of making the olive oil. Lastly, stop in the tasting room and find out how different curing and separation processes can result in such unique flavors: citrus, hints of pepper, grass. Take a break with a picnic lunch provided by Azu restaurant, makers of authentic Spanish style tapas with a California flair. Included are brioche with olive tapenade, featuring black and green olives from Ojai Olive and prepared by the chef especially for this tour.',
    bullets: 'Tour of the olive orchards, Lessons on olive history and the maturing and harvesting process, Tour of the pressing rooms, Olive oil tasting from 5 unique varieties produced onsite, Picnic lunch with homemade tapas',
    difficulty: 'Easy',
    length: 1,
    price: 75,
    region: 'Southern California',
    keywords: 'Tasting, Olive Oil, California History, Picnic, Nature, Farming'
  },
  {
    packageType: 'Taste of California',
    title: 'A Week of Wine',
    blurb: 'Spend a week in wine country. Watch the evolution of a wine from harvesting to corking, in the heart of Sonoma Valley, considered the birthplace of wine-making in California.',
    description: 'Immerse yourself in the culture and lifestyle of a California winery. Spend 5 days in your private guest villa at the Stockbridge Winery, located in scenic Sonoma. You\'ll spend your days wandering the vineyards, touring the presses and cellars, and assisting staff in making America\'s favorite wine. Enjoy Tuscan-style meals served al fresco, overlooking the gorgeous countryside. Day trips include dinner in Sausalito, hiking in the redwood forests, and lunch in downtown San Francisco.',
    bullets: 'Winery and vineyard tours, Nightly tastings, Country breakfast, Private lodging, Special dinner in Sausalito, Day tour of San Francisco, Hiking in Mt. Hood National Park',
    difficulty: 'Easy',
    length: 5,
    price: 850,
    region: 'Napa/Sonoma Counties',
    keywords: 'Winery, hiking, relaxing, cooking, Napa Valley'
  }
];

(async function () {
  const db = await connectToMongoose(collectionName);
  await db.collection(collectionName).insertMany(data);

  return process.exit(0);
})();
