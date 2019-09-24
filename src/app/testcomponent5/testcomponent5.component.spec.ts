import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomponent5Component } from './testcomponent5.component';

describe('Testcomponent5Component', () => {
  let component: Testcomponent5Component;
  let fixture: ComponentFixture<Testcomponent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcomponent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcomponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
