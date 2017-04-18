import { Component, OnInit } from '@angular/core';
import { Service321Service } from '../../services/service-321.service';

@Component({
  selector: 'app-comp-321',
  templateUrl: './comp-321.component.html',
  styleUrls: ['./comp-321.component.css']
})
export class Comp321Component implements OnInit {

  constructor(private _service: Service321Service) { }

  ngOnInit() {
  }

}
