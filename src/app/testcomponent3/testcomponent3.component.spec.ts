import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent3Component } from './testcomponent3.component';

describe('Testcomponent3Component', () => {
  let component: Testcomponent3Component;
  let fixture: ComponentFixture<Testcomponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
