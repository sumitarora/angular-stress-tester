import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp913Component } from './comp-913.component';
import { Service913Service } from '../../services/service-913.service';

describe('Comp913Component', () => {
  let component: Comp913Component;
  let fixture: ComponentFixture<Comp913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp913Component ],
providers: [Service913Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
