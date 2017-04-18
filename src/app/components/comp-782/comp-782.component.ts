import { Component, OnInit } from '@angular/core';
import { Service782Service } from '../../services/service-782.service';

@Component({
  selector: 'app-comp-782',
  templateUrl: './comp-782.component.html',
  styleUrls: ['./comp-782.component.css']
})
export class Comp782Component implements OnInit {

  constructor(private _service: Service782Service) { }

  ngOnInit() {
  }

}
