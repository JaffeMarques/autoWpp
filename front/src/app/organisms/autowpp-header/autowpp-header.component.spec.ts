import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppHeaderComponent } from './autowpp-header.component';

describe('AutowppHeaderComponent', () => {
  let component: AutowppHeaderComponent;
  let fixture: ComponentFixture<AutowppHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppHeaderComponent]
    });
    fixture = TestBed.createComponent(AutowppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
