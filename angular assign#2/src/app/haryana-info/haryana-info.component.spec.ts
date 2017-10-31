import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaryanaInfoComponent } from './haryana-info.component';

describe('HaryanaInfoComponent', () => {
  let component: HaryanaInfoComponent;
  let fixture: ComponentFixture<HaryanaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaryanaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaryanaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
