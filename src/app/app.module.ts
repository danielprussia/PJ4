// stock.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09';
  private apiKey = 'YKs1NaA5OaWudVhlpePk9f9ZMhqduwOms';

  constructor(private http: HttpClient) { }

  getStockData(): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
