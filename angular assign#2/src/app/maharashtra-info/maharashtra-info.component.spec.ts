import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharashtraInfoComponent } from './maharashtra-info.component';

describe('MaharashtraInfoComponent', () => {
  let component: MaharashtraInfoComponent;
  let fixture: ComponentFixture<MaharashtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaharashtraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharashtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
