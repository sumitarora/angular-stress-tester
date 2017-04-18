import { Component, OnInit } from '@angular/core';
import { Service231Service } from '../../services/service-231.service';

@Component({
  selector: 'app-comp-231',
  templateUrl: './comp-231.component.html',
  styleUrls: ['./comp-231.component.css']
})
export class Comp231Component implements OnInit {

  constructor(private _service: Service231Service) { }

  ngOnInit() {
  }

}
