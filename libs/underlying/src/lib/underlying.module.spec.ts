import { async, TestBed } from '@angular/core/testing';
import { UnderlyingModule } from './underlying.module';

describe('UnderlyingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UnderlyingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UnderlyingModule).toBeDefined();
  });
});
