import { Component, OnInit } from '@angular/core';
import { Service88Service } from '../../services/service-88.service';

@Component({
  selector: 'app-comp-88',
  templateUrl: './comp-88.component.html',
  styleUrls: ['./comp-88.component.css']
})
export class Comp88Component implements OnInit {

  constructor(private _service: Service88Service) { }

  ngOnInit() {
  }

}
