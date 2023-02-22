import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBotComponent } from './footer-bot.component';

describe('FooterBotComponent', () => {
  let component: FooterBotComponent;
  let fixture: ComponentFixture<FooterBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
