import { Component } from '@angular/core';
import {
  IonButton, IonInput, IonIcon,
  IonHeader, IonToolbar, IonTitle, IonContent
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import { cloudUpload } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonButton, IonInput, IonIcon,
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  // constructor() {}

  imageUrl: string | null = null;

  constructor() {
    addIcons({ cloudUpload });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      // Convertir el archivo a una URL base64 para mostrarlo en la vista
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };

      reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }

}
