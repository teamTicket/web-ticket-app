import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartticketanualComponent } from './chartticketanual.component';

describe('ChartticketanualComponent', () => {
  let component: ChartticketanualComponent;
  let fixture: ComponentFixture<ChartticketanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartticketanualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartticketanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
