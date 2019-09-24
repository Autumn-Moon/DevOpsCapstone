import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent7Component } from './testcomponent7.component';

describe('Testcomponent7Component', () => {
  let component: Testcomponent7Component;
  let fixture: ComponentFixture<Testcomponent7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
