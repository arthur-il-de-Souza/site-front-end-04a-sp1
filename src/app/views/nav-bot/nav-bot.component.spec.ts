import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBotComponent } from './nav-bot.component';

describe('NavBotComponent', () => {
  let component: NavBotComponent;
  let fixture: ComponentFixture<NavBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
