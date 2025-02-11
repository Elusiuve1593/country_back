interface Population {
  year: number;
  value: number;
}

interface Data {
  country: string;
  code: string;
  iso3: string;
  populationCounts: Population[];
}

export interface CountryPopulation {
  error: boolean;
  msg: string;
  data: Data[];
}
