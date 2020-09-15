import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnghawComponent } from './enghaw.component';

describe('EnghawComponent', () => {
  let component: EnghawComponent;
  let fixture: ComponentFixture<EnghawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnghawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnghawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
