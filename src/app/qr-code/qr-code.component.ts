import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [RouterLink,RouterOutlet,QRCodeModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent {




}
