import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabInfoComponent } from './punjab-info.component';

describe('PunjabInfoComponent', () => {
  let component: PunjabInfoComponent;
  let fixture: ComponentFixture<PunjabInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunjabInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
