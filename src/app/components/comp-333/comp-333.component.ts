import { Component, OnInit } from '@angular/core';
import { Service333Service } from '../../services/service-333.service';

@Component({
  selector: 'app-comp-333',
  templateUrl: './comp-333.component.html',
  styleUrls: ['./comp-333.component.css']
})
export class Comp333Component implements OnInit {

  constructor(private _service: Service333Service) { }

  ngOnInit() {
  }

}
