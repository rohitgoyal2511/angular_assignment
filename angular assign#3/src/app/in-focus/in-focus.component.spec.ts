import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFocusComponent } from './in-focus.component';

describe('InFocusComponent', () => {
  let component: InFocusComponent;
  let fixture: ComponentFixture<InFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
