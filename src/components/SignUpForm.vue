<template>
  <div class="sign-up-container">
    <div class="sign-up-content">
      <div class="form-container">
        <div class="heading">
          <p class="heading-1">Create Account</p>
          <p class="paragraph-large">Sign up to access E-Verify</p>
        </div>
        <form @submit.prevent="handleSignUp">
          <!-- Company Name -->
          <div class="form-group">
            <label for="companyName" class="label">Company Name</label>
            <div class="input-container">
              <InputIcon class="pi pi-building icon" />
              <InputText
                id="companyName"
                v-model="companyName"
                class="input"
                :class="{ 'input-error': companyNameError }"
                placeholder="Company Name"
                @input="validateCompanyName"
              />
            </div>
            <small v-if="companyNameError" class="error-message">{{ companyNameError }}</small>
          </div>

          <!-- Company Email -->
          <div class="form-group">
            <label for="companyEmail" class="label">Company Email</label>
            <div class="input-container">
              <InputIcon class="pi pi-envelope icon" />
              <InputText
                id="companyEmail"
                v-model="companyEmail"
                class="input"
                :class="{ 'input-error': emailError }"
                placeholder="Company Email"
                type="email"
                @input="validateEmail"
              />
            </div>
            <small v-if="emailError" class="error-message">{{ emailError }}</small>
          </div>

          <!-- Company Phone -->
          <div class="form-group">
            <label for="companyPhone" class="label">Company Phone</label>
            <div class="input-container">
              <InputIcon class="pi pi-phone icon" />
              <InputText
                id="companyPhone"
                v-model="companyPhone"
                class="input"
                :class="{ 'input-error': phoneError }"
                placeholder="Company Phone"
                type="tel"
                @input="validatePhone"
              />
            </div>
            <small v-if="phoneError" class="error-message">{{ phoneError }}</small>
          </div>

          <!-- GST Number -->
          <div class="form-group">
            <label for="gstNumber" class="label">GST Number</label>
            <div class="input-container">
              <InputIcon class="pi pi-id-card icon" />
              <InputText
                id="gstNumber"
                v-model="gstNumber"
                class="input"
                :class="{ 'input-error': gstError }"
                placeholder="GST Number"
                @input="validateGST"
              />
            </div>
            <small v-if="gstError" class="error-message">{{ gstError }}</small>
          </div>

          <!-- PAN Number -->
          <div class="form-group">
            <label for="panNumber" class="label">PAN Number</label>
            <div class="input-container">
              <InputIcon class="pi pi-credit-card icon" />
              <InputText
                id="panNumber"
                v-model="panNumber"
                class="input"
                :class="{ 'input-error': panError }"
                placeholder="PAN Number"
                @input="handlePanInput"
                @blur="validatePAN"
              />
            </div>
            <small v-if="panError" class="error-message">{{ panError }}</small>
          </div>

          <!-- TAN Number -->
          <div class="form-group">
            <label for="tanNumber" class="label">TAN Number</label>
            <div class="input-container">
              <InputIcon class="pi pi-credit-card icon" />
              <InputText
                id="tanNumber"
                v-model="tanNumber"
                class="input"
                :class="{ 'input-error': tanError }"
                placeholder="TAN Number"
                @input="handleTanInput"
                @blur="validateTAN"
              />
            </div>
            <small v-if="tanError" class="error-message">{{ tanError }}</small>
          </div>

          <!-- Aadhar Number -->
          <div class="form-group">
            <label for="aadharNumber" class="label">Aadhar Number</label>
            <div class="input-container">
              <InputIcon class="pi pi-credit-card icon" />
              <InputText
                id="aadharNumber"
                v-model="aadharNumber"
                class="input"
                :class="{ 'input-error': aadharError }"
                placeholder="Aadhar Number"
                @input="validateAadhar"
              />
            </div>
            <small v-if="aadharError" class="error-message">{{ aadharError }}</small>
          </div>

          <!-- Company Address -->
          <div class="form-group">
            <label for="companyAddress" class="label">Company Address</label>
            <div class="input-container">
              <InputIcon class="pi pi-map-marker icon" />
              <InputText
                id="companyAddress"
                v-model="companyAddress"
                class="input"
                :class="{ 'input-error': companyAddressError }"
                placeholder="Company Address"
                @input="validateCompanyAddress"
              />
            </div>
            <small v-if="companyAddressError" class="error-message">{{ companyAddressError }}</small>
          </div>

          <!-- Submit Button -->
          <div class="form-group">
            <Button type="submit" label="Sign Up" icon="pi pi-user-plus" class="p-button-success button" />
          </div>
        </form>
      </div>

      <div class="image-container">
        <img src="/src/assets/image/sign-up-img.png" alt="Sign Up" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import InputIcon from "primevue/inputicon";

