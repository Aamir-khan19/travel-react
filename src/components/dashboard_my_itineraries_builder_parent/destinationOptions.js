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


export default destinationOptions