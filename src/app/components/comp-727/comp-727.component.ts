import { Component, OnInit } from '@angular/core';
import { Service727Service } from '../../services/service-727.service';

@Component({
  selector: 'app-comp-727',
  templateUrl: './comp-727.component.html',
  styleUrls: ['./comp-727.component.css']
})
export class Comp727Component implements OnInit {

  constructor(private _service: Service727Service) { }

  ngOnInit() {
  }

}
