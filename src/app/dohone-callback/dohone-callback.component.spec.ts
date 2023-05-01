import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohoneCallbackComponent } from './dohone-callback.component';

describe('DohoneCallbackComponent', () => {
  let component: DohoneCallbackComponent;
  let fixture: ComponentFixture<DohoneCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DohoneCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DohoneCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