export default {
  name: "CompanyOnboarding",
  components: {
    InputText,
    Button,
    InputIcon,
  },
  data() {
    return {
      companyName: "",
      companyEmail: "",
      companyPhone: "",
      gstNumber: "",
      tanNumber: "",
      panNumber: "",
      aadharNumber: "",
      companyAddress: "",
      companyNameError: "",
      emailError: "",
      phoneError: "",
      gstError: "",
      tanError: "",
      panError: "",
      aadharError: "",
      companyAddressError: "",
    };
  },
  methods: {
    // Validate Company Name
    validateCompanyName() {
      if (!this.companyName) {
        this.companyNameError = "Company Name is required.";
      } else {
        this.companyNameError = "";
      }
    },

    // Validate Email
    validateEmail() {
      const emailRegex = /^[^\s@]{2,}@[^\s@]+\.[^\s@]{2,}$/;
      if (!this.companyEmail) {
        this.emailError = "Email is required.";
      } else if (!emailRegex.test(this.companyEmail)) {
        this.emailError = "Invalid email address.";
      } else {
        this.emailError = "";
      }
    },

    // Validate Phone
    validatePhone() {
      const phoneRegex = /^(\+91)?[0-9]{10}$/;
      if (!this.companyPhone) {
        this.phoneError = "Phone number is required.";
      } else if (!phoneRegex.test(this.companyPhone)) {
        this.phoneError = "Invalid phone number.";
      } else {
        this.phoneError = "";
      }
    },

    // Validate GST
    validateGST() {
      const gstRegex = /^[0-9]{15}$/;
      if (!this.gstNumber) {
        this.gstError = "GST Number is required.";
      } else if (!gstRegex.test(this.gstNumber)) {
        this.gstError = "Invalid GST Number.";
      } else {
        this.gstError = "";
      }
    },

    // Convert to Uppercase
    convertToUpperCase(field) {
      this[field] = this[field].toUpperCase();
    },

    // Handle PAN Input
    handlePanInput() {
      this.convertToUpperCase("panNumber");
      this.validatePAN();
    },

    // Validate PAN
    validatePAN() {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!this.panNumber) {
        this.panError = "PAN Number is required.";
      } else if (!panRegex.test(this.panNumber)) {
        this.panError = "Invalid PAN Number.";
      } else {
        this.panError = "";
      }
    },

    // Handle TAN Input
    handleTanInput() {
      this.convertToUpperCase("tanNumber");
      this.validateTAN();
    },

    // Validate TAN
    validateTAN() {
      const tanRegex = /^[A-Z]{4}[0-9]{5}[A-Z]{1}$/;
      if (!this.tanNumber) {
        this.tanError = "TAN Number is required.";
      } else if (!tanRegex.test(this.tanNumber)) {
        this.tanError = "Invalid TAN Number.";
      } else {
        this.tanError = "";
      }
    },

    // Validate Aadhar
    validateAadhar() {
      const aadharRegex = /^[0-9]{12}$/;
      if (!this.aadharNumber) {
        this.aadharError = "Aadhar Number is required.";
      } else if (!aadharRegex.test(this.aadharNumber)) {
        this.aadharError = "Invalid Aadhar Number.";
      } else {
        this.aadharError = "";
      }
    },

    // Validate Company Address
    validateCompanyAddress() {
      if (!this.companyAddress) {
        this.companyAddressError = "Address is required.";
      } else {
        this.companyAddressError = "";
      }
    },

    // Handle Sign Up
    handleSignUp() {
      this.validateCompanyName();
      this.validateEmail();
      this.validatePhone();
      this.validateGST();
      this.validateTAN();
      this.validatePAN();
      this.validateAadhar();
      this.validateCompanyAddress();

      if (
        !this.companyNameError &&
        !this.emailError &&
        !this.phoneError &&
        !this.gstError &&
        !this.tanError &&
        !this.panError &&
        !this.aadharError &&
        !this.companyAddressError
      ) {
        alert("Form is valid, proceeding with submission.");
        // Add actual sign-up functionality here
      }
    },
  },
};
</script>

<style scoped>
/* General Layout */
.sign-up-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
}

/* Sign-up Content Layout */
.sign-up-content {
  display: flex;
  width: 100%;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
}


/* Form Section */
.form-container {
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Image Section */
.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  max-width: 530px;
  height: auto;
  margin-top: 110px;
}

/* Heading Styles */
.heading {
  text-align: left;
  margin-bottom: 16px;
}

.heading-1 {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.paragraph-large {
  font-size: 14px; /* Smaller font size for the subheading */
  font-weight: normal; /* Normal weight */
  color: #777; /* Lighter color for the subheading */
  margin-top: 0;
  margin-bottom: 0; /* Ensure no extra space below */
}

/* Checkbox Group */
.checkbox-group {
  display: flex;
  align-items: center;
}

/* Checkbox Label */
.checkbox-label {
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  margin-top: 10px;
}

/* Checkbox */
.checkbox {
  margin-top: 10px;
}


/* Input Fields */
.form-group {
  margin-bottom: 20px;
  position: relative;
}

/* Label for Input Fields */
.label {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  text-align: left; /* Ensure the label is left aligned */
}

/* Input Fields */
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  width: 100%;
  padding: 12px 12px 12px 40px; /* Adjust padding for space between icon and text */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

.input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.2);
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
  text-align: left;
}

/* Icon */
.icon {
  position: absolute;
  left: 20px;
  font-size: 18px;
  color: #777;
}


/* Submit Button */
.button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #25a676;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.p-button-success.button:hover {
  background-color: #218e61;
  padding: 12px;
  font-size: 16px;
  border: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sign-up-content {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .form-heading {
    font-size: 24px;
  }

  .image-container {
    height: 200px;
  }
}
</style>
