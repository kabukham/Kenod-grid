import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {
  interval: NodeJS.Timeout | undefined;
  static createRandomData(arg0: number): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  /* Generating example data */
  public createRandomData(count: number, start: number): any[] {
    const firstNames = [
        "Nancy",
        "Andrew",
        "Janet",
        "Margaret",
        "Steven",
        "Michael",
        "Robert",
        "Laura",
        "Anne",
        "Nige",
      ],
      lastNames = [
        "Davolio",
        "Fuller",
        "Leverling",
        "Peacock",
        "Buchanan",
        "Suyama",
        "King",
        "Callahan",
        "Dodsworth",
        "White",
      ],
      cities = [
        "Seattle",
        "Tacoma",
        "Kirkland",
        "Redmond",
        "London",
        "Philadelphia",
        "New York",
        "Seattle",
        "London",
        "Boston",
      ],
      titles = [
        "Accountant",
        "Vice President, Sales",
        "Sales Representative",
        "Technical Support",
        "Sales Manager",
        "Web Designer",
        "Software Developer",
      ];
      if (start > 15000) return [];
    return Array(count)
      .fill({})
      .map((_, idx) => ({
        id: (start + idx + 1),
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        title: titles[Math.floor(Math.random() * titles.length)],
      }));
  }
  
  createMoreRandomData(cnt: number,start: number): any[] { 
    const timeoutId = setTimeout(function callbackFunction() {}, 200000)
    let data:any[] = this.createRandomData(cnt, start) || [];
      return data;
   
  }


  getCountriesData(cnt: number, start?: number): Observable<any[]> { 
    let data = [];
    let countries = 'USA,Germany,UK,Japan,Italy,Greece'.split(',');
    if (!start) start = 0;
    for (let i = 0; i < cnt; i++) {
       data.push({
          id: i + start,
          country: countries[i % countries.length],
          date: new Date(2014, i % 12, i % 28),
          amount: Math.random() * 10000,
          active: i % 4 === 0
       });
    }
    return of (data);
 }

  
}
