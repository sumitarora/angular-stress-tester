import { Component, OnInit } from '@angular/core';
import { Service779Service } from '../../services/service-779.service';

@Component({
  selector: 'app-comp-779',
  templateUrl: './comp-779.component.html',
  styleUrls: ['./comp-779.component.css']
})
export class Comp779Component implements OnInit {

  constructor(private _service: Service779Service) { }

  ngOnInit() {
  }

}
