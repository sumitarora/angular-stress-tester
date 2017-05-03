import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp393Component } from './comp-393.component';
import { Service393Service } from '../../services/service-393.service';

describe('Comp393Component', () => {
  let component: Comp393Component;
  let fixture: ComponentFixture<Comp393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp393Component ],
providers: [Service393Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
