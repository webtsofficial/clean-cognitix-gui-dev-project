import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {APIURL} from '../../app.module';
import {Photo} from '../../models/Photo';

@Injectable()
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    const url = APIURL + '/photos/';
    return this.http.get<Photo[]>(url).map(
        photos => photos as Photo[]
    );
  }

}
