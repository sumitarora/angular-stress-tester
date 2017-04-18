import { Component, OnInit } from '@angular/core';
import { Service495Service } from '../../services/service-495.service';

@Component({
  selector: 'app-comp-495',
  templateUrl: './comp-495.component.html',
  styleUrls: ['./comp-495.component.css']
})
export class Comp495Component implements OnInit {

  constructor(private _service: Service495Service) { }

  ngOnInit() {
  }

}
