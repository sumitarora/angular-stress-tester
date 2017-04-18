import { Component, OnInit } from '@angular/core';
import { Service687Service } from '../../services/service-687.service';

@Component({
  selector: 'app-comp-687',
  templateUrl: './comp-687.component.html',
  styleUrls: ['./comp-687.component.css']
})
export class Comp687Component implements OnInit {

  constructor(private _service: Service687Service) { }

  ngOnInit() {
  }

}
