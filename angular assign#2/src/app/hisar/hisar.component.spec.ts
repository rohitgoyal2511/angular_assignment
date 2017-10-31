import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HisarComponent } from './hisar.component';

describe('HisarComponent', () => {
  let component: HisarComponent;
  let fixture: ComponentFixture<HisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
