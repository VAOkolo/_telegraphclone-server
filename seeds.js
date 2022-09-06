const Posts = require('./models/postModel')

const seedPosts = ([
    { title: "Giant panda", alias: "PeterPanda", description: `The giant panda (Ailuropoda melanoleuca), also known as the panda bear (or simply the panda), is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body. The name "giant panda" is sometimes used to distinguish it from the red panda, a neighboring musteloid. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet. Giant pandas in the wild occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.`, date: "14 July 1992"},
    { title: "Panda Express", alias: "pandaexpress.com", description: `Panda Express is an American fast food restaurant chain that serves American Chinese cuisine. With over 2,200 locations, it is the largest Asian-segment restaurant chain in the United States, where it was founded, and is mainly located in North America and Asia (in addition to other countries and territories). Panda Express restaurants were traditionally located in shopping mall food courts, but the chain now operates units in many other environments and formats, including stand-alone restaurants, as well as universities, casinos, airports, military bases, amusement parks and other venues.`, date: "13 July 2022"},
    { title: "Panda", alias: "Desiigner", description: `You are now listening to the hottest producer with the hottest beats on the net, Menace
    This what they all been waitin' for? I guess so
    They been waitin’ for this shit for a long time, didn't they?
    This what they all been waitin' for? I guess so
    They been waitin’ for this shit for a long time, didn't they?
    Ayy, I'm just feelin' my vibe right now
    I'm feelin' myself`, date: "13 July 2022"},
    { title: "Bamboo", alias: "Epan", description: `Bamboos are a diverse group of evergreen perennial flowering plants making up the subfamily Bambusoideae of the grass family Poaceae. Giant bamboos are the largest members of the grass family. The origin of the word "bamboo" is uncertain, but it probably comes from the Dutch or Portuguese language, which originally borrowed it from Malay or Kannada.
    But what do I know, I'm just a panda`, date: "12 July 2022"},
    { title: "All The Stars", alias: "Kendrick Lamar", description: `Love, let's talk about love
    Is it anything and everything you hoped for?
    Or do the feeling haunt you?
    I know the feeling haunt you
    This may be the night that my dreams might let me know
    All the stars are closer
    All the stars are closer
    All the stars are closer
    This may be the night that my dreams might let me know
    All the stars are closer
    All the stars are closer
    All the stars are closer`, date: "9 July 2022"},
    { title: "Linux", alias: "Linus", description: `Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.`, date: "30 January 1993"},
    { title: "United Kingdom", alias: "Bill", description: `The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country in Europe, off the north-western coast of the continental mainland It comprises England, Wales, Scotland, and Northern Ireland. The United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland, and many smaller islands within the British Isles. Northern Ireland shares a land border with the Republic of Ireland; otherwise, the United Kingdom is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea and the Irish Sea. The total area of the United Kingdom is 93,628 square miles (242,500 km2), with an estimated 2020 population of more than 67 million people.`, date: "5 July 2022"},
  ])

const seedDB = async () => {
    // await Posts.remove()
    // await Posts.insertMany(seedPosts)
}

module.exports = { seedPosts, seedDB }
