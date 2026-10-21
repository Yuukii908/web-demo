import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private api =
    'http://localhost:3000/api/contact';

  constructor(
    private http: HttpClient
  ) {}

  sendMessage(data : {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Observable<any> {

    return this.http.post(
      this.api,
      data
    );
  }
}
