import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp311Component } from './comp-311.component';
import { Service311Service } from '../../services/service-311.service';

describe('Comp311Component', () => {
  let component: Comp311Component;
  let fixture: ComponentFixture<Comp311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp311Component ],
providers: [Service311Service],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
