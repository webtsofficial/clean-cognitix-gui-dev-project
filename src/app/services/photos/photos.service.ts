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

  getPhoto(id: number): Observable<Photo> {
    const url = APIURL + '/photos/' + id;
    return this.http.get<Photo>(url).map(
        photo => photo as Photo
    );
  }

  filterPhotosByAlbumId(albumId: number, photos: Photo[]): Photo[] {
    return photos.filter(photo => photo.albumId === albumId);
  }

}
