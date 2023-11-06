import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppDashboardComponent } from './autowpp-dashboard.component';

describe('AutowppDashboardComponent', () => {
  let component: AutowppDashboardComponent;
  let fixture: ComponentFixture<AutowppDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppDashboardComponent]
    });
    fixture = TestBed.createComponent(AutowppDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
