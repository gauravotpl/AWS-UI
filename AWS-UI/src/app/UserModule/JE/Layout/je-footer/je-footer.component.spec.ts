import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeFooterComponent } from './je-footer.component';

describe('JeFooterComponent', () => {
  let component: JeFooterComponent;
  let fixture: ComponentFixture<JeFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeFooterComponent]
    });
    fixture = TestBed.createComponent(JeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
