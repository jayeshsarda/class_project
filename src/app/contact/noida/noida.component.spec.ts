import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoidaComponent } from './noida.component';

describe('NoidaComponent', () => {
  let component: NoidaComponent;
  let fixture: ComponentFixture<NoidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
