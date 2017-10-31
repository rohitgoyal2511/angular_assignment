import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFollowComponent } from './player-follow.component';

describe('PlayerFollowComponent', () => {
  let component: PlayerFollowComponent;
  let fixture: ComponentFixture<PlayerFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
