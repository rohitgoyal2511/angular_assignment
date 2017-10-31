import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthanInfoComponent } from './rajasthan-info.component';

describe('RajasthanInfoComponent', () => {
  let component: RajasthanInfoComponent;
  let fixture: ComponentFixture<RajasthanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajasthanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajasthanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
