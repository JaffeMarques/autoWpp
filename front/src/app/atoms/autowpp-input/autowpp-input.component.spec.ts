import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppInputComponent } from './autowpp-input.component';

describe('AutowppInputComponent', () => {
  let component: AutowppInputComponent;
  let fixture: ComponentFixture<AutowppInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppInputComponent]
    });
    fixture = TestBed.createComponent(AutowppInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
