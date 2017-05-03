import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp685Component } from './comp-685.component';
import { Service685Service } from '../../services/service-685.service';

describe('Comp685Component', () => {
  let component: Comp685Component;
  let fixture: ComponentFixture<Comp685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp685Component ],
providers: [Service685Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
