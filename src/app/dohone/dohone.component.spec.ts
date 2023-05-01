import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DohoneComponent } from './dohone.component';

describe('DohoneComponent', () => {
  let component: DohoneComponent;
  let fixture: ComponentFixture<DohoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DohoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DohoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
