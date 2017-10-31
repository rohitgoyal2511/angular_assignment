import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GondaComponent } from './gonda.component';

describe('GondaComponent', () => {
  let component: GondaComponent;
  let fixture: ComponentFixture<GondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GondaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
