import { Component, OnInit } from '@angular/core';
import { Service741Service } from '../../services/service-741.service';

@Component({
  selector: 'app-comp-741',
  templateUrl: './comp-741.component.html',
  styleUrls: ['./comp-741.component.css']
})
export class Comp741Component implements OnInit {

  constructor(private _service: Service741Service) { }

  ngOnInit() {
  }

}
