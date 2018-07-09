import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyoppstatusComponent } from './dailyoppstatus.component';

describe('DailyoppstatusComponent', () => {
  let component: DailyoppstatusComponent;
  let fixture: ComponentFixture<DailyoppstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyoppstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyoppstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
