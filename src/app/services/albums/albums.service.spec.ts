import {
    TestBed,
    inject,
    getTestBed
} from '@angular/core/testing';

import {AlbumsService} from './albums.service';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import {APIURL} from '../../app.module';
import {Album} from '../../models/Album';

describe('AlbumsService', () => {
    let injector: TestBed,
        service: AlbumsService,
        httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AlbumsService]
        });

        injector = getTestBed();
        service = injector.get(AlbumsService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', inject([AlbumsService], () => {
        expect(service).toBeTruthy();
    }));

    it('getAlbums() : Observable Album[]', inject([AlbumsService], () => {
        const dummyAlbums: Album[] = [
            {
                'userId': 1,
                'id': 1,
                'title': 'quidem molestiae enim'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'sunt qui excepturi placeat culpa'
            }
        ];

        service.getAlbums().subscribe(albums => {
            expect(albums.length).toBe(2);
            expect(albums).toEqual(dummyAlbums);
        });

        const req = httpMock.expectOne(APIURL + '/albums/');
        expect(req.request.method).toBe('GET');
        req.flush(dummyAlbums);
    }));

    it('getAlbum(id) : Observable Album', inject([AlbumsService], () => {
        const dummyAlbum: Album = {
                'userId': 1,
                'id': 1,
                'title': 'quidem molestiae enim'
            },
              dummyId = 1;

        service.getAlbum(dummyId).subscribe(album => {
            expect(album).toEqual(dummyAlbum);
        });

        const req = httpMock.expectOne(APIURL + '/albums/' + dummyId);
        expect(req.request.method).toBe('GET');
        req.flush(dummyAlbum);
    }));
});
