import { Component, OnInit } from '@angular/core';
import { Service998Service } from '../../services/service-998.service';

@Component({
  selector: 'app-comp-998',
  templateUrl: './comp-998.component.html',
  styleUrls: ['./comp-998.component.css']
})
export class Comp998Component implements OnInit {

  constructor(private _service: Service998Service) { }

  ngOnInit() {
  }

}
