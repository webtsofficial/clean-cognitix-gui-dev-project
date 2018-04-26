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
});
