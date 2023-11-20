import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiUrl = 'https://rxnav.nlm.nih.gov/REST/drugs.xml?name=value'

  constructor(private http: HttpClient) { }

  search(searchTerm: string) {
    const url = `${this.apiUrl}/drugs?name=${encodeURIComponent(searchTerm)}`;
    return this.http.get(url);
  }
}
  