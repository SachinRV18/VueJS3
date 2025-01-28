<template>
  <div class="sign-in-container">
    <div class="sign-in-content">
      <div class="form-container">
        <div class="heading">
          <p class="heading-1">Sign In</p>
          <p class="paragraph-large">Sign in to access your account</p>
        </div>
        <form @submit.prevent="handleSignIn">
          <!-- Email or Phone -->
          <div class="form-group">
            <label for="companyEmailPhone" class="label">Email or Phone</label>
            <div class="input-container">
              <i class="pi pi-envelope icon"></i>
              <InputText
                id="companyEmailPhone"
                v-model="companyEmailPhone"
                class="input"
                :class="{ 'input-error': emailError }"
                placeholder="Email or Phone"
                type="text"
                @input="validateEmailOrPhone"
              />
            </div>
            <small v-if="emailError" class="error-message">{{ emailError }}</small>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password" class="label">Password</label>
            <div class="input-container">
              <i class="pi pi-lock icon"></i>
              <InputText
                id="password"
                v-model="password"
                class="input"
                :class="{ 'input-error': passwordError }"
                placeholder="Password"
                type="password"
              />
            </div>
            <small v-if="passwordError" class="error-message">{{ passwordError }}</small>
          </div>

          <!-- Privacy Policy -->
          <div class="form-group checkbox-group">
            <Checkbox
              inputId="privacyPolicy"
              v-model="agreeToPolicy"
              :binary="true"
            />
            <label for="privacyPolicy" class="checkbox-label">I agree to the Privacy Policy</label>
          </div>

          <!-- Submit Button -->
          <div class="form-group">
            <Button type="submit" label="Sign In" icon="pi pi-sign-in" class="p-button-success button" />
          </div>
        </form>
      </div>
      <div class="image-container">
        <img src="/src/assets/image/sign-in-img.jpg" alt="Sign In" class="image" />
      </div>
    </div>
  </div>
</template>


<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Checkbox from 'primevue/checkbox';

export default {
  name: "CompanySignIn",
  components: {
    InputText,
    Button,
    Checkbox,
  },
  data() {
    return {
      companyEmailPhone: "",
      password: "",
      agreeToPolicy: false,
      emailError: "",
      passwordError: "",
      policyError: "",
    };
  },
  methods: {
    validateEmailOrPhone() {
  const emailRegex = /^[^\s@]{2,}@[^\s@]+\.[^\s@]{2,}$/;
  const phoneRegex = /^(\+91)?[0-9]{10}$/;

  if (!this.companyEmailPhone) {
    this.emailError = "Email or phone is required.";
    return;
  }

  if (emailRegex.test(this.companyEmailPhone)) {
    this.emailError = "";
  } else if (phoneRegex.test(this.companyEmailPhone)) {
    this.emailError = "";
  } else {
    this.emailError = "Must be a valid email or phone number.";
  }
},

    handleSignIn() {
  // Reset errors
  this.emailError = "";
  this.passwordError = "";
  this.policyError = "";

  let formValid = true;

  // Validate Email or Phone
  if (!this.companyEmailPhone) {
    this.emailError = "Email or phone is required.";
    formValid = false;
  } else {
    // Call the validateEmailOrPhone method to validate
    this.validateEmailOrPhone();
    if (this.emailError) {
      formValid = false;
    }
  }

  // Validate Password
  if (!this.password) {
    this.passwordError = "Password is required.";
    formValid = false;
  } else if (this.password.length < 6) {
    this.passwordError = "Password must be at least 6 characters long.";
    formValid = false;
  }

  // Validate Privacy Policy
  if (!this.agreeToPolicy) {
    this.policyError = "You must agree to the Privacy Policy.";
    formValid = false;
  }

  // If there are any validation errors, return early
  if (!formValid) {
    return;
  }

  alert("Signed in successfully!");
}

  },
};
</script>



<style scoped>
/* General Layout */
.sign-in-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
}

/* Sign-in Content Layout */
.sign-in-content {
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
  border-radius: 10px;
}

/* Heading Styles */
.heading {
  text-align: left;
  margin-bottom: 24px;
}

.heading-1 {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.paragraph-large {
  font-size: 14px;
  font-weight: normal;
  color: #777;
  margin-top: 8px;
  margin-bottom: 0;
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
  margin-bottom: 8px;
  display: block;
  text-align: left;
}

/* Input Fields */
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

.input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 4px rgba(76, 175, 80, 0.2);
}

/* Input Error State */
.input-error {
  border-color: red;
}

/* Error Message */
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
  left: 15px;
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
}

/* Responsive Design */
@media (max-width: 768px) {
  .sign-in-content {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .heading-1 {
    font-size: 24px;
  }

  .image-container {
    height: 200px;
  }
}
</style>
