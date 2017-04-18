import { Component, OnInit } from '@angular/core';
import { Service156Service } from '../../services/service-156.service';

@Component({
  selector: 'app-comp-156',
  templateUrl: './comp-156.component.html',
  styleUrls: ['./comp-156.component.css']
})
export class Comp156Component implements OnInit {

  constructor(private _service: Service156Service) { }

  ngOnInit() {
  }

}
