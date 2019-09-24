import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent9Component } from './testcomponent9.component';

describe('Testcomponent9Component', () => {
  let component: Testcomponent9Component;
  let fixture: ComponentFixture<Testcomponent9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
