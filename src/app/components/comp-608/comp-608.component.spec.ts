import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp608Component } from './comp-608.component';
import { Service608Service } from '../../services/service-608.service';

describe('Comp608Component', () => {
  let component: Comp608Component;
  let fixture: ComponentFixture<Comp608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp608Component ],
providers: [Service608Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
