import { Component, OnInit } from '@angular/core';
import { Service314Service } from '../../services/service-314.service';

@Component({
  selector: 'app-comp-314',
  templateUrl: './comp-314.component.html',
  styleUrls: ['./comp-314.component.css']
})
export class Comp314Component implements OnInit {

  constructor(private _service: Service314Service) { }

  ngOnInit() {
  }

}
