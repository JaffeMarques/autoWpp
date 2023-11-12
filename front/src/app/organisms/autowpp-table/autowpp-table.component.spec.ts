import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowppTableComponent } from './autowpp-table.component';

describe('AutowppTableComponent', () => {
  let component: AutowppTableComponent;
  let fixture: ComponentFixture<AutowppTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutowppTableComponent]
    });
    fixture = TestBed.createComponent(AutowppTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
