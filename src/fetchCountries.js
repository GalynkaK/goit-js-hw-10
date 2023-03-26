import {
  Notify
import { Notify } from "notiflix";

export const fetchCountries = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${searchCountry}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          Notify.failure('Oops, there is no country with that name')
        );
      };
      return response.json();
    });
}