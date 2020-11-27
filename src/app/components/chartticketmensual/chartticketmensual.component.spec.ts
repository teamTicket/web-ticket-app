import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartticketmensualComponent } from './chartticketmensual.component';

describe('ChartticketmensualComponent', () => {
  let component: ChartticketmensualComponent;
  let fixture: ComponentFixture<ChartticketmensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartticketmensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartticketmensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
