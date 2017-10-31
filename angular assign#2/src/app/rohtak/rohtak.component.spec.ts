import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RohtakComponent } from './rohtak.component';

describe('RohtakComponent', () => {
  let component: RohtakComponent;
  let fixture: ComponentFixture<RohtakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RohtakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RohtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
