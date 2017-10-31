import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtawahComponent } from './etawah.component';

describe('EtawahComponent', () => {
  let component: EtawahComponent;
  let fixture: ComponentFixture<EtawahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtawahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtawahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
