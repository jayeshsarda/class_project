import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurugramComponent } from './gurugram.component';

describe('GurugramComponent', () => {
  let component: GurugramComponent;
  let fixture: ComponentFixture<GurugramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurugramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurugramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
