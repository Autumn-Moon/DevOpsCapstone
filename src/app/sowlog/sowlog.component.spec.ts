import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowlogComponent } from './sowlog.component';

describe('SowlogComponent', () => {
  let component: SowlogComponent;
  let fixture: ComponentFixture<SowlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
