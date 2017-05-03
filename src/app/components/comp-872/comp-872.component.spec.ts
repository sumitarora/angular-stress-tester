import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp872Component } from './comp-872.component';
import { Service872Service } from '../../services/service-872.service';

describe('Comp872Component', () => {
  let component: Comp872Component;
  let fixture: ComponentFixture<Comp872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp872Component ],
providers: [Service872Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
