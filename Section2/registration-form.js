const RegistrationForm = {
    data() {
        return {
            addressSameChecked: true,
        }
    },
    props: ["items"],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input label="First Name" name="first-name" required="true" type="text"></text-input>
            <text-input label="Last Name" name="last-name" required="true" type="text"></text-input>
            <text-input label="Email" name="email" required="true" type="email"></text-input>
            <text-input label="Password" name="password" required="true" type="password"></text-input>
            <select-input label="Favourite Color" name="color" :items="items"></select-input>
            
            <text-input label="Address" name="address" required="true" type="text"></text-input>
            <text-input label="City/Town" name="citytown" required="true" type="text"></text-input>
            <text-input label="State/Provence" name="stateprovence" required="true" type="text"></text-input>
            <text-input label="Zip/Postal" name="zip" required="true" type="text"></text-input>
            
            
            <check-input v-on:click="addressSame" label="Mailing Address Same" checked="true" v-model="addressSameChecked"></check-input>
            <div v-if="addressSameChecked === false">
                <div class="mt-3">
                    <text-input label="Mailing Address" name="address2" required="true" type="text"></text-input>
                    <text-input label="Mailing City/Town" name="citytown2" required="true" type="text"></text-input>
                    <text-input label="Mailing State/Provence" name="stateprovence2" required="true" type="text"></text-input>
                    <text-input label="Mailing Zip/Postal" name="zip2" required="true" type="text"></text-input>                    
                </div>
            </div>

            <check-input label="I agree to terms and conditions" requried="true"></check-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    components: {
        'text-input':TextInput,
        'select-input':SelectInput,
        'check-input':CheckInput,
    },
    methods: {
        addressSame() {
            console.log("address same fired")
            if (this.addressSameChecked === true) {
                console.log("Checked on click");
                this.addressSameChecked = false;
            }
            else {
                console.log("Unchecked on click")
                this.addressSameChecked = true;
            }
        }
    },
    mounted() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
                })
        })()
    }
}