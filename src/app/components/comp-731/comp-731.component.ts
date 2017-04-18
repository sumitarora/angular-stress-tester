import { Component, OnInit } from '@angular/core';
import { Service731Service } from '../../services/service-731.service';

@Component({
  selector: 'app-comp-731',
  templateUrl: './comp-731.component.html',
  styleUrls: ['./comp-731.component.css']
})
export class Comp731Component implements OnInit {

  constructor(private _service: Service731Service) { }

  ngOnInit() {
  }

}
