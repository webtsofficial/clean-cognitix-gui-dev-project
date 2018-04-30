import {
    Component,
    OnInit
} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {AlbumsService} from '../../../services/albums/albums.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../models/User';
import {Album} from '../../../models/Album';
import {ActivatedRoute} from '@angular/router';
import {PhotosService} from '../../../services/photos/photos.service';
import {Photo} from '../../../models/Photo';

@Component({
    selector: 'app-user-albums',
    templateUrl: './user-albums.component.html',
    styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {
    userId: number;
    user$: Observable<User>;
    albums$: Observable<Album[]>;
    photos$: Observable<Photo[]>;

    constructor(private users: UsersService, private albums: AlbumsService, private photos: PhotosService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.userId = params['userId']);
        this.user$ = this.users.getUser(this.userId);
        this.albums$ = this.albums.getAlbums();
        this.photos$ = this.photos.getPhotos();
    }

    ngOnInit() {
    }

}
