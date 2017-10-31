import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatialaComponent } from './patiala.component';

describe('PatialaComponent', () => {
  let component: PatialaComponent;
  let fixture: ComponentFixture<PatialaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatialaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
