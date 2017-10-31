import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LudhianaComponent } from './ludhiana.component';

describe('LudhianaComponent', () => {
  let component: LudhianaComponent;
  let fixture: ComponentFixture<LudhianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LudhianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LudhianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
