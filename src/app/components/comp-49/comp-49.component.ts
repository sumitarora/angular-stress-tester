import { Component, OnInit } from '@angular/core';
import { Service49Service } from '../../services/service-49.service';

@Component({
  selector: 'app-comp-49',
  templateUrl: './comp-49.component.html',
  styleUrls: ['./comp-49.component.css']
})
export class Comp49Component implements OnInit {

  constructor(private _service: Service49Service) { }

  ngOnInit() {
  }

}
