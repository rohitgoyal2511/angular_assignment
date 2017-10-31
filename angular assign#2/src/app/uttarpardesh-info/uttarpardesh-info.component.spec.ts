import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarpardeshInfoComponent } from './uttarpardesh-info.component';

describe('UttarpardeshInfoComponent', () => {
  let component: UttarpardeshInfoComponent;
  let fixture: ComponentFixture<UttarpardeshInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttarpardeshInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarpardeshInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
