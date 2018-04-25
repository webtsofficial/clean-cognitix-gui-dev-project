import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Album} from '../../models/Album';
import {APIURL} from '../../app.module';

@Injectable()
export class AlbumsService {

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    const url = APIURL + '/albums/';
    return this.http.get<Album[]>(url).map(
        albums => albums as Album[]
    );
  }

}
