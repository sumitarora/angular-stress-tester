import { Component, OnInit } from '@angular/core';
import { Service219Service } from '../../services/service-219.service';

@Component({
  selector: 'app-comp-219',
  templateUrl: './comp-219.component.html',
  styleUrls: ['./comp-219.component.css']
})
export class Comp219Component implements OnInit {

  constructor(private _service: Service219Service) { }

  ngOnInit() {
  }

}
