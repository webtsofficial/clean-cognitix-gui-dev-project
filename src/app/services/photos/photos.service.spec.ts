import {
    TestBed,
    inject,
    getTestBed
} from '@angular/core/testing';

import {PhotosService} from './photos.service';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import {APIURL} from '../../app.module';
import {Photo} from '../../models/Photo';

describe('PhotosService', () => {
    let injector: TestBed,
        service: PhotosService,
        httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PhotosService]
        });

        injector = getTestBed();
        service = injector.get(PhotosService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', inject([PhotosService], () => {
        expect(service).toBeTruthy();
    }));

    it('getAlbums() : Observable Album[]', inject([PhotosService], () => {
        const dummyPhotos: Photo[] = [
            {
            'albumId': 1,
            'id': 49,
            'title': 'quasi quae est modi quis quam in impedit',
            'url': 'http://placehold.it/600/2cd88b',
            'thumbnailUrl': 'http://placehold.it/150/2cd88b'
            },
            {
                'albumId': 1,
                'id': 50,
                'title': 'et inventore quae ut tempore eius voluptatum',
                'url': 'http://placehold.it/600/9e59da',
                'thumbnailUrl': 'http://placehold.it/150/9e59da'
            },
            {
                'albumId': 2,
                'id': 51,
                'title': 'non sunt voluptatem placeat consequuntur rem incidunt',
                'url': 'http://placehold.it/600/8e973b',
                'thumbnailUrl': 'http://placehold.it/150/8e973b'
            },
            {
                'albumId': 2,
                'id': 52,
                'title': 'eveniet pariatur quia nobis reiciendis laboriosam ea',
                'url': 'http://placehold.it/600/121fa4',
                'thumbnailUrl': 'http://placehold.it/150/121fa4'
            }
        ];

        service.getPhotos().subscribe(photos => {
            expect(photos.length).toBe(4);
            expect(photos).toEqual(dummyPhotos);
        });

        const req = httpMock.expectOne(APIURL + '/photos/');
        expect(req.request.method).toBe('GET');
        req.flush(dummyPhotos);
    }));
});
