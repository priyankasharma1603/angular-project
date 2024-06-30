import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css']
})
export class CandidateHomeComponent implements OnInit {
  referrals: any[] = [];
  services: any[] = [];

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.apiService.getReferrals().subscribe(data => this.referrals = data);
    this.apiService.getServices().subscribe(data => this.services = data);
  }

  logout(): void {
    this.authService.logout();
  }
}
