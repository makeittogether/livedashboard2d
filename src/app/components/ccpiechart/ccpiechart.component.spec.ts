import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpiechartComponent } from './ccpiechart.component';

describe('CcpiechartComponent', () => {
  let component: CcpiechartComponent;
  let fixture: ComponentFixture<CcpiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
