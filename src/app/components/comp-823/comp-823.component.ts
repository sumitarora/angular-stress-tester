import { Component, OnInit } from '@angular/core';
import { Service823Service } from '../../services/service-823.service';

@Component({
  selector: 'app-comp-823',
  templateUrl: './comp-823.component.html',
  styleUrls: ['./comp-823.component.css']
})
export class Comp823Component implements OnInit {

  constructor(private _service: Service823Service) { }

  ngOnInit() {
  }

}
