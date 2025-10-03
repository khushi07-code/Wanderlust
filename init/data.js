const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Wake up to the sound of waves and enjoy private beach access.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      filename: "beach-cottage.jpg"
    },
    price: 1500,
    location: { city: "Goa", state: "Goa", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] },
    category: "room"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this 16th-century fortress.",
    image: {
      url: "https://images.unsplash.com/photo-1601234567890-34944fa0be68?auto=format&fit=crop&w=800&q=80",
      filename: "scotland-castle.jpg"
    },
    price: 4000,
    location: { city: "Edinburgh", state: "Scotland", country: "UK" },
    reviews: [],
    geometry: { type: "Point", coordinates: [-3.1883, 55.9533] },
    category: "castle"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Overwater villa with private pool and ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      filename: "maldives-villa.jpg"
    },
    price: 6000,
    location: { city: "Malé", state: "Kaafu Atoll", country: "Maldives" },
    reviews: [],
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] },
    category: "amazing view"
  },
  {
    title: "Rustic Cabin in Montana",
    description: "A peaceful retreat surrounded by pine forests.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      filename: "montana-cabin.jpg"
    },
    price: 1100,
    location: { city: "Bozeman", state: "Montana", country: "USA" },
    reviews: [],
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] },
    category: "camp"
  },
  {
    title: "Modern Loft in Tokyo",
    description: "Stylish apartment with skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1588854337118-1c1d5f3f6f3e?auto=format&fit=crop&w=800&q=80",
      filename: "tokyo-loft.jpg"
    },
    price: 2000,
    location: { city: "Tokyo", state: "Tokyo", country: "Japan" },
    reviews: [],
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
    category: "iconic city"
  },
  {
    title: "Treehouse in Kerala",
    description: "Eco-friendly treehouse surrounded by lush greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      filename: "kerala-treehouse.jpg"
    },
    price: 750,
    location: { city: "Wayanad", state: "Kerala", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [76.1320, 11.6850] },
    category: "farm"
  },
  {
    title: "Arctic Dome in Norway",
    description: "Sleep under the northern lights in a heated dome.",
    image: {
      url: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&w=800&q=80",
      filename: "arctic-dome.jpg"
    },
    price: 5500,
    location: { city: "Tromsø", state: "Troms og Finnmark", country: "Norway" },
    reviews: [],
    geometry: { type: "Point", coordinates: [18.9553, 69.6496] },
    category: "arctic"
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Luxury stay in a futuristic dome in the desert.",
    image: {
      url: "https://images.unsplash.com/photo-1614850523453-1b1b3c2f3f3e?auto=format&fit=crop&w=800&q=80",
      filename: "dubai-oasis.jpg"
    },
    price: 5000,
    location: { city: "Dubai", state: "Dubai", country: "UAE" },
    reviews: [],
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "dom"
  },
  {
    title: "Floating Boat Stay",
    description: "Unique boat accommodation with ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1549887534-4b7e1f3a5f4b?auto=format&fit=crop&w=800&q=80",
      filename: "boat-stay.jpg"
    },
    price: 3200,
    location: { city: "Kochi", state: "Kerala", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [76.2673, 9.9312] },
    category: "boat"
  },
  {
    title: "Mountain View Chalet",
    description: "Panoramic views of snow-capped peaks.",
    image: {
      url: "https://images.unsplash.com/photo-1533106418989-88406c7cc8e1?auto=format&fit=crop&w=800&q=80",
      filename: "mountain-chalet.jpg"
    },
    price: 2800,
    location: { city: "Manali", state: "Himachal Pradesh", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [77.1734, 32.2432] },
    category: "mountain"
  },
  {
    title: "Jungle Retreat in Amazon",
    description: "Stay deep in the rainforest with wildlife all around.",
    image: {
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
      filename: "amazon-retreat.jpg"
    },
    price: 2200,
    location: { city: "Manaus", state: "Amazonas", country: "Brazil" },
    reviews: [],
    geometry: { type: "Point", coordinates: [-60.0258, -3.1190] },
    category: "camp"
  },
  {
    title: "Floating Villa in Kerala",
    description: "Traditional houseboat with modern comforts.",
    image: {
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
      filename: "kerala-boat.jpg"
    },
    price: 2700,
    location: { city: "Alleppey", state: "Kerala", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [76.3375, 9.4981] },
    category: "boat"
  },
  {
    title: "Snow Igloo in Finland",
    description: "Sleep in an ice dome under the stars.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      filename: "finland-igloo.jpg"
    },
    price: 4800,
    location: { city: "Rovaniemi", state: "Lapland", country: "Finland" },
    reviews: [],
    geometry: { type: "Point", coordinates: [25.7482, 66.5039] },
    category: "arctic"
  },
  {
    title: "Farmhouse in Punjab",
    description: "Rustic charm with fields and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1558980664-10e7170c0f4b?auto=format&fit=crop&w=800&q=80",
      filename: "punjab-farm.jpg"
    },
    price: 1300,
    location: { city: "Ludhiana", state: "Punjab", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [75.8573, 30.9000] },
    category: "farm"
  },
  {
    title: "Skyline View Apartment",
    description: "Panoramic city views from the 30th floor.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      filename: "skyline-apartment.jpg"
    },
    price: 3100,
    location: { city: "New York", state: "NY", country: "USA" },
    reviews: [],
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
    category: "iconic city"
  },
  {
    title: "Luxury Poolside Villa",
    description: "Infinity pool with sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1558980664-10e7170c0f4b?auto=format&fit=crop&w=800&q=80",
      filename: "poolside-villa.jpg"
    },
    price: 5200,
    location: { city: "Ibiza", state: "Balearic Islands", country: "Spain" },
    reviews: [],
    geometry: { type: "Point", coordinates: [1.4320, 38.9067] },
    category: "amazing pool"
  },
  {
    title: "Mountain Hut in Nepal",
    description: "Simple living with Himalayan views.",
    image: {
      url: "https://images.unsplash.com/photo-1533106418989-88406c7cc8e1?auto=format&fit=crop&w=800&q=80",
      filename: "nepal-hut.jpg"
    },
    price: 900,
    location: { city: "Pokhara", state: "Gandaki", country: "Nepal" },
    reviews: [],
    geometry: { type: "Point", coordinates: [83.9856, 28.2096] },
    category: "mountain"
  },
  {
    title: "Historic Dome in Rome",
    description: "Stay inside a restored Roman dome.",
    image: {
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
      filename: "rome-dome.jpg"
    },
    price: 4500,
    location: { city: "Rome", state: "Lazio", country: "Italy" },
    reviews: [],
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] },
    category: "dom"
  },
  {
    title: "Trendy Studio in Berlin",
    description: "Minimalist design in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1549887534-4b7e1f3a5f4b?auto=format&fit=crop&w=800&q=80",
      filename: "berlin-studio.jpg"
    },
    price: 1900,
    location: { city: "Berlin", state: "Berlin", country: "Germany" },
    reviews: [],
    geometry: { type: "Point", coordinates: [13.4050, 52.5200] },
    category: "trending"
  },
  {
    title: "Countryside Room in Ireland",
    description: "Peaceful room with rolling green hills.",
    image: {
      url: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&w=800&q=80",
      filename: "ireland-room.jpg"
    },
    price: 1400,
    location: { city: "Galway", state: "Connacht", country: "Ireland" },
    reviews: [],
    geometry: { type: "Point", coordinates: [-9.0498, 53.2707] },
    category: "room"
  },
  {
    title: "Castle Tower Suite",
    description: "Stay in a medieval tower with panoramic views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      filename: "tower-suite.jpg"
    },
    price: 3900,
    location: { city: "Bratislava", state: "Bratislava", country: "Slovakia" },
    reviews: [],
    geometry: { type: "Point", coordinates: [17.1077, 48.1486] },
    category: "castle"
  },
  {
    title: "Lakefront Camp in Canada",
    description: "Tent camping with lake access and fire pits.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      filename: "canada-camp.jpg"
    },
    price: 800,
    location: { city: "Toronto", state: "Ontario", country: "Canada" },
    reviews: [],
    geometry: { type: "Point", coordinates: [-79.3832, 43.6532] },
    category: "camp"
  },
  {
    title: "Iconic City Loft in Paris",
    description: "Chic loft near the Eiffel Tower.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      filename: "paris-loft.jpg"
    },
    price: 3300,
    location: { city: "Paris", state: "Île-de-France", country: "France" },
    reviews: [],
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
    category: "iconic city"
  },
  {
    title: "Farm Stay in Rajasthan",
    description: "Experience rural life with local cuisine.",
    image: {
      url: "https://images.unsplash.com/photo-1606788075761-5b9b3c2f3f3e?auto=format&fit=crop&w=800&q=80",
      filename: "rajasthan-farm.jpg"
    },
    price: 1100,
    location: { city: "Jaipur", state: "Rajasthan", country: "India" },
    reviews: [],
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
    category: "farm"
  },
  {
    title: "Trending Studio in Seoul",
    description: "Compact and stylish with smart tech.",
    image: {
      url: "https://images.unsplash.com/photo-1588854337118-1c1d5f3f6f3e?auto=format&fit=crop&w=800&q=80",
      filename: "seoul-studio.jpg"
    },
    price: 2100,
    location: { city: "Seoul", state: "Seoul", country: "South Korea" },
    reviews: [],
    geometry: { type: "Point", coordinates: [126.9780, 37.5665] },
    category: "trending"
  },
  {
    title: "Poolside Bungalow in Phuket",
    description: "Private pool and tropical garden.",
    image: {
      url: "https://images.unsplash.com/photo-1549887534-4b7e1f3a5f4b?auto=format&fit=crop&w=800&q=80",
      filename: "phuket-bungalow.jpg"
    },
    price: 2900,
    location: { city: "Phuket", state: "Phuket", country: "Thailand" },
    reviews: [],
    geometry: { type: "Point", coordinates: [98.3381, 7.8804] },
    category: "amazing pool"
  }

]


module.exports = { data: sampleListings };
