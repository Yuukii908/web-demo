import { TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.service';

describe('ContactComponent', () => {
  let service: ContactComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
