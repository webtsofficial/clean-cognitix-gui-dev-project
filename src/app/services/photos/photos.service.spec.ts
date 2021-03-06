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

    it('getPhotos() : Observable Photo[]', inject([PhotosService], () => {
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

    it('getPhoto(id: number) : Observable Photo', inject([PhotosService], () => {
        const dummyPhoto: Photo = {
                'albumId': 1,
                'id': 1,
                'title': 'accusamus beatae ad facilis cum similique qui sunt',
                'url': 'http://placehold.it/600/92c952',
                'thumbnailUrl': 'http://placehold.it/150/92c952'
            },
            dummyId = 1;

        service.getPhoto(dummyId).subscribe(photo => {
            expect(photo).toEqual(dummyPhoto);
        });

        const req = httpMock.expectOne(APIURL + '/photos/' + dummyId);
        expect(req.request.method).toBe('GET');
        req.flush(dummyPhoto);
    }));

    it('filterPhotosByAlbumId(albumId: number, photos: Photo[]) : Photo[]', inject([PhotosService], () => {
        const dummyPhotos = [
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
            ],
            dummyAlbumId = 1,
            filteredPhotos = service.filterPhotosByAlbumId(dummyAlbumId, dummyPhotos),
            expectedResult = [
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
                }
            ];

        expect(filteredPhotos).toEqual(expectedResult);
    }));

    it('filterPhotosByAlbumIds(albumIds: number[], photos: Photo[]) : Photo[]', inject([PhotosService], () => {
        const dummyPhotos = [
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
                },
                {
                    'albumId': 3,
                    'id': 107,
                    'title': 'maiores ipsa ut autem',
                    'url': 'http://placehold.it/600/50d332',
                    'thumbnailUrl': 'http://placehold.it/150/50d332'
                },
                {
                    'albumId': 3,
                    'id': 108,
                    'title': 'qui tempora vel exercitationem harum iusto voluptas incidunt',
                    'url': 'http://placehold.it/600/627495',
                    'thumbnailUrl': 'http://placehold.it/150/627495'
                }
            ],
            dummyAlbumIds = [1, 2],
            filteredPhotos = service.filterPhotosByAlbumIds(dummyAlbumIds, dummyPhotos),
            expectedResult = [
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

        expect(filteredPhotos).toEqual(expectedResult);
    }));
});
