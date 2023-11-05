import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppLoginComponent } from './autowpp-login.component';

describe('AutowppLoginComponent', () => {
  let component: AutowppLoginComponent;
  let fixture: ComponentFixture<AutowppLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppLoginComponent]
    });
    fixture = TestBed.createComponent(AutowppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
