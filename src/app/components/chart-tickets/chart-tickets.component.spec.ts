import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTicketsComponent } from './chart-tickets.component';

describe('ChartTicketsComponent', () => {
  let component: ChartTicketsComponent;
  let fixture: ComponentFixture<ChartTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
