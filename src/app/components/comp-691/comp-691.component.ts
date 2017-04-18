import { Component, OnInit } from '@angular/core';
import { Service691Service } from '../../services/service-691.service';

@Component({
  selector: 'app-comp-691',
  templateUrl: './comp-691.component.html',
  styleUrls: ['./comp-691.component.css']
})
export class Comp691Component implements OnInit {

  constructor(private _service: Service691Service) { }

  ngOnInit() {
  }

}
