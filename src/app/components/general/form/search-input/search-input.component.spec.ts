import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {SearchInputComponent} from './search-input.component';
import {FormsModule} from '@angular/forms';

describe('SearchInputComponent', () => {
    let component: SearchInputComponent;
    let fixture: ComponentFixture<SearchInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [SearchInputComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('changeSearchinput(string) emit Event in @Output() searchTerm', () => {
        const searchTermEventEmitter = component.searchTerm,
            searchTerm = 'search after this term';
        searchTermEventEmitter.subscribe(searchterm => {
            expect(searchterm).toBe(searchTerm);
        });
        searchTermEventEmitter.emit(searchTerm);
    });
});
