import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppNavComponent } from './autowpp-nav.component';

describe('AutowppNavComponent', () => {
  let component: AutowppNavComponent;
  let fixture: ComponentFixture<AutowppNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppNavComponent]
    });
    fixture = TestBed.createComponent(AutowppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
