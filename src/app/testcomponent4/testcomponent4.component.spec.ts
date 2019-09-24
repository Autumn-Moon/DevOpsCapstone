import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent4Component } from './testcomponent4.component';

describe('Testcomponent4Component', () => {
  let component: Testcomponent4Component;
  let fixture: ComponentFixture<Testcomponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
