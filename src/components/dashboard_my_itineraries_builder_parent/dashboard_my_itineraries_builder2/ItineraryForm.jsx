import React, { useState } from 'react';
import ItineraryVisibility from './itinerary_form/ItineraryVisibility';
import ItineraryType from './itinerary_form/ItineraryType';
import ItineraryDuration from './itinerary_form/ItineraryDuration';
import TourDestination from './itinerary_form/TourDestination';
import ItineraryTheme from './itinerary_form/ItineraryTheme';

const ItineraryForm = () => {
  const [title, setTitle] = useState('');
  const [visibility, setVisibility] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);

  const visibilityOptions = [
    { value: 'Public', label: 'Public' },
    { value: 'Private', label: 'Private' }
  ];

  const typeOptions = [
    { value: 'Flexible', label: 'Flexible' },
    { value: 'Fixed', label: 'Fixed' }
  ];

  const durationOptions = [
    { value: '2D/1N', label: '2D/1N' },
    { value: '3D/2N', label: '3D/2N' },
    { value: '4D/3N', label: '4D/3N' },
    { value: '5D/4N', label: '5D/4N' },
    { value: '6D/5N', label: '6D/5N' },
    { value: '7D/6N', label: '7D/6N' },
    { value: '8D/7N', label: '8D/7N' },
    { value: '9D/8N', label: '9D/8N' },
    { value: '10D/9N', label: '10D/9N' },
    { value: '11D/10N', label: '11D/10N' },
    { value: '12D/11N', label: '12D/11N' },
    { value: '13D/12N', label: '13D/12N' },
    { value: '14D/13N', label: '14D/13N' },
    { value: '15D/14N', label: '15D/14N' },
    { value: '16D/15N', label: '16D/15N' },
    { value: '17D/16N', label: '17D/16N' },
    { value: '18D/17N', label: '18D/17N' },
    { value: '19D/18N', label: '19D/18N' },
    { value: '20D/19N', label: '20D/19N' },
    { value: '21D/20N', label: '21D/20N' },
    { value: '22D/21N', label: '22D/21N' }
  ];

  const destinationOptions = [
    // Top 50 Indian Tourist Destinations
    { value: 'Shimla, India', label: 'Shimla, India' },
    { value: 'Kerala, India', label: 'Kerala, India' },
    { value: 'Kashmir, India', label: 'Kashmir, India' },
    { value: 'Goa, India', label: 'Goa, India' },
    { value: 'Jaipur, India', label: 'Jaipur, India' },
    { value: 'Agra, India', label: 'Agra, India' },
    { value: 'Manali, India', label: 'Manali, India' },
    { value: 'Rishikesh, India', label: 'Rishikesh, India' },
    { value: 'Ooty, India', label: 'Ooty, India' },
    { value: 'Mysore, India', label: 'Mysore, India' },
    { value: 'Udaipur, India', label: 'Udaipur, India' },
    { value: 'Jodhpur, India', label: 'Jodhpur, India' },
    { value: 'Varanasi, India', label: 'Varanasi, India' },
    { value: 'Darjeeling, India', label: 'Darjeeling, India' },
    { value: 'Ladakh, India', label: 'Ladakh, India' },
    { value: 'Andaman and Nicobar Islands, India', label: 'Andaman and Nicobar Islands, India' },
    { value: 'Pondicherry, India', label: 'Pondicherry, India' },
    { value: 'Hampi, India', label: 'Hampi, India' },
    { value: 'Khajuraho, India', label: 'Khajuraho, India' },
    { value: 'Mahabalipuram, India', label: 'Mahabalipuram, India' },
    { value: 'Mumbai, India', label: 'Mumbai, India' },
    { value: 'Hyderabad, India', label: 'Hyderabad, India' },
    { value: 'Delhi, India', label: 'Delhi, India' },
    { value: 'Ranthambore, India', label: 'Ranthambore, India' },
    { value: 'Srinagar, India', label: 'Srinagar, India' },
    { value: 'Kanyakumari, India', label: 'Kanyakumari, India' },
    { value: 'Rajasthan Desert, India', label: 'Rajasthan Desert, India' },
    { value: 'Bangalore, India', label: 'Bangalore, India' },
    { value: 'Amritsar, India', label: 'Amritsar, India' },
    { value: 'Rann of Kutch, India', label: 'Rann of Kutch, India' },
    { value: 'Mount Abu, India', label: 'Mount Abu, India' },
    { value: 'Shillong, India', label: 'Shillong, India' },
    { value: 'Lonavala, India', label: 'Lonavala, India' },
    { value: 'Alleppey, India', label: 'Alleppey, India' },
    { value: 'Haridwar, India', label: 'Haridwar, India' },
    { value: 'Gangtok, India', label: 'Gangtok, India' },
    { value: 'Chennai, India', label: 'Chennai, India' },
    { value: 'Tirupati, India', label: 'Tirupati, India' },
    { value: 'Ajanta and Ellora, India', label: 'Ajanta and Ellora, India' },
    { value: 'Madurai, India', label: 'Madurai, India' },
    { value: 'Puri, India', label: 'Puri, India' },
    { value: 'Coorg, India', label: 'Coorg, India' },
    { value: 'Kochi, India', label: 'Kochi, India' },
    { value: 'Bodh Gaya, India', label: 'Bodh Gaya, India' },
    { value: 'Konark, India', label: 'Konark, India' },
    { value: 'Pushkar, India', label: 'Pushkar, India' },
    { value: 'Jaisalmer, India', label: 'Jaisalmer, India' },
    { value: 'Bikaner, India', label: 'Bikaner, India' },
    { value: 'Mahabaleshwar, India', label: 'Mahabaleshwar, India' },

    // Top 50 International Tourist Destinations
    { value: 'Paris, France', label: 'Paris, France' },
    { value: 'Rome, Italy', label: 'Rome, Italy' },
    { value: 'London, UK', label: 'London, UK' },
    { value: 'New York, USA', label: 'New York, USA' },
    { value: 'Dubai, UAE', label: 'Dubai, UAE' },
    { value: 'Singapore, Singapore', label: 'Singapore, Singapore' },
    { value: 'Tokyo, Japan', label: 'Tokyo, Japan' },
    { value: 'Sydney, Australia', label: 'Sydney, Australia' },
    { value: 'Barcelona, Spain', label: 'Barcelona, Spain' },
    { value: 'Bangkok, Thailand', label: 'Bangkok, Thailand' },
    { value: 'Bali, Indonesia', label: 'Bali, Indonesia' },
    { value: 'Venice, Italy', label: 'Venice, Italy' },
    { value: 'Amsterdam, Netherlands', label: 'Amsterdam, Netherlands' },
    { value: 'Istanbul, Turkey', label: 'Istanbul, Turkey' },
    { value: 'Vienna, Austria', label: 'Vienna, Austria' },
    { value: 'Berlin, Germany', label: 'Berlin, Germany' },
    { value: 'Hong Kong, China', label: 'Hong Kong, China' },
    { value: 'Los Angeles, USA', label: 'Los Angeles, USA' },
    { value: 'Santorini, Greece', label: 'Santorini, Greece' },
    { value: 'Prague, Czech Republic', label: 'Prague, Czech Republic' },
    { value: 'Kyoto, Japan', label: 'Kyoto, Japan' },
    { value: 'Cape Town, South Africa', label: 'Cape Town, South Africa' },
    { value: 'Zurich, Switzerland', label: 'Zurich, Switzerland' },
    { value: 'Moscow, Russia', label: 'Moscow, Russia' },
    { value: 'Rio de Janeiro, Brazil', label: 'Rio de Janeiro, Brazil' },
    { value: 'Mexico City, Mexico', label: 'Mexico City, Mexico' },
    { value: 'Toronto, Canada', label: 'Toronto, Canada' },
    { value: 'Lisbon, Portugal', label: 'Lisbon, Portugal' },
    { value: 'Reykjavik, Iceland', label: 'Reykjavik, Iceland' },
    { value: 'Marrakech, Morocco', label: 'Marrakech, Morocco' },
    { value: 'Cairo, Egypt', label: 'Cairo, Egypt' },
    { value: 'Buenos Aires, Argentina', label: 'Buenos Aires, Argentina' },
    { value: 'Seoul, South Korea', label: 'Seoul, South Korea' },
    { value: 'Athens, Greece', label: 'Athens, Greece' },
    { value: 'Auckland, New Zealand', label: 'Auckland, New Zealand' },
    { value: 'Florence, Italy', label: 'Florence, Italy' },
    { value: 'Munich, Germany', label: 'Munich, Germany' },
    { value: 'Stockholm, Sweden', label: 'Stockholm, Sweden' },
    { value: 'Copenhagen, Denmark', label: 'Copenhagen, Denmark' },
    { value: 'Kuala Lumpur, Malaysia', label: 'Kuala Lumpur, Malaysia' },
    { value: 'Budapest, Hungary', label: 'Budapest, Hungary' },
    { value: 'Edinburgh, Scotland', label: 'Edinburgh, Scotland' },
    { value: 'Hanoi, Vietnam', label: 'Hanoi, Vietnam' },
    { value: 'Vancouver, Canada', label: 'Vancouver, Canada' },
    { value: 'Bruges, Belgium', label: 'Bruges, Belgium' },
    { value: 'Dublin, Ireland', label: 'Dublin, Ireland' },
    { value: 'Milan, Italy', label: 'Milan, Italy' },
    { value: 'Warsaw, Poland', label: 'Warsaw, Poland' },
    { value: 'Lima, Peru', label: 'Lima, Peru' },
];

  const themeOptions = [
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Art', label: 'Art' },
    { value: 'Backpacking', label: 'Backpacking' },
    { value: 'Beach', label: 'Beach' },
    { value: 'Culture', label: 'Culture' },
    { value: 'Desert', label: 'Desert' },
    { value: 'Eco-Friendly', label: 'Eco-Friendly' },
    { value: 'Family Holidays', label: 'Family Holidays' },
    { value: 'Festivals', label: 'Festivals' },
    { value: 'Food', label: 'Food' },
    { value: 'Hills', label: 'Hills' },
    { value: 'History', label: 'History' },
    { value: 'Honeymoon', label: 'Honeymoon' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Pilgrimage', label: 'Pilgrimage' },
    { value: 'Road Trips', label: 'Road Trips' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Solo trips', label: 'Solo trips' },
    { value: 'Trekking', label: 'Trekking' },
    { value: 'Wellness', label: 'Wellness' },
    { value: 'Wildlife', label: 'Wildlife' },
    { value: 'Yoga', label: 'Yoga' }
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Itinerary Details</h2>
      <p className="text-sm text-gray-600 mb-4">Enter the details of your itinerary.</p>
      
      <label className="block text-gray-700 mb-2">
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter itinerary title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        />
      </label>

     
     <ItineraryVisibility visibilityOptions={visibilityOptions} visibility={visibility} setVisibility={setVisibility} />
     

    <ItineraryType type={type} setType={setType} typeOptions={typeOptions} />

     
    <ItineraryDuration duration={duration} setDuration={setDuration} durationOptions={durationOptions} />
   

    <TourDestination destinationOptions={destinationOptions} selectedDestinations={selectedDestinations} setSelectedDestinations={setSelectedDestinations} />

    <ItineraryTheme selectedThemes={selectedThemes} themeOptions={themeOptions} setSelectedThemes={selectedThemes} />

      <div className="flex space-x-2 mt-6">
        <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">Preview</button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Draft</button>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Publish</button>
      </div>
    </div>
  );
};

export default ItineraryForm;
