import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp420Component } from './comp-420.component';
import { Service420Service } from '../../services/service-420.service';

describe('Comp420Component', () => {
  let component: Comp420Component;
  let fixture: ComponentFixture<Comp420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp420Component ],
providers: [Service420Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
