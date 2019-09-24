import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent1Component } from './testcomponent1.component';

describe('Testcomponent1Component', () => {
  let component: Testcomponent1Component;
  let fixture: ComponentFixture<Testcomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
