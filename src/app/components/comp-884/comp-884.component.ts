import { Component, OnInit } from '@angular/core';
import { Service884Service } from '../../services/service-884.service';

@Component({
  selector: 'app-comp-884',
  templateUrl: './comp-884.component.html',
  styleUrls: ['./comp-884.component.css']
})
export class Comp884Component implements OnInit {

  constructor(private _service: Service884Service) { }

  ngOnInit() {
  }

}
