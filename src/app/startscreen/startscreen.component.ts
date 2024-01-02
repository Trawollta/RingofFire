import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  newGame() {
    this.router.navigate(['/game']);
  }

}
