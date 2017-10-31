import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikanerComponent } from './bikaner.component';

describe('BikanerComponent', () => {
  let component: BikanerComponent;
  let fixture: ComponentFixture<BikanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
