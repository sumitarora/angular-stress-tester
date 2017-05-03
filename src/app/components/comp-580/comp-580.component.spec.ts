import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp580Component } from './comp-580.component';
import { Service580Service } from '../../services/service-580.service';

describe('Comp580Component', () => {
  let component: Comp580Component;
  let fixture: ComponentFixture<Comp580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp580Component ],
providers: [Service580Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
