import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp145Component } from './comp-145.component';
import { Service145Service } from '../../services/service-145.service';

describe('Comp145Component', () => {
  let component: Comp145Component;
  let fixture: ComponentFixture<Comp145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp145Component ],
providers: [Service145Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
