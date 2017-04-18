import { Component, OnInit } from '@angular/core';
import { Service486Service } from '../../services/service-486.service';

@Component({
  selector: 'app-comp-486',
  templateUrl: './comp-486.component.html',
  styleUrls: ['./comp-486.component.css']
})
export class Comp486Component implements OnInit {

  constructor(private _service: Service486Service) { }

  ngOnInit() {
  }

}
