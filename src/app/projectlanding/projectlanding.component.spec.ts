import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlandingComponent } from './projectlanding.component';

describe('ProjectlandingComponent', () => {
  let component: ProjectlandingComponent;
  let fixture: ComponentFixture<ProjectlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
