import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutiontypesListComponent } from './institutiontypes-list.component';

describe('InstitutiontypesListComponent', () => {
  let component: InstitutiontypesListComponent;
  let fixture: ComponentFixture<InstitutiontypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutiontypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutiontypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
