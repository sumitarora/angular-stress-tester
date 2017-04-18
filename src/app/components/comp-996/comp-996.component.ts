import { Component, OnInit } from '@angular/core';
import { Service996Service } from '../../services/service-996.service';

@Component({
  selector: 'app-comp-996',
  templateUrl: './comp-996.component.html',
  styleUrls: ['./comp-996.component.css']
})
export class Comp996Component implements OnInit {

  constructor(private _service: Service996Service) { }

  ngOnInit() {
  }

}
