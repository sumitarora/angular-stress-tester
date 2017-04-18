import { Component, OnInit } from '@angular/core';
import { Service515Service } from '../../services/service-515.service';

@Component({
  selector: 'app-comp-515',
  templateUrl: './comp-515.component.html',
  styleUrls: ['./comp-515.component.css']
})
export class Comp515Component implements OnInit {

  constructor(private _service: Service515Service) { }

  ngOnInit() {
  }

}
