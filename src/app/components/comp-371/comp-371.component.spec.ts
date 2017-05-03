import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp371Component } from './comp-371.component';
import { Service371Service } from '../../services/service-371.service';

describe('Comp371Component', () => {
  let component: Comp371Component;
  let fixture: ComponentFixture<Comp371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp371Component ],
providers: [Service371Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
