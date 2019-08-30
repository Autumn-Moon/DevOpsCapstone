import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBfloginComponent } from './stat-bflogin.component';

describe('StatBfloginComponent', () => {
  let component: StatBfloginComponent;
  let fixture: ComponentFixture<StatBfloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatBfloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBfloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
