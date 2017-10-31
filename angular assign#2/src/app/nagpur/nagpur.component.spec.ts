import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagpurComponent } from './nagpur.component';

describe('NagpurComponent', () => {
  let component: NagpurComponent;
  let fixture: ComponentFixture<NagpurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagpurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
