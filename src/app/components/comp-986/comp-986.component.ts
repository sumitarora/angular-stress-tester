import { Component, OnInit } from '@angular/core';
import { Service986Service } from '../../services/service-986.service';

@Component({
  selector: 'app-comp-986',
  templateUrl: './comp-986.component.html',
  styleUrls: ['./comp-986.component.css']
})
export class Comp986Component implements OnInit {

  constructor(private _service: Service986Service) { }

  ngOnInit() {
  }

}
