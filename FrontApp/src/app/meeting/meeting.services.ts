import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from './meeting.model';

@Injectable()
export default class MeetingService {
  public API = 'http://localhost:64209/api';
  public MeetingS_API = `${this.API}/Meetings`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Meeting>> {
    return this.http.get<Array<Meeting>>(this.MeetingS_API);
  }

  get(id: string) {
    return this.http.get(`${this.MeetingS_API}/${id}`);
  }

  save(Meeting: Meeting): Observable<Meeting> {
    let result: Observable<Meeting>;
    if (Meeting.MeetingId) {
      result = this.http.put<Meeting>(
        `${this.MeetingS_API}/${Meeting.MeetingId}`,
        Meeting
      );
    } else {
      result = this.http.post<Meeting>(this.MeetingS_API, Meeting);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.MeetingS_API}/${id.toString()}`);
  }
}
