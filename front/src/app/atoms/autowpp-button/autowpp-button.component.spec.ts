import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppButtonComponent } from './autowpp-button.component';

describe('AutowppButtonComponent', () => {
  let component: AutowppButtonComponent;
  let fixture: ComponentFixture<AutowppButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppButtonComponent]
    });
    fixture = TestBed.createComponent(AutowppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
