import { Component, OnInit } from '@angular/core';
import { Service154Service } from '../../services/service-154.service';

@Component({
  selector: 'app-comp-154',
  templateUrl: './comp-154.component.html',
  styleUrls: ['./comp-154.component.css']
})
export class Comp154Component implements OnInit {

  constructor(private _service: Service154Service) { }

  ngOnInit() {
  }

}
