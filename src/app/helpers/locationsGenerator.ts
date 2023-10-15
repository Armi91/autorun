import { RequestLocationData } from "../interfaces/locations.interface";
import { autoId } from "./autoId";

const europeanCapitalCities: string[] = [
  'Berlin',
  'Paris',
  'Madrid',
  'Rome',
  'London',
  'Amsterdam',
  'Brussels',
  'Vienna',
  'Stockholm',
  'Oslo',
  'Copenhagen',
  'Warsaw',
  'Lisbon',
  'Athens',
  'Dublin',
  'Prague',
  'Budapest',
  'Helsinki',
  'Bratislava',
  'Sofia',
  'Tallinn',
  'Riga',
  'Vilnius',
  'Zagreb',
  'Ljubljana',
  'Podgorica',
  'Tirana',
  'Skopje',
  'Belgrade',
  'Bucharest',
  'Chisinau',
];

export function locationsGenerator(city?: string): RequestLocationData[] {
  const locations: RequestLocationData[] = [];

  if (city) { // If city is provided, return only one location
    locations.push({
      q: city,
      custom_id: autoId()
    })
  } else { // If city is not provided, return all european capital cities
    europeanCapitalCities.forEach((city) => {
      locations.push({
        q: city,
        custom_id: autoId()
      })
    })
  }
  return locations;
}