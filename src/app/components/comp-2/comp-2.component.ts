import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../../services/service-2.service';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp-2.component.html',
  styleUrls: ['./comp-2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private _service: Service2Service) { }

  ngOnInit() {
  }

}
