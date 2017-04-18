import { Component, OnInit } from '@angular/core';
import { Service620Service } from '../../services/service-620.service';

@Component({
  selector: 'app-comp-620',
  templateUrl: './comp-620.component.html',
  styleUrls: ['./comp-620.component.css']
})
export class Comp620Component implements OnInit {

  constructor(private _service: Service620Service) { }

  ngOnInit() {
  }

}
