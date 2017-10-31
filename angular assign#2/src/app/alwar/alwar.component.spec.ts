import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwarComponent } from './alwar.component';

describe('AlwarComponent', () => {
  let component: AlwarComponent;
  let fixture: ComponentFixture<AlwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
