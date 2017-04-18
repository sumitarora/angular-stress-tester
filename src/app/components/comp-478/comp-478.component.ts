import { Component, OnInit } from '@angular/core';
import { Service478Service } from '../../services/service-478.service';

@Component({
  selector: 'app-comp-478',
  templateUrl: './comp-478.component.html',
  styleUrls: ['./comp-478.component.css']
})
export class Comp478Component implements OnInit {

  constructor(private _service: Service478Service) { }

  ngOnInit() {
  }

}
