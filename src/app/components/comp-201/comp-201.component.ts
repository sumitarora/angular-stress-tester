import { Component, OnInit } from '@angular/core';
import { Service201Service } from '../../services/service-201.service';

@Component({
  selector: 'app-comp-201',
  templateUrl: './comp-201.component.html',
  styleUrls: ['./comp-201.component.css']
})
export class Comp201Component implements OnInit {

  constructor(private _service: Service201Service) { }

  ngOnInit() {
  }

}
