import { Component, OnInit } from '@angular/core';
import { Service616Service } from '../../services/service-616.service';

@Component({
  selector: 'app-comp-616',
  templateUrl: './comp-616.component.html',
  styleUrls: ['./comp-616.component.css']
})
export class Comp616Component implements OnInit {

  constructor(private _service: Service616Service) { }

  ngOnInit() {
  }

}
