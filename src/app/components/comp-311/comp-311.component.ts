import { Component, OnInit } from '@angular/core';
import { Service311Service } from '../../services/service-311.service';

@Component({
  selector: 'app-comp-311',
  templateUrl: './comp-311.component.html',
  styleUrls: ['./comp-311.component.css']
})
export class Comp311Component implements OnInit {

  constructor(private _service: Service311Service) { }

  ngOnInit() {
  }

}
