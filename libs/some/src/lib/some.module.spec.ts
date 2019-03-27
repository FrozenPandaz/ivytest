import { async, TestBed } from '@angular/core/testing';
import { SomeModule } from './some.module';

describe('SomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SomeModule).toBeDefined();
  });
});
