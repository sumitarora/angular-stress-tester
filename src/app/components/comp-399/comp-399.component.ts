import { Component, OnInit } from '@angular/core';
import { Service399Service } from '../../services/service-399.service';

@Component({
  selector: 'app-comp-399',
  templateUrl: './comp-399.component.html',
  styleUrls: ['./comp-399.component.css']
})
export class Comp399Component implements OnInit {

  constructor(private _service: Service399Service) { }

  ngOnInit() {
  }

}
