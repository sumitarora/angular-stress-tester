import { Component, OnInit } from '@angular/core';
import { Service955Service } from '../../services/service-955.service';

@Component({
  selector: 'app-comp-955',
  templateUrl: './comp-955.component.html',
  styleUrls: ['./comp-955.component.css']
})
export class Comp955Component implements OnInit {

  constructor(private _service: Service955Service) { }

  ngOnInit() {
  }

}
