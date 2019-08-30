import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowheaderComponent } from './sowheader.component';

describe('SowheaderComponent', () => {
  let component: SowheaderComponent;
  let fixture: ComponentFixture<SowheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
