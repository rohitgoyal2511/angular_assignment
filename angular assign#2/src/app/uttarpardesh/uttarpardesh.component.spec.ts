import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarpardeshComponent } from './uttarpardesh.component';

describe('UttarpardeshComponent', () => {
  let component: UttarpardeshComponent;
  let fixture: ComponentFixture<UttarpardeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttarpardeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarpardeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
