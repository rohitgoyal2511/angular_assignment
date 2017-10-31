import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurukshetraComponent } from './kurukshetra.component';

describe('KurukshetraComponent', () => {
  let component: KurukshetraComponent;
  let fixture: ComponentFixture<KurukshetraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurukshetraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurukshetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
