import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp107Component } from './comp-107.component';
import { Service107Service } from '../../services/service-107.service';

describe('Comp107Component', () => {
  let component: Comp107Component;
  let fixture: ComponentFixture<Comp107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp107Component ],
providers: [Service107Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
