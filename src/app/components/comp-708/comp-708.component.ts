import { Component, OnInit } from '@angular/core';
import { Service708Service } from '../../services/service-708.service';

@Component({
  selector: 'app-comp-708',
  templateUrl: './comp-708.component.html',
  styleUrls: ['./comp-708.component.css']
})
export class Comp708Component implements OnInit {

  constructor(private _service: Service708Service) { }

  ngOnInit() {
  }

}
