// Top 100 cities with Ramadan relevance (Pakistan + Islamic regions)
const cities = [
  // Pakistan
  { name: 'Lahore', country: 'Pakistan', lat: 31.5204, lng: 74.3587, slug: 'lahore-ramadan-times' },
  { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011, slug: 'karachi-iftar-sehri' },
  { name: 'Islamabad', country: 'Pakistan', lat: 33.6844, lng: 73.0479, slug: 'islamabad-ramadan-times' },
  { name: 'Faisalabad', country: 'Pakistan', lat: 31.4180, lng: 72.7920, slug: 'faisalabad-iftar-times' },
  { name: 'Rawalpindi', country: 'Pakistan', lat: 33.5731, lng: 73.1898, slug: 'rawalpindi-ramadan-schedule' },
  { name: 'Multan', country: 'Pakistan', lat: 30.1575, lng: 71.4289, slug: 'multan-sehri-iftar-times' },
  { name: 'Hyderabad', country: 'Pakistan', lat: 25.3960, lng: 68.4719, slug: 'hyderabad-ramadan-times' },
  { name: 'Gujranwala', country: 'Pakistan', lat: 32.1814, lng: 74.1857, slug: 'gujranwala-prayer-times' },
  { name: 'Peshawar', country: 'Pakistan', lat: 34.0151, lng: 71.5249, slug: 'peshawar-iftar-sehri' },
  { name: 'Sialkot', country: 'Pakistan', lat: 32.4981, lng: 74.5273, slug: 'sialkot-ramadan-times' },
  { name: 'Quetta', country: 'Pakistan', lat: 30.1798, lng: 67.0158, slug: 'quetta-iftar-times' },
  { name: 'Abbottabad', country: 'Pakistan', lat: 34.1454, lng: 73.2216, slug: 'abbottabad-sehri-time' },
  { name: 'Sargodha', country: 'Pakistan', lat: 32.0858, lng: 72.6419, slug: 'sargodha-ramadan-schedule' },
  { name: 'Sukkur', country: 'Pakistan', lat: 27.7046, lng: 68.8517, slug: 'sukkur-prayer-times' },
  { name: 'Mirpur Khas', country: 'Pakistan', lat: 25.4962, lng: 69.0131, slug: 'mirpur-khas-iftar' },
  { name: 'Jhang', country: 'Pakistan', lat: 31.2852, lng: 72.3166, slug: 'jhang-ramadan-times' },
  { name: 'Nawabshah', country: 'Pakistan', lat: 26.2176, lng: 68.4088, slug: 'nawabshah-sehri-iftar' },
  { name: 'Okara', country: 'Pakistan', lat: 30.8071, lng: 73.4636, slug: 'okara-prayer-times' },
  { name: 'Jhelum', country: 'Pakistan', lat: 32.9315, lng: 73.7368, slug: 'jhelum-ramadan-schedule' },
  { name: 'Dera Ghazi Khan', country: 'Pakistan', lat: 29.9660, lng: 70.6385, slug: 'dera-ghazi-khan-iftar' },
  
  // Saudi Arabia
  { name: 'Medina', country: 'Saudi Arabia', lat: 24.4672, lng: 39.5890, slug: 'medina-ramadan-times' },
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, slug: 'riyadh-sehri-iftar' },
  { name: 'Jeddah', country: 'Saudi Arabia', lat: 21.5433, lng: 39.1728, slug: 'jeddah-prayer-times' },
  { name: 'Mecca', country: 'Saudi Arabia', lat: 21.4225, lng: 39.8262, slug: 'mecca-ramadan-times' },
  { name: 'Dammam', country: 'Saudi Arabia', lat: 26.4153, lng: 50.1971, slug: 'dammam-iftar-sehri' },
  
  // UAE
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, slug: 'dubai-ramadan-times' },
  { name: 'Abu Dhabi', country: 'UAE', lat: 24.4539, lng: 54.3773, slug: 'abu-dhabi-prayer-times' },
  { name: 'Sharjah', country: 'UAE', lat: 25.3571, lng: 55.4065, slug: 'sharjah-sehri-iftar' },
  { name: 'Ajman', country: 'UAE', lat: 25.4084, lng: 55.4412, slug: 'ajman-ramadan-times' },
  { name: 'Ras Al Khaimah', country: 'UAE', lat: 25.7482, lng: 55.9369, slug: 'ras-al-khaimah-iftar' },
  
  // Egypt
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, slug: 'cairo-ramadan-times' },
  { name: 'Alexandria', country: 'Egypt', lat: 31.2001, lng: 29.9187, slug: 'alexandria-prayer-times' },
  { name: 'Giza', country: 'Egypt', lat: 30.0131, lng: 31.2089, slug: 'giza-sehri-iftar' },
  { name: 'Suez', country: 'Egypt', lat: 29.9668, lng: 32.5498, slug: 'suez-ramadan-schedule' },
  
  // Bangladesh
  { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125, slug: 'dhaka-iftar-times' },
  { name: 'Chittagong', country: 'Bangladesh', lat: 22.3475, lng: 91.8123, slug: 'chittagong-ramadan-times' },
  { name: 'Khulna', country: 'Bangladesh', lat: 22.8045, lng: 89.5615, slug: 'khulna-prayer-times' },
  { name: 'Rajshahi', country: 'Bangladesh', lat: 24.3745, lng: 88.6042, slug: 'rajshahi-sehri-iftar' },
  
  // Malaysia
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869, slug: 'kuala-lumpur-ramadan-times' },
  { name: 'Penang', country: 'Malaysia', lat: 5.3520, lng: 100.3330, slug: 'penang-prayer-times' },
  { name: 'Johor Bahru', country: 'Malaysia', lat: 1.4854, lng: 103.7618, slug: 'johor-bahru-iftar-sehri' },
  
  // Indonesia
  { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456, slug: 'jakarta-ramadan-times' },
  { name: 'Surabaya', country: 'Indonesia', lat: -7.2575, lng: 112.7521, slug: 'surabaya-prayer-times' },
  { name: 'Bandung', country: 'Indonesia', lat: -6.9175, lng: 107.6062, slug: 'bandung-sehri-iftar' },
  { name: 'Medan', country: 'Indonesia', lat: 3.5952, lng: 98.6722, slug: 'medan-iftar-times' },
  
  // India
  { name: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025, slug: 'delhi-ramadan-times' },
  { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, slug: 'mumbai-prayer-times' },
  { name: 'Bengaluru', country: 'India', lat: 12.9716, lng: 77.5946, slug: 'bengaluru-sehri-iftar' },
  { name: 'Lucknow', country: 'India', lat: 26.8467, lng: 80.9462, slug: 'lucknow-ramadan-schedule' },
  
  // Turkey
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, slug: 'istanbul-ramadan-times' },
  { name: 'Ankara', country: 'Turkey', lat: 39.9334, lng: 32.8597, slug: 'ankara-prayer-times' },
  { name: 'Izmir', country: 'Turkey', lat: 38.4237, lng: 27.1428, slug: 'izmir-iftar-sehri' },
  
  // Jordan
  { name: 'Amman', country: 'Jordan', lat: 31.9454, lng: 35.9284, slug: 'amman-ramadan-times' },
  { name: 'Zarqa', country: 'Jordan', lat: 32.0554, lng: 36.0863, slug: 'zarqa-prayer-times' },
  
  // Lebanon
  { name: 'Beirut', country: 'Lebanon', lat: 33.8886, lng: 35.4955, slug: 'beirut-ramadan-times' },
  
  // Palestine
  { name: 'Gaza', country: 'Palestine', lat: 31.9250, lng: 35.3391, slug: 'gaza-iftar-sehri' },
  { name: 'Jerusalem', country: 'Palestine', lat: 31.7683, lng: 35.2137, slug: 'jerusalem-prayer-times' },
  
  // Iraq
  { name: 'Baghdad', country: 'Iraq', lat: 33.3128, lng: 44.3615, slug: 'baghdad-ramadan-times' },
  { name: 'Basra', country: 'Iraq', lat: 30.5269, lng: 47.8029, slug: 'basra-prayer-times' },
  
  // Syria
  { name: 'Damascus', country: 'Syria', lat: 33.5138, lng: 36.2765, slug: 'damascus-ramadan-times' },
  { name: 'Aleppo', country: 'Syria', lat: 36.2021, lng: 37.1343, slug: 'aleppo-iftar-times' },
  
  // Yemen
  { name: 'Sana\'a', country: 'Yemen', lat: 15.3694, lng: 48.2219, slug: 'sanaa-prayer-times' },
  { name: 'Aden', country: 'Yemen', lat: 12.7683, lng: 45.3577, slug: 'aden-ramadan-times' },
  
  // Oman
  { name: 'Muscat', country: 'Oman', lat: 23.6100, lng: 58.5400, slug: 'muscat-iftar-sehri' },
  { name: 'Salalah', country: 'Oman', lat: 17.0151, lng: 54.0924, slug: 'salalah-prayer-times' },
  
  // Kuwait
  { name: 'Kuwait City', country: 'Kuwait', lat: 29.3759, lng: 47.9774, slug: 'kuwait-city-ramadan' },
  
  // Qatar
  { name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.5310, slug: 'doha-ramadan-times' },
  
  // Bahrain
  { name: 'Manama', country: 'Bahrain', lat: 26.1336, lng: 50.5577, slug: 'manama-prayer-times' },
  
  // UK
  { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, slug: 'london-ramadan-times' },
  { name: 'Manchester', country: 'UK', lat: 53.4808, lng: -2.2426, slug: 'manchester-iftar-sehri' },
  { name: 'Birmingham', country: 'UK', lat: 52.5086, lng: -1.8853, slug: 'birmingham-prayer-times' },
  
  // USA
  { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, slug: 'new-york-ramadan-times' },
  { name: 'Los Angeles', country: 'USA', lat: 34.0522, lng: -118.2437, slug: 'los-angeles-iftar-times' },
  { name: 'Chicago', country: 'USA', lat: 41.8781, lng: -87.6298, slug: 'chicago-prayer-times' },
  { name: 'Houston', country: 'USA', lat: 29.7604, lng: -95.3698, slug: 'houston-ramadan-times' },
  
  // Canada
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, slug: 'toronto-iftar-sehri' },
  { name: 'Vancouver', country: 'Canada', lat: 49.2827, lng: -123.1207, slug: 'vancouver-prayer-times' },
  
  // Australia
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, slug: 'sydney-ramadan-times' },
  { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631, slug: 'melbourne-iftar-times' },
  
  // South Africa
  { name: 'Johannesburg', country: 'South Africa', lat: -26.2023, lng: 28.0436, slug: 'johannesburg-prayer-times' },
  { name: 'Cape Town', country: 'South Africa', lat: -33.9249, lng: 18.4241, slug: 'cape-town-ramadan-times' },
];

module.exports = cities;
