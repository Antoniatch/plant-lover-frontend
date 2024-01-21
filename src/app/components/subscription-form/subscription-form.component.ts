import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from "@angular/forms";
import { FormService } from "../../services/form.service";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-subscription-form',
    standalone: true,
    templateUrl: './subscription-form.component.html',
    styleUrl: './subscription-form.component.sass',
    imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class SubscriptionFormComponent {

        subscriptionForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            name: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            passwordRepeat: new FormControl('', [Validators.required])
        })

        name= this.subscriptionForm.get('name')
        email= this.subscriptionForm.get('email')
        password= this.subscriptionForm.get('password')
        passwordRepeat= this.subscriptionForm.get('passwordRepeat')


    
    passwordsMatch(): boolean {
        if ((this.password?.value !== '' || this.passwordRepeat?.value !== '') && !this.fieldHasError(this.passwordRepeat))
            return this.password?.value !== this.passwordRepeat?.value ? false : true
            return true
    }

    formService = inject(FormService)

    fieldHasError = this.formService.fieldHasError

    submitSubscription() {
        if (this.subscriptionForm.valid) {
            this.formService.submitSubscription(
                this.subscriptionForm.value.email ?? '',
                this.subscriptionForm.value.name ?? '',
                this.subscriptionForm.value.password ?? '',
                )
            }
    }
}