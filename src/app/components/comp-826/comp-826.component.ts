import { Component, OnInit } from '@angular/core';
import { Service826Service } from '../../services/service-826.service';

@Component({
  selector: 'app-comp-826',
  templateUrl: './comp-826.component.html',
  styleUrls: ['./comp-826.component.css']
})
export class Comp826Component implements OnInit {

  constructor(private _service: Service826Service) { }

  ngOnInit() {
  }

}
