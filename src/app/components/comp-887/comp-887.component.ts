import { Component, OnInit } from '@angular/core';
import { Service887Service } from '../../services/service-887.service';

@Component({
  selector: 'app-comp-887',
  templateUrl: './comp-887.component.html',
  styleUrls: ['./comp-887.component.css']
})
export class Comp887Component implements OnInit {

  constructor(private _service: Service887Service) { }

  ngOnInit() {
  }

}
