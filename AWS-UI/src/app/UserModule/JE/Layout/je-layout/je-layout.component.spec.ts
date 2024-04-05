import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeLayoutComponent } from './je-layout.component';

describe('JeLayoutComponent', () => {
  let component: JeLayoutComponent;
  let fixture: ComponentFixture<JeLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeLayoutComponent]
    });
    fixture = TestBed.createComponent(JeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
