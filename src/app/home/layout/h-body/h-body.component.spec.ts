import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBodyComponent } from './h-body.component';

describe('HBodyComponent', () => {
  let component: HBodyComponent;
  let fixture: ComponentFixture<HBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
