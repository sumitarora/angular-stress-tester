import { Component, OnInit } from '@angular/core';
import { Service464Service } from '../../services/service-464.service';

@Component({
  selector: 'app-comp-464',
  templateUrl: './comp-464.component.html',
  styleUrls: ['./comp-464.component.css']
})
export class Comp464Component implements OnInit {

  constructor(private _service: Service464Service) { }

  ngOnInit() {
  }

}
