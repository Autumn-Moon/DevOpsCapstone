import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent6Component } from './testcomponent6.component';

describe('Testcomponent6Component', () => {
  let component: Testcomponent6Component;
  let fixture: ComponentFixture<Testcomponent6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
