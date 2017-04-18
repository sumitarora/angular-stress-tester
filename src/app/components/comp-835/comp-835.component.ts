import { Component, OnInit } from '@angular/core';
import { Service835Service } from '../../services/service-835.service';

@Component({
  selector: 'app-comp-835',
  templateUrl: './comp-835.component.html',
  styleUrls: ['./comp-835.component.css']
})
export class Comp835Component implements OnInit {

  constructor(private _service: Service835Service) { }

  ngOnInit() {
  }

}
