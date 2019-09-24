import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent8Component } from './testcomponent8.component';

describe('Testcomponent8Component', () => {
  let component: Testcomponent8Component;
  let fixture: ComponentFixture<Testcomponent8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
