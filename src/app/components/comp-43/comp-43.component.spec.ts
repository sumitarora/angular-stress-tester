import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp43Component } from './comp-43.component';
import { Service43Service } from '../../services/service-43.service';

describe('Comp43Component', () => {
  let component: Comp43Component;
  let fixture: ComponentFixture<Comp43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp43Component ],
providers: [Service43Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
