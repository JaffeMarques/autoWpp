import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppLabelComponent } from './autowpp-label.component';

describe('AutowppLabelComponent', () => {
  let component: AutowppLabelComponent;
  let fixture: ComponentFixture<AutowppLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppLabelComponent]
    });
    fixture = TestBed.createComponent(AutowppLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
