import { FormControl, ValidationErrors } from "@angular/forms";


export class Luv2ShopValidators {
    // Validation des espaces blancs
    static notOnlyWhitespace(control: FormControl): ValidationErrors | null {
      // Vérifier si la chaîne ne contient que des espaces blancs
      if (control.value != null && control.value.trim().length === 0) {
        // Si invalide, retourner un objet d'erreur
        return { 'notOnlyWhitespace': true };
      } else {
        // Si valide, retourner null
        return null;
      }
    }
  }
