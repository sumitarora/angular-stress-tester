import { Component, OnInit } from '@angular/core';
import { Service58Service } from '../../services/service-58.service';

@Component({
  selector: 'app-comp-58',
  templateUrl: './comp-58.component.html',
  styleUrls: ['./comp-58.component.css']
})
export class Comp58Component implements OnInit {

  constructor(private _service: Service58Service) { }

  ngOnInit() {
  }

}
