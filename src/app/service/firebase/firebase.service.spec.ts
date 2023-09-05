import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

/**
 * Classe responsável pela comunicação da api
 * @author Gustavo Teles
 */


describe('FirebaseService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FirebaseService = TestBed.get(FirebaseService);
        expect(service).toBeTruthy();
    });
});
