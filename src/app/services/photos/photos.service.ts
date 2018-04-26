import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PhotosService {

  constructor(private http: HttpClient) { }

}
