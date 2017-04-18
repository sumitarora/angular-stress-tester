import { Component, OnInit } from '@angular/core';
import { Service447Service } from '../../services/service-447.service';

@Component({
  selector: 'app-comp-447',
  templateUrl: './comp-447.component.html',
  styleUrls: ['./comp-447.component.css']
})
export class Comp447Component implements OnInit {

  constructor(private _service: Service447Service) { }

  ngOnInit() {
  }

}
