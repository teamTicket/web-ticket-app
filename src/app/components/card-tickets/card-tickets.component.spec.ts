import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTicketsComponent } from './card-tickets.component';

describe('CardTicketsComponent', () => {
  let component: CardTicketsComponent;
  let fixture: ComponentFixture<CardTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
