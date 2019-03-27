import { async, TestBed } from '@angular/core/testing';
import { TransitiveModule } from './transitive.module';

describe('TransitiveModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TransitiveModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TransitiveModule).toBeDefined();
  });
});
